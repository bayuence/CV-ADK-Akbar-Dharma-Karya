/**
 * Script untuk migrasi data dari lib/data.ts ke Sanity CMS.
 * Jalankan: node scripts/migrate-to-sanity.mjs
 *
 * Pastikan SANITY_TOKEN sudah di-set (buat di sanity.io/manage → API → Tokens)
 */

import { createClient } from "@sanity/client";

const projectId = "9l4mv13h";
const dataset = "production";
const token = process.env.SANITY_TOKEN;

if (!token) {
  console.error("❌ SANITY_TOKEN belum di-set!");
  console.log("Buat token di: https://www.sanity.io/manage/project/9l4mv13h/api#tokens");
  console.log('Jalankan: $env:SANITY_TOKEN="token-kamu"; node scripts/migrate-to-sanity.mjs');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2025-02-15",
  useCdn: false,
});

// Data dari lib/data.ts
const companyData = {
  _type: "companyInfo",
  _id: "companyInfo",
  name: "CV Akbar Dharma Karya",
  tagline: "Dari Konsep Hingga Jadi Nyata",
  description:
    "CV Akbar Dharma Karya melayani jasa arsitek, konstruksi, dan desain interior dengan sentuhan modern dan profesional.",
  shortDesc: "Design • Build • Interior",
  phone: "+6281390788045",
  email: "akbardharmakarya@gmail.com",
  address:
    "Perumahan Laguna Spring Hill Blok A No. 3, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198",
  instagram: "https://instagram.com/akbar.dharmakarya",
  facebook: "https://www.facebook.com/profile.php?id=61579816186806",
  whatsapp: "https://wa.me/6281390788045",
  linktree: "https://linktr.ee/akbardharmakarya",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.5!2d110.4211283!3d-7.8350953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57170f775ffd%3A0x941ebb717a66a30!2sCV%20Akbar%20Dharma%20Karya!5e0!3m2!1sid!2sid!4v1",
  stats: [
    { _key: "s1", number: "50+", label: "Proyek Selesai" },
    { _key: "s2", number: "5+", label: "Tahun Pengalaman" },
    { _key: "s3", number: "100%", label: "Kepuasan Klien" },
  ],
  subBrands: [
    {
      _key: "sb1",
      name: "Bagusin Studio",
      handle: "@bagusin.studio",
      description: "Design Interior & Custom Furniture",
      instagram: "https://instagram.com/bagusin.studio",
    },
    {
      _key: "sb2",
      name: "Bangunin Rumah",
      handle: "@bangunin.rumah",
      description: "Kontraktor Rumah di Jogja",
      instagram: "https://instagram.com/bangunin.rumah",
    },
  ],
};

const servicesData = [
  {
    _type: "service",
    _id: "service-1",
    title: "Desain Arsitektur",
    description:
      "Merancang hunian dan bangunan komersial dengan konsep modern yang fungsional dan estetis. Setiap desain dibuat sesuai kebutuhan dan karakter Anda.",
    icon: "building",
    order: 1,
  },
  {
    _type: "service",
    _id: "service-2",
    title: "Konstruksi & Pembangunan",
    description:
      "Membangun dari nol hingga selesai dengan material berkualitas dan tenaga ahli profesional. Kokoh, presisi, dan tepat waktu.",
    icon: "hammer",
    order: 2,
  },
  {
    _type: "service",
    _id: "service-3",
    title: "Desain Interior",
    description:
      "Mengubah ruang Anda menjadi tempat yang nyaman, hangat, dan penuh karakter. Custom furniture dan desain yang personal.",
    icon: "palette",
    order: 3,
  },
  {
    _type: "service",
    _id: "service-4",
    title: "Renovasi",
    description:
      "Perbarui tampilan dan struktur bangunan Anda. Dari kamar mandi, dapur, hingga seluruh rumah dengan sentuhan modern.",
    icon: "wrench",
    order: 4,
  },
  {
    _type: "service",
    _id: "service-5",
    title: "Desain 3D",
    description:
      "Visualisasi desain dalam bentuk 3D yang realistis sebelum pembangunan dimulai. Lihat hasil akhir sebelum terwujud.",
    icon: "cube",
    order: 5,
  },
  {
    _type: "service",
    _id: "service-6",
    title: "Konsultasi",
    description:
      "Diskusi langsung dengan tim ahli kami untuk menemukan solusi terbaik sesuai budget dan kebutuhan proyek Anda.",
    icon: "chat",
    order: 6,
  },
];

const projectsData = [
  {
    _type: "project",
    _id: "project-1",
    title: "Rumah Modern Tropical",
    category: "Arsitektur",
    description:
      "Desain dan pembangunan rumah modern tropical dengan konsep terbuka, memaksimalkan sirkulasi udara dan pencahayaan alami.",
    status: "completed",
    progress: 100,
    location: "Sleman, Yogyakarta",
    order: 1,
  },
  {
    _type: "project",
    _id: "project-2",
    title: "Kitchen Set Minimalis",
    category: "Interior",
    description:
      "Custom kitchen set dengan desain minimalis, material HPL premium, dan LED strip lighting untuk nuansa modern.",
    status: "completed",
    progress: 100,
    location: "Bantul, Yogyakarta",
    order: 2,
  },
  {
    _type: "project",
    _id: "project-3",
    title: "Mushola Modern",
    category: "Interior",
    description:
      "Desain interior mushola dengan sentuhan modern Islamic, geometric pattern, dan material kayu natural.",
    status: "completed",
    progress: 100,
    location: "Banguntapan, Bantul",
    order: 3,
  },
  {
    _type: "project",
    _id: "project-4",
    title: "Renovasi Kamar Mandi",
    category: "Renovasi",
    description:
      "Renovasi total kamar mandi dengan konsep modern minimalis, rainfall shower, dan material granite premium.",
    status: "completed",
    progress: 100,
    location: "Yogyakarta",
    order: 4,
  },
  {
    _type: "project",
    _id: "project-5",
    title: "Pembangunan Rumah Bpk. Darmawan",
    category: "Konstruksi",
    description:
      "Pembangunan rumah tinggal 2 lantai dengan konsep modern tropical. Saat ini dalam tahap pengerjaan struktur.",
    status: "in-progress",
    progress: 65,
    location: "Jember, Jawa Timur",
    order: 5,
  },
  {
    _type: "project",
    _id: "project-6",
    title: "Interior Kamar Tidur",
    category: "Interior",
    description:
      "Custom bedroom interior dengan headboard, wardrobe, dan meja kerja built-in. Nuansa hangat dan elegan.",
    status: "in-progress",
    progress: 80,
    location: "Yogyakarta",
    order: 6,
  },
];

const testimonialsData = [
  {
    _type: "testimonial",
    _id: "testimonial-1",
    name: "Bpk. Hendra Wijaya",
    role: "Pemilik Rumah",
    content:
      "Sangat puas dengan hasil kerja tim Akbar Dharma Karya. Rumah kami jadi persis seperti yang kami impikan. Kualitas bangunan sangat kokoh dan desainnya modern.",
    rating: 5,
    order: 1,
  },
  {
    _type: "testimonial",
    _id: "testimonial-2",
    name: "Ibu Sarah Putri",
    role: "Pemilik Cafe",
    content:
      "Kitchen set yang dikerjakan sangat rapi dan berkualitas. Tim sangat profesional dan tepat waktu. Harga juga sangat bersaing dibanding kompetitor.",
    rating: 5,
    order: 2,
  },
  {
    _type: "testimonial",
    _id: "testimonial-3",
    name: "Bpk. Ahmad Fauzi",
    role: "Pemilik Rumah",
    content:
      "Proses renovasi berjalan lancar, komunikasi dengan tim sangat baik. Hasil akhirnya melebihi ekspektasi kami. Terima kasih banyak!",
    rating: 5,
    order: 3,
  },
  {
    _type: "testimonial",
    _id: "testimonial-4",
    name: "Ibu Retno Handayani",
    role: "Pemilik Rumah",
    content:
      "Desain mushola rumah kami sangat indah. Detailnya luar biasa, dari pemilihan material hingga pencahayaan semuanya sempurna.",
    rating: 5,
    order: 4,
  },
];

const processData = [
  {
    _type: "processStep",
    _id: "process-1",
    step: 1,
    title: "Konsultasi",
    description:
      "Diskusi awal untuk memahami kebutuhan, preferensi desain, dan budget proyek Anda.",
  },
  {
    _type: "processStep",
    _id: "process-2",
    step: 2,
    title: "Survey & Pengukuran",
    description:
      "Tim kami melakukan survey lokasi dan pengukuran detail untuk perencanaan yang akurat.",
  },
  {
    _type: "processStep",
    _id: "process-3",
    step: 3,
    title: "Desain & Konsep",
    description:
      "Pembuatan desain 2D/3D dan konsep yang sesuai keinginan hingga Anda puas.",
  },
  {
    _type: "processStep",
    _id: "process-4",
    step: 4,
    title: "RAB & Kontrak",
    description:
      "Penyusunan Rencana Anggaran Biaya transparan dan penandatanganan kontrak kerja.",
  },
  {
    _type: "processStep",
    _id: "process-5",
    step: 5,
    title: "Pengerjaan",
    description:
      "Proses pembangunan/renovasi oleh tenaga ahli dengan pengawasan ketat.",
  },
  {
    _type: "processStep",
    _id: "process-6",
    step: 6,
    title: "Serah Terima",
    description:
      "Pengecekan final bersama dan serah terima proyek yang sudah selesai.",
  },
];

async function migrate() {
  console.log("🚀 Memulai migrasi data ke Sanity...\n");

  const transaction = client.transaction();

  // Company Info
  console.log("📝 Company Info...");
  transaction.createOrReplace(companyData);

  // Services
  console.log("📝 Services (6)...");
  for (const s of servicesData) {
    transaction.createOrReplace(s);
  }

  // Projects (without images - images need to be uploaded separately via Studio)
  console.log("📝 Projects (6)...");
  for (const p of projectsData) {
    transaction.createOrReplace(p);
  }

  // Testimonials
  console.log("📝 Testimonials (4)...");
  for (const t of testimonialsData) {
    transaction.createOrReplace(t);
  }

  // Process Steps
  console.log("📝 Process Steps (6)...");
  for (const p of processData) {
    transaction.createOrReplace(p);
  }

  console.log("\n⏳ Mengirim ke Sanity...");
  const result = await transaction.commit();
  console.log(`✅ Migrasi selesai! ${result.results.length} dokumen berhasil disimpan.`);
  console.log("\n📌 Catatan:");
  console.log("   - Foto project belum ter-upload (upload manual via Sanity Studio)");
  console.log("   - Logo sub-brand belum ter-upload (upload manual via Sanity Studio)");
  console.log(`\n🔗 Buka Sanity Studio: http://localhost:3000/studio`);
}

migrate().catch((err) => {
  console.error("❌ Gagal migrasi:", err.message);
  process.exit(1);
});
