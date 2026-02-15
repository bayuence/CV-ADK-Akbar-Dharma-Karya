export const siteData = {
  navLinks: [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Proyek", href: "#proyek" },
    { label: "Proses", href: "#proses" },
    { label: "Kontak", href: "#kontak" },
  ],

  stats: [
    { number: "50+", label: "Proyek Selesai" },
    { number: "5+", label: "Tahun Pengalaman" },
    { number: "100%", label: "Kepuasan Klien" },
  ],

  company: {
    name: "CV Akbar Dharma Karya",
    tagline: "Dari Konsep Hingga Jadi Nyata",
    description:
      "CV Akbar Dharma Karya melayani jasa arsitek, konstruksi, dan desain interior dengan sentuhan modern dan profesional.",
    shortDesc: "Design \u2022 Build \u2022 Interior",
    phone: "+6281390788045",
    email: "akbardharmakarya@gmail.com",
    address: "Perumahan Laguna Spring Hill Blok A No. 3, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198",
    instagram: "https://instagram.com/akbar.dharmakarya",
    facebook: "https://www.facebook.com/profile.php?id=61579816186806",
    whatsapp: "https://wa.me/6281390788045",
    linktree: "https://linktr.ee/akbardharmakarya",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.5!2d110.4211283!3d-7.8350953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57170f775ffd%3A0x941ebb717a66a30!2sCV%20Akbar%20Dharma%20Karya!5e0!3m2!1sid!2sid!4v1",
    subBrands: [
      {
        name: "Bagusin Studio",
        handle: "@bagusin.studio",
        description: "Design Interior & Custom Furniture",
        instagram: "https://instagram.com/bagusin.studio",
      },
      {
        name: "Bangunin Rumah",
        handle: "@bangunin.rumah",
        description: "Kontraktor Rumah di Jogja",
        instagram: "https://instagram.com/bangunin.rumah",
      },
    ],
  },

  services: [
    {
      id: 1,
      title: "Desain Arsitektur",
      description:
        "Merancang hunian dan bangunan komersial dengan konsep modern yang fungsional dan estetis. Setiap desain dibuat sesuai kebutuhan dan karakter Anda.",
      icon: "building",
    },
    {
      id: 2,
      title: "Konstruksi & Pembangunan",
      description:
        "Membangun dari nol hingga selesai dengan material berkualitas dan tenaga ahli profesional. Kokoh, presisi, dan tepat waktu.",
      icon: "hammer",
    },
    {
      id: 3,
      title: "Desain Interior",
      description:
        "Mengubah ruang Anda menjadi tempat yang nyaman, hangat, dan penuh karakter. Custom furniture dan desain yang personal.",
      icon: "palette",
    },
    {
      id: 4,
      title: "Renovasi",
      description:
        "Perbarui tampilan dan struktur bangunan Anda. Dari kamar mandi, dapur, hingga seluruh rumah dengan sentuhan modern.",
      icon: "wrench",
    },
    {
      id: 5,
      title: "Desain 3D",
      description:
        "Visualisasi desain dalam bentuk 3D yang realistis sebelum pembangunan dimulai. Lihat hasil akhir sebelum terwujud.",
      icon: "cube",
    },
    {
      id: 6,
      title: "Konsultasi",
      description:
        "Diskusi langsung dengan tim ahli kami untuk menemukan solusi terbaik sesuai budget dan kebutuhan proyek Anda.",
      icon: "chat",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Rumah Modern Tropical",
      category: "Arsitektur",
      description:
        "Desain dan pembangunan rumah modern tropical dengan konsep terbuka, memaksimalkan sirkulasi udara dan pencahayaan alami.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      status: "completed" as const,
      progress: 100,
      location: "Sleman, Yogyakarta",
    },
    {
      id: 2,
      title: "Kitchen Set Minimalis",
      category: "Interior",
      description:
        "Custom kitchen set dengan desain minimalis, material HPL premium, dan LED strip lighting untuk nuansa modern.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      status: "completed" as const,
      progress: 100,
      location: "Bantul, Yogyakarta",
    },
    {
      id: 3,
      title: "Mushola Modern",
      category: "Interior",
      description:
        "Desain interior mushola dengan sentuhan modern Islamic, geometric pattern, dan material kayu natural.",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80",
      status: "completed" as const,
      progress: 100,
      location: "Banguntapan, Bantul",
    },
    {
      id: 4,
      title: "Renovasi Kamar Mandi",
      category: "Renovasi",
      description:
        "Renovasi total kamar mandi dengan konsep modern minimalis, rainfall shower, dan material granite premium.",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      status: "completed" as const,
      progress: 100,
      location: "Yogyakarta",
    },
    {
      id: 5,
      title: "Pembangunan Rumah Bpk. Darmawan",
      category: "Konstruksi",
      description:
        "Pembangunan rumah tinggal 2 lantai dengan konsep modern tropical. Saat ini dalam tahap pengerjaan struktur.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      status: "in-progress" as const,
      progress: 65,
      location: "Jember, Jawa Timur",
    },
    {
      id: 6,
      title: "Interior Kamar Tidur",
      category: "Interior",
      description:
        "Custom bedroom interior dengan headboard, wardrobe, dan meja kerja built-in. Nuansa hangat dan elegan.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      status: "in-progress" as const,
      progress: 80,
      location: "Yogyakarta",
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Bpk. Hendra Wijaya",
      role: "Pemilik Rumah",
      content:
        "Sangat puas dengan hasil kerja tim Akbar Dharma Karya. Rumah kami jadi persis seperti yang kami impikan. Kualitas bangunan sangat kokoh dan desainnya modern.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ibu Sarah Putri",
      role: "Pemilik Cafe",
      content:
        "Kitchen set yang dikerjakan sangat rapi dan berkualitas. Tim sangat profesional dan tepat waktu. Harga juga sangat bersaing dibanding kompetitor.",
      rating: 5,
    },
    {
      id: 3,
      name: "Bpk. Ahmad Fauzi",
      role: "Pemilik Rumah",
      content:
        "Proses renovasi berjalan lancar, komunikasi dengan tim sangat baik. Hasil akhirnya melebihi ekspektasi kami. Terima kasih banyak!",
      rating: 5,
    },
    {
      id: 4,
      name: "Ibu Retno Handayani",
      role: "Pemilik Rumah",
      content:
        "Desain mushola rumah kami sangat indah. Detailnya luar biasa, dari pemilihan material hingga pencahayaan semuanya sempurna.",
      rating: 5,
    },
  ],

  process: [
    {
      step: 1,
      title: "Konsultasi",
      description:
        "Diskusi awal untuk memahami kebutuhan, preferensi desain, dan budget proyek Anda.",
    },
    {
      step: 2,
      title: "Survey & Pengukuran",
      description:
        "Tim kami melakukan survey lokasi dan pengukuran detail untuk perencanaan yang akurat.",
    },
    {
      step: 3,
      title: "Desain & Konsep",
      description:
        "Pembuatan desain 2D/3D dan konsep yang sesuai keinginan hingga Anda puas.",
    },
    {
      step: 4,
      title: "RAB & Kontrak",
      description:
        "Penyusunan Rencana Anggaran Biaya transparan dan penandatanganan kontrak kerja.",
    },
    {
      step: 5,
      title: "Pengerjaan",
      description:
        "Proses pembangunan/renovasi oleh tenaga ahli dengan pengawasan ketat.",
    },
    {
      step: 6,
      title: "Serah Terima",
      description:
        "Pengecekan final bersama dan serah terima proyek yang sudah selesai.",
    },
  ],
};
