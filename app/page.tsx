import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import ActiveProjects from "@/components/active-projects";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { getSiteData } from "@/sanity/lib/queries";

export default async function Home() {
  const data = await getSiteData();

  return (
    <main>
      <Navbar data={data} />
      <Hero data={data} />
      <About data={data} />
      <Services data={data} />
      <Projects data={data} />
      <ActiveProjects data={data} />
      <Process data={data} />
      <Testimonials data={data} />
      <Contact data={data} />
      <Footer data={data} />
      <WhatsAppFloat data={data} />
    </main>
  );
}
