import { client } from "./client";
import { siteData as staticData } from "@/lib/data";

// GROQ Queries
const companyQuery = `*[_type == "companyInfo"][0]{
  name, tagline, description, shortDesc,
  phone, email, address,
  instagram, facebook, whatsapp, linktree, mapEmbedUrl,
  stats[]{ number, label },
  subBrands[]{
    name, handle, description,
    "logo": logo.asset->url,
    instagram
  }
}`;

const servicesQuery = `*[_type == "service"] | order(order asc){
  "id": _id,
  title, description, icon, order
}`;

const projectsQuery = `*[_type == "project"] | order(order asc){
  "id": _id,
  title, category, description,
  "image": image.asset->url,
  status, progress, location, order
}`;

const testimonialsQuery = `*[_type == "testimonial"] | order(order asc){
  "id": _id,
  name, role, content, rating, order
}`;

const processQuery = `*[_type == "processStep"] | order(step asc){
  step, title, description
}`;

/**
 * Fetch all site data from Sanity CMS.
 * Falls back to static data (lib/data.ts) if Sanity is empty or fails.
 */
export async function getSiteData() {
  try {
    const [company, services, projects, testimonials, process] =
      await Promise.all([
        client.fetch(companyQuery),
        client.fetch(servicesQuery),
        client.fetch(projectsQuery),
        client.fetch(testimonialsQuery),
        client.fetch(processQuery),
      ]);

    // If Sanity has data, use it. Otherwise fall back to static.
    const hasData = company && services?.length > 0;

    if (!hasData) {
      console.log("ℹ️ Sanity kosong, menggunakan data statis...");
      return staticData;
    }

    return {
      navLinks: staticData.navLinks, // Nav links stay hardcoded (tied to section ids)
      stats: company.stats || staticData.stats,
      company: {
        name: company.name || staticData.company.name,
        tagline: company.tagline || staticData.company.tagline,
        description: company.description || staticData.company.description,
        shortDesc: company.shortDesc || staticData.company.shortDesc,
        phone: company.phone || staticData.company.phone,
        email: company.email || staticData.company.email,
        address: company.address || staticData.company.address,
        instagram: company.instagram || staticData.company.instagram,
        facebook: company.facebook || staticData.company.facebook,
        whatsapp: company.whatsapp || staticData.company.whatsapp,
        linktree: company.linktree || staticData.company.linktree,
        mapEmbedUrl: company.mapEmbedUrl || staticData.company.mapEmbedUrl,
        subBrands: company.subBrands?.length
          ? company.subBrands
          : staticData.company.subBrands,
      },
      services: services.length > 0 ? services : staticData.services,
      projects: projects.length > 0
        ? projects.map((p: Record<string, unknown>) => ({
            ...p,
            image: p.image || staticData.projects.find(
              (sp) => sp.title === p.title
            )?.image || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
          }))
        : staticData.projects,
      testimonials:
        testimonials.length > 0 ? testimonials : staticData.testimonials,
      process: process.length > 0 ? process : staticData.process,
    };
  } catch (error) {
    console.warn("⚠️ Gagal ambil data dari Sanity, gunakan data statis:", error);
    return staticData;
  }
}
