# -*- coding: utf-8 -*-
import json

content_js = r'''export const content = {
  id: {
    nav: {
      brand: "Arrozy Adi Falaqi, S.Kom.",
      brandSub: "Technical Writer & Documentation Specialist",
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      methodology: "Metodologi",
      contact: "Kontak",
      downloadCv: "Download CV",
      cvUrl: "/cv/CV_Arrozy_Adi_Falaqi_Technical_Writer_ID.pdf",
    },
    hero: {
      badge: "DOKUMENTASI TEKNIS • USER MANUAL • LAPORAN SIKLUS PROYEK • SOP",
      name: "Arrozy Adi Falaqi, S.Kom.",
      role: "Technical Writer & Systems Documentation Specialist",
      summary:
        "Menyusun dokumentasi teknis sistem berskala nasional: Laporan Pendahuluan, Laporan Antara, Laporan Akhir, Buku Panduan Pengguna (User Manual), Kamus Data, dan SRS untuk kementerian dan perguruan tinggi terkemuka.",
      location: "Bandung, Indonesia",
      experience: "4+ Tahun Pengalaman",
      industry: "Kementerian, Lembaga Publik, & IT Enterprise",
      ctaPrimary: "Unduh Resume (.pdf)",
      ctaSecondary: "Lihat Katalog Dokumen",
    },
    metrics: [
      {
        value: "10+",
        label: "Klien & Instansi",
        desc: "Kementerian, Lembaga Negara, & PTN",
      },
      {
        value: "240+",
        label: "Dokumen Teknis",
        desc: "User Manual, Laporan Proyek, Kamus Data",
      },
      {
        value: "40%",
        label: "Peningkatan Efisiensi",
        desc: "Waktu Onboarding & Pemahaman Sistem",
      },
      {
        value: "100%",
        label: "Komitmen Mutu",
        desc: "Sesuai Standar KAK & Audit BAST Institusi",
      },
    ],
    showcase: {
      eyebrow: "KATALOG DOKUMEN MST 2026",
      title: "Paket Proyek Dokumentasi Terstruktur",
      subtitle:
        "Setiap proyek disusun secara komprehensif dari Laporan Pendahuluan, Laporan Antara/Akhir, hingga User Manual operasional dan Kamus Data berstandar audit.",
      viewAll: "Lihat Semua Proyek →",
      categories: [
        { id: "all", label: "Semua Instansi (10 Proyek)" },
        { id: "ut", label: "Universitas Terbuka (UT)" },
        { id: "komdigi", label: "Kominfo / Komdigi & BBPPT" },
        { id: "pupr", label: "Kementerian PUPR" },
        { id: "baketrans", label: "Kemenhub (Baketrans)" },
      ],
    },
    lifecycle: {
      eyebrow: "PENDEKATAN KERJA",
      title: "Metodologi Siklus Hidup Dokumentasi Teknis (DDLC)",
      subtitle:
        "Setiap dokumentasi disusun secara sistematis dan terukur untuk memastikan hasil yang berkualitas.",
      steps: [
        {
          num: "01",
          title: "Analisis Kebutuhan",
          desc: "Memahami target pengguna, ruang lingkup sistem, dan tujuan dokumentasi melalui wawancara stakeholder.",
        },
        {
          num: "02",
          title: "Perancangan Struktur",
          desc: "Menyusun outline, alur informasi, dan standar penulisan (Information Architecture & Taxonomy).",
        },
        {
          num: "03",
          title: "Penulisan Konten",
          desc: "Menulis konten yang jelas, ringkas, dan mudah dipahami lengkap dengan visual panduan praktis.",
        },
        {
          num: "04",
          title: "Review & Validasi",
          desc: "Melakukan peninjauan teknis dan uji coba bersama tim QA, developer, dan perwakilan pengguna.",
        },
        {
          num: "05",
          title: "Publikasi & Distribusi",
          desc: "Mendistribusikan dokumentasi dalam format yang sesuai (PDF terstandarisasi, Web Docs, Markdown).",
        },
        {
          num: "06",
          title: "Pemeliharaan & Pembaruan",
          desc: "Update konten secara berkala sesuai perkembangan rilis sistem dan masukan pengguna.",
        },
      ],
    },
    experience: {
      eyebrow: "PENGALAMAN KERJA",
      title: "Pengalaman Profesional",
      subtitle:
        "Beberapa peran dan kontribusi saya dalam bidang dokumentasi teknis dan sistem digital.",
      viewAll: "Lihat Semua Pengalaman →",
      items: [
        {
          role: "Technical Writer & Systems Analyst",
          company: "PT Mitra Sinerji Teknoindo (MST)",
          location: "Bandung, Indonesia",
          period: "2023 – Sekarang",
          icon: "building",
          summary: "Konsultan IT Enterprise untuk Pemerintahan & Pendidikan Tinggi",
          points: [
            "Menyusun paket dokumen lengkap (Laporan Pendahuluan, Akhir, User Manual, & Kamus Data) untuk UT, Komdigi, Kemenhub, dan PUPR.",
            "Menyusun buku panduan resmi (User Manual) sistem akademik Kaprodi 3.0 setebal 240+ halaman berstandar nasional.",
            "Menyusun spesifikasi SRS, ERD, dan kamus data database mikroservis berskala nasional.",
          ],
        },
        {
          role: "Technical Documentation Lead",
          company: "CV Mitra Yudha Xaviera",
          location: "Bandung, Indonesia",
          period: "2021 – 2023",
          icon: "building",
          summary: "Penyedia Solusi Teknologi Informasi & Tata Kelola Digital",
          points: [
            "Menyusun 80+ dokumen SOP operasional infrastruktur digital dan modul pelatihan ASN.",
            "Merumuskan kerangka acuan kerja (KAK) dan berita acara serah terima teknis (BAST).",
            "Memfasilitasi pelatihan transfer knowledge bagi operator sistem pemerintahan.",
          ],
        },
        {
          role: "Digital Systems Documentation Specialist",
          company: "Universitas Pendidikan Indonesia (UPI)",
          location: "Bandung, Indonesia",
          period: "2019 – 2021",
          icon: "graduation",
          summary: "Pusat Riset Teknologi Pendidikan & Dokumentasi Akademik",
          points: [
            "Mendokumentasikan modul e-learning dan sistem manajemen perkuliahan terpadu.",
            "Menyusun pedoman teknis penggunaan sistem bagi dosen, mahasiswa, dan staf fakultas.",
            "Meningkatkan kecepatan onboarding pengguna baru sistem kampus hingga 50%.",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "KOMPETENSI & KEAHLIAN",
      title: "Keahlian & Tools Dokumentasi",
      subtitle:
        "Kombinasi kemampuan analisis sistem, penulisan teknis profesional, dan penguasaan tools dokumentasi modern.",
      categories: [
        {
          title: "Penulisan Teknis",
          icon: "file-text",
          items: [
            "Laporan Pendahuluan, Antara & Akhir",
            "User Manual & Buku Panduan Sistem",
            "SOP (Standard Operating Procedure)",
            "SRS (Software Requirements Spec)",
            "Kamus Data & Database ERD",
            "Skenario UAT (User Acceptance Test)",
          ],
        },
        {
          title: "Tools & Format",
          icon: "terminal",
          items: [
            "Microsoft Word (Format Buku & Tata Letak)",
            "Draw.io & Visio (BPMN & Flowchart)",
            "Navicat (DB Architecture & ERD)",
            "Markdown, MDX & Notion",
            "Figma (Screen Annotation Callouts)",
            "Git & Version Control",
          ],
        },
        {
          title: "Pemahaman Sistem",
          icon: "code",
          items: [
            "Relational Database (MySQL, PostgreSQL)",
            "REST API & OpenAPI / Swagger",
            "Arsitektur Microservices & SSO",
            "Metodologi SDLC & DDLC",
          ],
        },
        {
          title: "Soft Skills",
          icon: "users",
          items: [
            "Wawancara Analisis Kebutuhan",
            "Komunikasi Lintas Stakeholder (Kementerian)",
            "Penyusunan KAK & BAST Resmi",
            "Manajemen Waktu & Ketepatan Rilis",
          ],
        },
      ],
    },
    cta: {
      badge: "TERBUKA UNTUK KOLABORASI",
      title: "Siap Berkolaborasi untuk Dokumentasi Sistem Anda?",
      desc:
        "Saya siap membantu menyusun paket dokumentasi teknis lengkap berstandar audit (Laporan Pendahuluan, Laporan Akhir, User Manual, SOP, hingga Kamus Data) untuk instansi atau perusahaan Anda.",
      whatsappBtn: "Hubungi Saya via WhatsApp",
      linkedinBtn: "Lihat Profil LinkedIn",
      quote: "“Dokumentasi yang baik adalah jembatan antara sistem yang rumit dan penggunanya.”",
      whatsappUrl: "https://wa.me/6281298023537",
      linkedinUrl: "https://www.linkedin.com/in/arrozy-adi-falaqi-6a25ba14a",
    },
    footer: {
      rights: "© 2026 Arrozy Adi Falaqi, S.Kom. All rights reserved.",
      tagline: "Dibuat khusus untuk portofolio resmi Technical Writer PT Mitra Sinerji Teknoindo (MST).",
    },
  },
  en: {
    nav: {
      brand: "Arrozy Adi Falaqi, S.Kom.",
      brandSub: "Technical Writer & Documentation Specialist",
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      methodology: "Methodology",
      contact: "Contact",
      downloadCv: "Download CV",
      cvUrl: "/cv/CV_Arrozy_Adi_Falaqi_Technical_Writer_EN.pdf",
    },
    hero: {
      badge: "TECHNICAL WRITING • USER MANUALS • PROJECT CYCLE REPORTS • SOP",
      name: "Arrozy Adi Falaqi, S.Kom.",
      role: "Technical Writer & Systems Documentation Specialist",
      summary:
        "Crafting institutional-grade technical documentation: Inception Reports, Final Reports, User Manuals, Data Dictionaries, and Software Requirements Specifications (SRS) for government ministries and premier universities.",
      location: "Bandung, Indonesia",
      experience: "4+ Years Experience",
      industry: "Government Ministries & IT Enterprise",
      ctaPrimary: "Download Resume (.pdf)",
      ctaSecondary: "Browse Documentation Catalog",
    },
    metrics: [
      {
        value: "10+",
        label: "Clients & Institutions",
        desc: "Ministries, State Agencies, Universities",
      },
      {
        value: "240+",
        label: "Technical Documents",
        desc: "User Manuals, Reports, Data Dictionaries",
      },
      {
        value: "40%",
        label: "Efficiency Increase",
        desc: "Faster Onboarding & System Clarity",
      },
      {
        value: "100%",
        label: "Quality Commitment",
        desc: "Fully Compliant with Institutional BAST Audits",
      },
    ],
    showcase: {
      eyebrow: "MST 2026 DOCUMENTATION CATALOG",
      title: "Structured Project Documentation Packages",
      subtitle:
        "Each project is authored comprehensively covering Inception Reports, Final Reports, operational User Manuals, and Data Dictionaries ready for institutional audits.",
      viewAll: "View All Projects →",
      categories: [
        { id: "all", label: "All Institutions (10 Projects)" },
        { id: "ut", label: "Universitas Terbuka (UT)" },
        { id: "komdigi", label: "Kominfo / Komdigi & BBPPT" },
        { id: "pupr", label: "Ministry of Public Works (PUPR)" },
        { id: "baketrans", label: "Ministry of Transportation (Baketrans)" },
      ],
    },
    lifecycle: {
      eyebrow: "OUR APPROACH",
      title: "Documentation Development Life Cycle (DDLC)",
      subtitle:
        "Every document is authored systematically to guarantee high clarity and institutional precision.",
      steps: [
        {
          num: "01",
          title: "Needs Analysis",
          desc: "Understanding target users and system scope through stakeholder interviews.",
        },
        {
          num: "02",
          title: "Information Architecture",
          desc: "Designing outlines, taxonomy, and consistent typography standards.",
        },
        {
          num: "03",
          title: "Content Authoring",
          desc: "Writing clear, jargon-free instructions enriched with step-by-step visual callouts.",
        },
        {
          num: "04",
          title: "Review & Validation",
          desc: "Conducting technical walkthroughs with QA, software developers, and user reps.",
        },
        {
          num: "05",
          title: "Publication & Delivery",
          desc: "Distributing documents in standardized formats (Executive PDF, Web Docs, Markdown).",
        },
        {
          num: "06",
          title: "Lifecycle Maintenance",
          desc: "Iterating content following system version releases and user feedback.",
        },
      ],
    },
    experience: {
      eyebrow: "WORK EXPERIENCE",
      title: "Professional Experience",
      subtitle:
        "Key roles and contributions in enterprise technical writing and system documentation.",
      viewAll: "View All Roles →",
      items: [
        {
          role: "Technical Writer & Systems Analyst",
          company: "PT Mitra Sinerji Teknoindo (MST)",
          location: "Bandung, Indonesia",
          period: "2023 – Present",
          icon: "building",
          summary: "Enterprise IT Consulting for Ministries & Higher Education",
          points: [
            "Authored full document bundles (Inception, Final, User Manual, & Data Dictionary) for UT, Komdigi, Kemenhub, and PUPR.",
            "Crafted official 240+ page User Manual for the Kaprodi 3.0 academic curriculum system.",
            "Authored SRS specifications, ERD schema, and multi-service data dictionaries.",
          ],
        },
        {
          role: "Technical Documentation Lead",
          company: "CV Mitra Yudha Xaviera",
          location: "Bandung, Indonesia",
          period: "2021 – 2023",
          icon: "building",
          summary: "Government Digital Governance & System Documentation",
          points: [
            "Drafted 80+ digital operational SOPs and public sector training modules.",
            "Formulated Terms of Reference (KAK) and technical acceptance handover reports (BAST).",
            "Delivered knowledge transfer workshops for public agency system operators.",
          ],
        },
        {
          role: "Digital Systems Documentation Specialist",
          company: "Universitas Pendidikan Indonesia (UPI)",
          location: "Bandung, Indonesia",
          period: "2019 – 2021",
          icon: "graduation",
          summary: "Educational Technology & Academic Systems Documentation",
          points: [
            "Documented integrated academic management and e-learning platforms.",
            "Authored user guides for faculty, students, and university administrators.",
            "Reduced new system onboarding friction by over 50%.",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "COMPETENCIES",
      title: "Technical Writing & Tools Matrix",
      subtitle:
        "Proven blend of system analysis, formal technical authoring, and modern documentation toolsets.",
      categories: [
        {
          title: "Technical Authoring",
          icon: "file-text",
          items: [
            "Inception, Interim & Final Reports",
            "User Manuals & System Handbooks",
            "Standard Operating Procedures (SOP)",
            "SRS (Software Requirements Spec)",
            "Data Dictionary & Relational ERD",
            "UAT Test Case Scenarios",
          ],
        },
        {
          title: "Tools & Layout",
          icon: "terminal",
          items: [
            "Microsoft Word (Executive Book Layout)",
            "Draw.io & Visio (BPMN & Flowcharts)",
            "Navicat (DB Architecture & ERD)",
            "Markdown, MDX & Notion",
            "Figma (Screen Annotation Callouts)",
            "Git & Version Control",
          ],
        },
        {
          title: "Engineering Literacy",
          icon: "code",
          items: [
            "Relational Database (MySQL, PostgreSQL)",
            "REST APIs & OpenAPI / Swagger",
            "Microservices Architecture & SSO",
            "SDLC & DDLC Methodologies",
          ],
        },
        {
          title: "Communication & Governance",
          icon: "users",
          items: [
            "Requirements Gathering Interviews",
            "Inter-Ministry Stakeholder Management",
            "Formal KAK & BAST Handover Reports",
            "Deadlines & Delivery Governance",
          ],
        },
      ],
    },
    cta: {
      badge: "AVAILABLE FOR COLLABORATION",
      title: "Ready to Elevate Your Systems Documentation?",
      desc:
        "I am ready to help author complete, audit-ready documentation packages (Inception Reports, Final Reports, User Manuals, SOPs, and Data Dictionaries) for your organization.",
      whatsappBtn: "Contact via WhatsApp",
      linkedinBtn: "View LinkedIn Profile",
      quote: "“Clear documentation is the bridge between complex systems and their users.”",
      whatsappUrl: "https://wa.me/6281298023537",
      linkedinUrl: "https://www.linkedin.com/in/arrozy-adi-falaqi-6a25ba14a",
    },
    footer: {
      rights: "© 2026 Arrozy Adi Falaqi, S.Kom. All rights reserved.",
      tagline: "Tailored portfolio for Technical Writer deliverables at PT Mitra Sinerji Teknoindo (MST).",
    },
  },
};

export const featuredProjects = [
  // 1. UT - Kurikulum S2 & Kaprodi 3.0
  {
    id: "kurikulum-kaprodi-ut",
    category: "ut",
    badge: "PAKET DOKUMEN KURIKULUM",
    title: {
      id: "Pengembangan Kurikulum S2 & Panduan Kaprodi 3.0",
      en: "Postgraduate Curriculum & Kaprodi 3.0 System Manual",
    },
    description: {
      id: "Paket dokumentasi lengkap siklus pengembangan kurikulum S2 berbasis Capaian Pembelajaran Lulusan (CPL) dan buku panduan operasional Ketua Program Studi setebal 240+ halaman.",
      en: "Complete documentation lifecycle package for postgraduate curriculum development and a 240+ page operational manual for department heads.",
    },
    client: "Universitas Terbuka (UT)",
    documentBundle: [
      "1. Laporan Pendahuluan Pengembangan Kurikulum S2",
      "2. Laporan Akhir Pengembangan Kurikulum S2",
      "3. Panduan Penggunaan Kurikulum - Kaprodi 3.0 (240+ Hlm)",
    ],
    tags: ["Universitas Terbuka", "Laporan Awal & Akhir", "User Manual 240+ Hlm", "Kurikulum S2"],
    bannerGradient: "from-blue-600 to-indigo-700",
    bannerIcon: "graduation",
    coverImage: "/images/projects/ut-workspace.png",
    pages: "3 Dokumen • 320+ Hlm",
    documentMeta: {
      docCode: "UT/MST-2026/KUR-S2/KAPRODI-3.0",
      version: "v3.0.0 (Approved Final)",
      classification: "Dokumen Akademik Resmi Universitas Terbuka",
      effectiveDate: "Tahun Akademik 2026",
    },
    caseStudy: {
      problem: "Penyusunan kurikulum program magister (S2) melibatkan puluhan pemetaan CPL dan ekuivalensi mata kuliah yang rumit tanpa panduan terstandarisasi, membuat tim dosen dan kaprodi mengalami hambatan input sistem.",
      solution: "Menyusun rangkaian dokumen terstruktur: Laporan Pendahuluan analisis kebutuhan, Laporan Akhir validasi kurikulum, serta Buku Panduan Penggunaan Kaprodi 3.0 dengan screenshot beranotasi bertahap.",
      impact: "Mempercepat proses input dan verifikasi kurikulum prodi hingga 2x lebih cepat dan menjadi rujukan resmi akreditasi kurikulum pascasarjana.",
    },
    tableOfContents: [
      { chapter: "Bab 1: Pendahuluan & Landasan Kebijakan Kurikulum S2", pages: "Hlm 1 - 24" },
      { chapter: "Bab 2: Manajemen Peran, Akses SSO & Matriks Otorisasi", pages: "Hlm 25 - 48" },
      { chapter: "Bab 3: Prosedur Pemetaan CPL ke Butir Bahan Kajian", pages: "Hlm 49 - 112" },
      { chapter: "Bab 4: Matriks Ekuivalensi & Konversi Beban SKS Mata Kuliah", pages: "Hlm 113 - 180" },
      { chapter: "Bab 5: Alur Persetujuan Senat Fakultas & Tim Penjamin Mutu", pages: "Hlm 181 - 215" },
      { chapter: "Bab 6: Troubleshooting & Penanganan Galat Sistem", pages: "Hlm 216 - 242" },
    ],
    samplePage: {
      chapterNum: "BAB 3 — PEMETAAN CAPAIAN PEMBELAJARAN (CPL)",
      sectionCode: "3.2",
      sectionTitle: "Tata Cara Pemetaan CPL Prodi ke Matriks Bahan Kajian Kurikulum",
      pageNumber: "Halaman 58 dari 242",
      intro: "Bagian ini memandu Ketua Program Studi (Kaprodi) dalam memetakan rumusan CPL ke dalam kelompok mata kuliah menggunakan modul terpadu Kaprodi 3.0.",
      prerequisites: [
        "Akun SSO universitas aktif dengan hak akses 'KAPRODI_S2'.",
        "Dokumen draf SK Kurikulum Pascasarjana berstatus 'OPEN_REVISION'.",
      ],
      steps: [
        {
          step: 1,
          action: "Buka Modul Kurikulum S2",
          detail: "Pada bilah navigasi samping, klik menu 'Kurikulum Pascasarjana' lalu pilih submenu 'Matriks Pemetaan CPL'.",
        },
        {
          step: 2,
          action: "Tambah Butir Capaian",
          detail: "Klik tombol biru '+ Tambah Butir CPL'. Masukkan kode unik (misal: CPL-MAG-01) dan pilih Taksonomi Bloom yang relevan.",
        },
        {
          step: 3,
          action: "Verifikasi Beban SKS",
          detail: "Pastikan total kumulatif bobot CPL terdistribusi sempurna ke mata kuliah wajib dan pilihan sebelum mengirim ke Senat.",
        },
      ],
      callout: {
        type: "warning",
        title: "PERHATIAN VALIDASI MUTU",
        content: "Setelah draf dikirim ke Tim Asesor Penjaminan Mutu, parameter kurikulum akan beralih ke status Read-Only hingga evaluasi selesai.",
      },
      troubleshooting: [
        { issue: "Tombol '+ Tambah Butir CPL' tidak dapat diklik.", cause: "Status draf masih berstatus 'IN_REVIEW' oleh Gugus Penjaminan Mutu.", action: "Hubungi admin penjaminan mutu untuk membuka kembali akses revisi draf." },
      ],
    },
    detail: {
      scope: "Dekan, Ketua Program Studi S2, Dosen Pengembang Kurikulum, & Tim Penjaminan Mutu",
      highlights: [
        "Paket lengkap 3 dokumen: Laporan Pendahuluan, Laporan Akhir, dan Buku Panduan Kaprodi 3.0.",
        "Buku panduan setebal 240+ halaman dengan taksonomi rapi dan tangkapan layar beranotasi.",
        "Menjadi standar acuan operasional resmi sivitas akademika Universitas Terbuka.",
      ],
    },
  },

  // 2. UT - Web Dashboard SDGs
  {
    id: "dashboard-sdgs-ut",
    category: "ut",
    badge: "DASHBOARD MONITORING SDGS",
    title: {
      id: "Web Dashboard SDGs (Sustainable Development Goals)",
      en: "UT SDGs Web Dashboard & Governance Platform",
    },
    description: {
      id: "Dokumentasi perancangan dan buku panduan Web Dashboard SDGs untuk pemantauan indikator capaian pembangunan berkelanjutan dan pemeringkatan THE Impact Rankings.",
      en: "System documentation and user handbook for the SDGs Dashboard tracking institutional sustainability and THE Impact Rankings.",
    },
    client: "Universitas Terbuka (UT)",
    documentBundle: [
      "1. Laporan Pendahuluan Web Dashboard SDGs",
      "2. Laporan Akhir Web Dashboard SDGs",
      "3. Panduan Penggunaan Web Dashboard SDGs (.pdf)",
    ],
    tags: ["Universitas Terbuka", "SDGs", "Laporan Awal & Akhir", "User Manual (.pdf)"],
    bannerGradient: "from-emerald-600 to-teal-800",
    bannerIcon: "graduation",
    coverImage: "/images/projects/ut-sdgs.png",
    pdfUrl: "/docs/Modul-Dashboard-SDGs-UT.pdf",
    pages: "3 Dokumen • 160+ Hlm",
    documentMeta: {
      docCode: "UT/MST-2026/SDGS-DASHBOARD/V2",
      version: "v2.1.0 (Produksi)",
      classification: "Laporan & Panduan Resmi SDGs UT",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Pengumpulan data bukti dukung 17 tujuan SDGs dari puluhan unit kerja universitas tersebar tanpa format baku, menyebabkan keterlambatan pelaporan pemeringkatan dunia.",
      solution: "Menyusun Laporan Pendahuluan arsitektur sistem, Laporan Akhir implementasi modul input data, dan Buku Panduan Penggunaan interaktif bagi PIC SDGs unit kerja.",
      impact: "Mempersingkat waktu pengumpulan data bukti SDGs sebesar 60% dan menjamin kepatuhan format data internasional.",
    },
    tableOfContents: [
      { chapter: "Bab 1: Pendahuluan & Kerangka 17 Sasaran SDGs UT", pages: "Hlm 1 - 20" },
      { chapter: "Bab 2: Arsitektur Modul Input & Repositori Bukti Dukung", pages: "Hlm 21 - 45" },
      { chapter: "Bab 3: Prosedur Pengunggahan Eviden & Verifikasi Asesor", pages: "Hlm 46 - 88" },
      { chapter: "Bab 4: Tata Kelola Skor Agregat & Ekspor Laporan THE Impact", pages: "Hlm 89 - 130" },
      { chapter: "Bab 5: Panduan Pemecahan Masalah & FAQ Pengguna", pages: "Hlm 131 - 162" },
    ],
    samplePage: {
      chapterNum: "BAB 3 — PENGUNGGAHAN BUKTI DUKUNG SDGS",
      sectionCode: "3.1",
      sectionTitle: "Prosedur Input Indikator & Lampiran Eviden Sasaran SDGs",
      pageNumber: "Halaman 48 dari 162",
      intro: "Panduan teknis bagi PIC Unit Kerja dalam mengunggah berkas bukti capaian tridharma perguruan tinggi yang mendukung sasaran SDGs 1 s.d. 17.",
      prerequisites: [
        "Akun PIC Unit Kerja terdaftar di portal SDGs.",
        "Berkas eviden dalam format PDF atau URL publik yang valid.",
      ],
      steps: [
        {
          step: 1,
          action: "Pilih Sasaran SDGs",
          detail: "Klik kartu sasaran SDGs yang sesuai (misal: SDG 4 - Quality Education). Layar akan menampilkan daftar indikator kinerja utama.",
        },
        {
          step: 2,
          action: "Unggah Dokumen Bukti",
          detail: "Pilih tombol 'Unggah Eviden', masukkan judul kegiatan, tahun pelaksanaan, dan lampirkan tautan laporan resmi kegiatan.",
        },
        {
          step: 3,
          action: "Kirim untuk Verifikasi",
          detail: "Klik 'Submit Verifikasi'. Notifikasi otomatis akan dikirim ke Gugus Tugas SDGs Universitas untuk peninjauan bobot nilai.",
        },
      ],
      callout: {
        type: "tip",
        title: "TIPS PENAMAAN BERKAS",
        content: "Gunakan konvensi format nama file: [KODE_SDG]_[UNIT]_[TAHUN].pdf untuk memudahkan indeksasi dokumen oleh tim penilai internasional.",
      },
      troubleshooting: [
        { issue: "Gagal mengunggah berkas eviden (>25MB).", cause: "Ukuran file melebihi batas gateway unggahan portal.", action: "Kompres file PDF terlebih dahulu atau lampirkan tautan Google Drive / OneDrive resmi unit kerja." },
      ],
    },
    detail: {
      scope: "Pusat SDGs Universitas, Lembaga Penelitian & Pengabdian Masyarakat, serta PIC Fakultas",
      highlights: [
        "Dilengkapi file PDF cuplikan panduan resmi yang dapat diunduh langsung.",
        "Menstandarisasi bukti pelaporan 17 tujuan SDGs untuk pemeringkatan global.",
        "Paket lengkap Laporan Pendahuluan, Laporan Akhir, dan Buku Panduan Pengguna.",
      ],
    },
  },

  // 3. UT - MyUT Alumni & BIMON UT
  {
    id: "myut-alumni-bimon",
    category: "ut",
    badge: "PORTAL ALUMNI & BIMBINGAN",
    title: {
      id: "Aplikasi MyUT Alumni & BIMON UT 2026",
      en: "MyUT Alumni Portal & BIMON Online Guidance 2026",
    },
    description: {
      id: "Penyusunan User Manual resmi aplikasi MyUT Alumni (60+ halaman) dan panduan penggunaan sistem bimbingan online (BIMON UT 2026) untuk mendukung layanan kemahasiswaan dan jejaring alumni.",
      en: "Official User Manual for MyUT Alumni (60+ pages) and online academic guidance platform (BIMON UT 2026).",
    },
    client: "Universitas Terbuka (UT)",
    documentBundle: [
      "1. Kerangka Acuan Kerja (KAK) MyUT",
      "2. User Manual Resmi Aplikasi MyUT Alumni UT 2026 (.pdf)",
      "3. Panduan Penggunaan Aplikasi BIMON UT 2026",
    ],
    tags: ["Universitas Terbuka", "MyUT", "BIMON", "User Manual (.pdf 5.5MB)"],
    bannerGradient: "from-sky-600 to-blue-800",
    bannerIcon: "graduation",
    coverImage: "/images/projects/my-ut.png",
    pdfUrl: "/docs/User-Manual-MyUT-Alumni-2026.pdf",
    pages: "3 Dokumen • 110+ Hlm",
    documentMeta: {
      docCode: "UT/MST-2026/MYUT-ALUMNI/V1.0",
      version: "v1.0.0 (Rilis Resmi)",
      classification: "Buku Panduan Layanan Mahasiswa & Alumni UT",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Ratusan ribu alumni Universitas Terbuka tersebar di dalam dan luar negeri membutuhkan akses legalisir digital dan tracer study terpusat, namun belum memiliki panduan registrasi akun terpadu.",
      solution: "Menyusun buku User Manual komprehensif MyUT Alumni 2026 dilengkapi alur aktivasi akun alumni, pemesanan legalisir ijazah online, serta panduan bimbingan tugas akhir online BIMON UT.",
      impact: "Mendukung kelancaran rilis aplikasi MyUT Alumni nasional dengan tingkat kepuasan panduan pengguna di atas 90%.",
    },
    tableOfContents: [
      { chapter: "Bab 1: Registrasi Akun & Verifikasi Identitas Alumni", pages: "Hlm 1 - 15" },
      { chapter: "Bab 2: Modul Pemutakhiran Profil & Riwayat Studi", pages: "Hlm 16 - 30" },
      { chapter: "Bab 3: Layanan Legalisir Ijazah & Transkrip Digital", pages: "Hlm 31 - 48" },
      { chapter: "Bab 4: Pengisian Kuesioner Tracer Study Nasional", pages: "Hlm 49 - 62" },
      { chapter: "Bab 5: Panduan Bimbingan Online Tugas Akhir (BIMON UT)", pages: "Hlm 63 - 105" },
    ],
    samplePage: {
      chapterNum: "BAB 3 — LAYANAN LEGALISIR DIGITAL",
      sectionCode: "3.2",
      sectionTitle: "Prosedur Pengajuan Legalisir Ijazah dan Transkrip Nilai Elektronik",
      pageNumber: "Halaman 34 dari 62",
      intro: "Langkah-langkah mengajukan permohonan legalisir ijazah dengan tanda tangan digital tersertifikasi BSrE melalui aplikasi MyUT Alumni.",
      prerequisites: [
        "Akun MyUT Alumni berstatus 'TERVERIFIKASI_IJAZAH'.",
        "Foto scan ijazah asli berformat JPG/PDF berkualitas tinggi.",
      ],
      steps: [
        {
          step: 1,
          action: "Masuk Menu Legalisir",
          detail: "Buka dashboard MyUT Alumni, pilih menu 'Layanan Akademik' > 'Legalisir Dokumen'.",
        },
        {
          step: 2,
          action: "Pilih Jenis Dokumen & Jumlah Salinan",
          detail: "Centang jenis dokumen yang dibutuhkan (Ijazah / Transkrip). Pilih metode pengiriman (Pengunduhan Digital PDF atau Pengiriman Fisik via Pos).",
        },
        {
          step: 3,
          action: "Konfirmasi & Kode Pembayaran",
          detail: "Klik 'Ajukan Permohonan'. Sistem akan menerbitkan kode billing pembayaran SIMPONI/Virtual Account secara instan.",
        },
      ],
      callout: {
        type: "info",
        title: "KEABSAHAN TANDA TANGAN DIGITAL",
        content: "Dokumen legalisir digital yang diunduh memuat barcode sertifikasi elektronik resmi yang dapat divalidasi keabsahannya di portal verifikasi UT.",
      },
      troubleshooting: [
        { issue: "NIM tidak ditemukan saat registrasi alumni.", cause: "Tahun kelulusan sebelum era digitalisasi database terpadu.", action: "Gunakan menu 'Bantuan Verifikasi Data Lama' dengan mengunggah foto ijazah fisik untuk pencocokan arsip manual." },
      ],
    },
    detail: {
      scope: "Alumni Universitas Terbuka, Mahasiswa Tingkat Akhir, Dosen Pembimbing BIMON, & Biro Kemahasiswaan",
      highlights: [
        "Tersedia berkas User Manual asli berformat PDF resmi 5.5MB di portofolio.",
        "Panduan visual penuh langkah demi langkah dengan ilustrasi mobile & desktop.",
        "Mencakup panduan sistem bimbingan online BIMON UT 2026.",
      ],
    },
  },

  // 4. Komdigi - CAT Komdigi
  {
    id: "cat-komdigi",
    category: "komdigi",
    badge: "SISTEM COMPUTER ASSISTED TEST",
    title: {
      id: "Aplikasi CAT (Computer Assisted Test) Komdigi",
      en: "CAT Examination Platform (Komdigi)",
    },
    description: {
      id: "Paket dokumen pelaporan progres berkala dan buku panduan penggunaan aplikasi CAT terpisah untuk peserta ujian dan administrator/pengawas Kementerian Komunikasi dan Digital.",
      en: "Progress reporting package and dual user manuals for candidates and proctor administrators on the Komdigi CAT exam system.",
    },
    client: "Kementerian Komunikasi dan Digital (Komdigi)",
    documentBundle: [
      "1. Laporan Progress Bulanan Pengembangan Sistem CAT",
      "2. User Manual Aplikasi CAT (Peserta Ujian)",
      "3. User Manual Aplikasi CAT Admin & Pengawas",
    ],
    tags: ["Komdigi", "CAT Exam", "Laporan Progres", "User Manual Peserta & Admin"],
    bannerGradient: "from-purple-700 to-indigo-900",
    bannerIcon: "building",
    coverImage: "/images/projects/simponi-dashboard.png",
    pages: "3 Dokumen • 95+ Hlm",
    documentMeta: {
      docCode: "KOMDIGI/MST-2026/CAT-SYS/V1.2",
      version: "v1.2 (Rilis Ujian 2026)",
      classification: "Dokumen Pelaksanaan Ujian Resmi Kementerian",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Penyelenggaraan ujian kompetensi sertifikasi membutuhkan tata tertib dan panduan teknis yang sangat ketat untuk meminimalisir kendala teknis peserta dan memastikan integritas data pengawas.",
      solution: "Menyusun Laporan Progres berkala pengembangan modul ujian, serta merancang dua buku panduan terpisah: User Manual Peserta (berorientasi UX ramah pemula) dan User Manual Admin (tata kelola token, bank soal, dan monitoring kecurangan).",
      impact: "Menghasilkan zero downtime keluhan instruksi selama pelaksanaan ujian sertifikasi nasional dan mempercepat rekapitulasi nilai ujian.",
    },
    tableOfContents: [
      { chapter: "Bagian 1: Laporan Progres & Arsitektur Sistem Ujian CAT", pages: "Hlm 1 - 25" },
      { chapter: "Bagian 2: Panduan Peserta — Login, Token & Simulasi Tes", pages: "Hlm 26 - 52" },
      { chapter: "Bagian 3: Panduan Peserta — Pengerjaan Soal & Submit Jawaban", pages: "Hlm 53 - 70" },
      { chapter: "Bagian 4: Panduan Admin — Manajemen Bank Soal & Pengacakan", pages: "Hlm 71 - 85" },
      { chapter: "Bagian 5: Panduan Admin — Monitoring Live Peserta & Freeze Sesi", pages: "Hlm 86 - 98" },
    ],
    samplePage: {
      chapterNum: "BAGIAN 2 — PANDUAN PESERTA UJIAN CAT",
      sectionCode: "2.2",
      sectionTitle: "Tata Cara Memulai Ujian Menggunakan Token Sesi & Verifikasi Kamera",
      pageNumber: "Halaman 32 dari 98",
      intro: "Petunjuk bagi peserta dalam melakukan otentikasi identitas, memasukkan token ujian dari pengawas, dan memulai hitung mundur pengerjaan soal.",
      prerequisites: [
        "Browser modern dengan izin akses webcam aktif.",
        "Nomor Peserta Ujian dan Token Sesi yang dibacakan oleh Pengawas.",
      ],
      steps: [
        {
          step: 1,
          action: "Verifikasi Wajah Peserta",
          detail: "Posisikan wajah tepat di dalam lingkaran pratinjau kamera hingga sistem mendeteksi kecocokan foto dan status berubah menjadi hijau 'TERVERIFIKASI'.",
        },
        {
          step: 2,
          action: "Input Token Ujian",
          detail: "Ketik 6 digit token sesi pada kolom yang disediakan. Perhatikan huruf besar dan kecil.",
        },
        {
          step: 3,
          action: "Mulai Pengerjaan",
          detail: "Klik tombol 'Mulai Ujian'. Layar akan otomatis beralih ke mode layar penuh (Full Screen Mode) dan timer pengerjaan mulai berjalan.",
        },
      ],
      callout: {
        type: "warning",
        title: "PERINGATAN SISTEM ANTI-CURANG",
        content: "Dilarang berpindah tab browser atau meminimalkan jendela. Pelanggaran lebih dari 3 kali akan membekukan sesi ujian secara permanen.",
      },
      troubleshooting: [
        { issue: "Kamera tidak terdeteksi oleh browser.", cause: "Izin akses kamera (Camera Permission) di-block oleh browser.", action: "Klik ikon gembok di sebelah kiri bilah alamat URL browser > Ubah Camera menjadi 'Allow' lalu muat ulang halaman." },
      ],
    },
    detail: {
      scope: "Peserta Seleksi Sertifikasi, Pengawas Ruang Ujian, Panitia Seleksi Komdigi, & Tim IT",
      highlights: [
        "Penyusunan User Manual dual-peran (Peserta Ujian & Administrator/Pengawas).",
        "Laporan Progres terstandarisasi untuk pemantauan deliverable mingguan.",
        "Standar protokol integritas ujian digital dengan panduan mitigasi kendala.",
      ],
    },
  },

  // 5. Komdigi - Non-SIMS & Spektrum AI BBPPT
  {
    id: "non-sims-bbppt",
    category: "komdigi",
    badge: "KAMUS DATA & ARSITEKTUR",
    title: {
      id: "Kamus Data & Arsitektur Non-SIMS BBPPT",
      en: "Non-SIMS Data Dictionary & AI Architecture",
    },
    description: {
      id: "Dokumentasi spesifikasi teknis kamus data formal, relasi foreign key, skema Entity Relationship Diagram (ERD), dan dokumen arsitektur pemanfaatan Chatbot AI Balai Besar Pengujian (BBPPT Komdigi).",
      en: "Technical data dictionary, ERD entity relations, and architecture whitepaper for BBPPT AI Chatbot testing systems.",
    },
    client: "Balai Besar Pengujian Perangkat Telekomunikasi (BBPPT Komdigi)",
    documentBundle: [
      "1. Kamus Data Relasional Sistem Non-SIMS (.pdf)",
      "2. Entity Relationship Diagram (ERD) Konseptual & Fisik",
      "3. Dokumen Penggunaan Teknologi Chatbot AI BBPPT (.pdf)",
    ],
    tags: ["BBPPT Komdigi", "Kamus Data (.pdf)", "ERD Diagram", "Spektrum AI"],
    bannerGradient: "from-teal-700 to-emerald-950",
    bannerIcon: "database",
    coverImage: "/images/projects/non-sims-erd.png",
    pdfUrl: "/docs/Kamus-Data-NonSIMS-BBPPT.pdf",
    pages: "3 Dokumen • 98+ Hlm",
    documentMeta: {
      docCode: "BBPPT/MST-2026/DATA-DICT/NON-SIMS",
      version: "v2.4 (Baseline Technical Spec)",
      classification: "Spesifikasi Teknis Rekayasa Perangkat Lunak BBPPT",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Pengembangan mikroservis pengujian perangkat telekomunikasi kerap terhambat akibat inkonsistensi tipe data, duplikasi kolom basis data, dan belum adanya acuan relasi foreign key yang baku antar developer backend.",
      solution: "Menyusun Kamus Data relasional mendalam berisi 35+ entitas tabel, diagram ERD konseptual-fisik, serta dokumen implementasi Chatbot Spektrum AI untuk otomasi tanya-jawab regulasi pengujian.",
      impact: "Menjadi acuan tunggal (Single Source of Truth) bagi seluruh tim developer dan auditor TI, mempercepat proses deployment sistem pengujian tanpa schema conflict.",
    },
    tableOfContents: [
      { chapter: "Bab 1: Konvensi Penamaan (Naming Convention) & Tipe Data Baku", pages: "Hlm 1 - 14" },
      { chapter: "Bab 2: Entity Relationship Diagram (ERD) Logikal & Fisikal", pages: "Hlm 15 - 32" },
      { chapter: "Bab 3: Kamus Data Entitas Pemohon & Registrasi Sertifikasi", pages: "Hlm 33 - 54" },
      { chapter: "Bab 4: Kamus Data Entitas Pengujian RF, EMC & Keselamatan", pages: "Hlm 55 - 76" },
      { chapter: "Bab 5: Arsitektur Integrasi Spektrum Chatbot AI & API Pipeline", pages: "Hlm 77 - 98" },
    ],
    samplePage: {
      chapterNum: "BAB 3 — SPESIFIKASI ENTITAS HASIL UJI",
      sectionCode: "3.3",
      sectionTitle: "Kamus Data Tabel: 'tbl_laporan_hasil_uji_telekomunikasi'",
      pageNumber: "Halaman 42 dari 98",
      intro: "Struktur kolom, tipe data, indeks, dan batasan integritas untuk menyimpan rekaman data pengujian parameter teknis perangkat telekomunikasi.",
      prerequisites: [
        "Akses skema PostgreSQL database 'db_bbppt_nonsims'.",
        "Hak otorisasi DBA atau Lead Software Engineer.",
      ],
      steps: [
        {
          step: 1,
          action: "id_hasil_uji (UUID, PK)",
          detail: "Primary Key unik format RFC 4122 v4. Ter-generate otomatis saat nomor agenda pengujian dimulai. Sifat: NOT NULL, UNIQUE.",
        },
        {
          step: 2,
          action: "no_sertifikat_referensi (VARCHAR(50))",
          detail: "Foreign Key mereferensikan 'tbl_permohonan(no_sertifikat)'. Constraint: ON DELETE RESTRICT, ON UPDATE CASCADE.",
        },
        {
          step: 3,
          action: "status_kelayakan (ENUM)",
          detail: "Domain nilai: ['LULUS_UJI', 'TIDAK_LULUS', 'PENGUJIAN_ULANG']. Default value: 'PENGUJIAN_ULANG'.",
        },
      ],
      callout: {
        type: "info",
        title: "STANDAR AUDIT DATA BBPPT",
        content: "Setiap record wajib menyertakan kolom audit trail: 'created_at', 'created_by', 'updated_at', dan flag 'is_deleted' untuk soft-delete auditing.",
      },
      troubleshooting: [
        { issue: "Foreign key violation constraint error (23503).", cause: "Nomor permohonan yang direferensikan belum tersimpan di tabel induk permohonan.", action: "Pastikan proses transaksi induk telah di-commit sebelum menuliskan data hasil pengujian." },
      ],
    },
    detail: {
      scope: "Software Engineers, Database Administrators, QA Leads, & Auditor Keamanan Sistem BBPPT",
      highlights: [
        "Dokumen Kamus Data asli (.pdf) tersedia dan dapat diinspeksi langsung.",
        "Dilengkapi diagram ERD relasional lengkap dengan pemetaan primary/foreign key.",
        "Menjadi fondasi teknis integrasi Spektrum Chatbot AI regulasi perangkat.",
      ],
    },
  },

  // 6. Komdigi - SIMPEL Kalibrasi & Pengujian
  {
    id: "simpel-kalibrasi-pengujian",
    category: "komdigi",
    badge: "SISTEM PELAYANAN PENGUJIAN",
    title: {
      id: "SIMPEL Kalibrasi & Pengujian NG TA 2026",
      en: "SIMPEL Calibration & Lab Testing NG 2026",
    },
    description: {
      id: "Paket dokumen tata kelola kontrak, KAK perawatan, laporan berkala bulanan, dan manual panduan operasional integrasi alur kalibrasi dan pengujian perangkat balai pengujian BBPPT Komdigi.",
      en: "Contract governance package, maintenance TOR, monthly progress reports, and operational user guides for national lab testing and calibration.",
    },
    client: "Balai Besar Pengujian Perangkat Telekomunikasi (BBPPT Komdigi)",
    documentBundle: [
      "1. KAK Perawatan SIMPEL Kalibrasi & Pengujian NG TA 2026",
      "2. Laporan Bulanan Pemeliharaan SIMPEL (Bulan 1 s.d. Berjalan)",
      "3. Dokumentasi Manual Guide & Alur Alur Integrasi Sistem",
    ],
    tags: ["BBPPT Komdigi", "SIMPEL NG", "KAK & Kontrak", "Laporan Bulanan"],
    bannerGradient: "from-cyan-700 to-blue-900",
    bannerIcon: "building",
    coverImage: "/images/projects/ut-panduan.png",
    pages: "3 Dokumen • 120+ Hlm",
    documentMeta: {
      docCode: "BBPPT/MST-2026/SIMPEL-NG/MAINT",
      version: "v2.0 (TA 2026)",
      classification: "Dokumen Pemeliharaan Resmi BBPPT",
      effectiveDate: "Tahun Anggaran 2026",
    },
    caseStudy: {
      problem: "Operasional pengujian dan kalibrasi perangkat telekomunikasi membutuhkan pemeliharaan berkelanjutan dengan tata kelola pelaporan bulanan yang ketat guna memenuhi standar akreditasi KAN ISO 17025.",
      solution: "Menyusun Kerangka Acuan Kerja (KAK) perawatan, menerbitkan Laporan Bulanan kemajuan sistem secara berkala, dan menyusun panduan manual guide bagi teknisi laboratorium pengujian.",
      impact: "Menjamin transparansi audit berkala BAPP, meminimalisir keterlambatan sertifikasi alat, dan memastikan kesesuaian SOP laboratorium pengujian nasional.",
    },
    tableOfContents: [
      { chapter: "Bagian 1: Kerangka Acuan Kerja (KAK) Perawatan Sistem SIMPEL", pages: "Hlm 1 - 28" },
      { chapter: "Bagian 2: Laporan Bulanan Pemeliharaan — Metrik Kinerja & SLA", pages: "Hlm 29 - 65" },
      { chapter: "Bagian 3: Manual Guide Prosedur Alur Pengujian Alat Pelanggan", pages: "Hlm 66 - 92" },
      { chapter: "Bagian 4: Manual Guide Prosedur Alur Kalibrasi Standar Laboratorium", pages: "Hlm 93 - 118" },
      { chapter: "Bagian 5: Berita Acara Penerimaan Pekerjaan (BAPP) & Rekomendasi", pages: "Hlm 119 - 130" },
    ],
    samplePage: {
      chapterNum: "BAGIAN 3 — ALUR PELAYANAN PENGUJIAN",
      sectionCode: "3.2",
      sectionTitle: "Prosedur Penerimaan Sampel Perangkat & Penerbitan Tanda Terima Uji",
      pageNumber: "Halaman 72 dari 130",
      intro: "Tata cara staf loket pelayanan BBPPT dalam menginput data fisik perangkat telekomunikasi yang diajukan pemohon sebelum diserahkan ke laboratorium uji.",
      prerequisites: [
        "Permohonan online berstatus 'DOKUMEN_LENGKAP'.",
        "Fisik perangkat uji telah tiba di loket pelayanan BBPPT.",
      ],
      steps: [
        {
          step: 1,
          action: "Verifikasi Fisik Sampel",
          detail: "Cocokkan nomor IMEI, model, merk, dan nomor seri perangkat fisik dengan dokumen permohonan di sistem SIMPEL.",
        },
        {
          step: 2,
          action: "Cetak Barcode Sampel Uji",
          detail: "Klik tombol 'Cetak Barcode Sampel'. Tempelkan label barcode pada kemasan perangkat untuk pelacakan laboratorium.",
        },
        {
          step: 3,
          action: "Disposisi ke Laboratorium Relevan",
          detail: "Pilih laboratorium penanggung jawab (Lab RF / Lab EMC / Lab Kalibrasi) dan klik 'Kirim Sampel'.",
        },
      ],
      callout: {
        type: "warning",
        title: "INTEGRITAS PENGUJIAN ISO 17025",
        content: "Sampel yang segel fisiknya rusak wajib ditolak dengan menerbitkan Berita Acara Kerusakan Sampel sebelum diproses ke lab.",
      },
      troubleshooting: [
        { issue: "Barcode printer tidak merespons cetak.", cause: "Koneksi driver thermal printer lokal terputus.", action: "Periksa kabel USB printer atau restart layanan print spooler pada Windows." },
      ],
    },
    detail: {
      scope: "Kepala Balai BBPPT, Teknisi Laboratorium Uji & Kalibrasi, Petugas Loket Pelayanan, & Tim Vendor MST",
      highlights: [
        "Paket tata kelola pemeliharaan lengkap: KAK, Laporan Bulanan, dan Manual Guide.",
        "Menunjang kepatuhan akreditasi laboratorium ISO/IEC 17025.",
        "Struktur pelaporan berkala berstandar BAPP Kementerian Komdigi.",
      ],
    },
  },

  // 7. Komdigi - SMART Komdigi
  {
    id: "pemeliharaan-smart-komdigi",
    category: "komdigi",
    badge: "PEMELIHARAAN SISTEM ENTERPRISE",
    title: {
      id: "Pemeliharaan Aplikasi SMART TA 2026",
      en: "SMART Enterprise System Maintenance 2026",
    },
    description: {
      id: "Penyusunan Kerangka Acuan Kerja (KAK), berkas legalitas nota dinas persetujuan, serta laporan bulanan kendali mutu pekerjaan pemeliharaan berkala aplikasi SMART Kementerian Komunikasi dan Digital.",
      en: "Terms of Reference (KAK), official approval service memoranda, and periodic monthly quality assurance reports for the Komdigi SMART system.",
    },
    client: "Kementerian Komunikasi dan Digital (Komdigi)",
    documentBundle: [
      "1. Kerangka Acuan Kerja (KAK) Pemeliharaan SMART 2026",
      "2. Laporan Bulanan 1 & 2 Pemeliharaan Aplikasi SMART",
      "3. Nota Dinas Persetujuan Pekerjaan Pemeliharaan Aplikasi SMART",
    ],
    tags: ["Komdigi", "SMART System", "KAK Pemeliharaan", "Laporan Bulanan"],
    bannerGradient: "from-slate-700 to-indigo-900",
    bannerIcon: "building",
    coverImage: "/images/projects/ut-laporan-akhir.png",
    pages: "3 Dokumen • 80+ Hlm",
    documentMeta: {
      docCode: "KOMDIGI/MST-2026/SMART-MAINT/TA26",
      version: "v1.0 (TA 2026 Approved)",
      classification: "Dokumen Pengadaan & Tata Kelola IT Komdigi",
      effectiveDate: "Tahun Anggaran 2026",
    },
    caseStudy: {
      problem: "Pekerjaan pemeliharaan aplikasi strategis kementerian memerlukan keselarasan antara rencana ruang lingkup KAK dengan bukti pelaksanaan di laporan bulanan agar lolos verifikasi Pejabat Pembuat Komitmen (PPK).",
      solution: "Menyusun dokumen KAK berstandar pengadaan pemerintah, memetakan indikator SLA pemeliharaan bug/fitur, dan menerbitkan laporan bulanan berkala lengkap dengan matriks penanganan insiden.",
      impact: "Menjamin kelancaran administrasi penyerapan anggaran pemeliharaan sistem dengan 100% kepatuhan dokumentasi audit institusi.",
    },
    tableOfContents: [
      { chapter: "Bagian 1: Kerangka Acuan Kerja (KAK) Ruang Lingkup Pemeliharaan", pages: "Hlm 1 - 22" },
      { chapter: "Bagian 2: Nota Dinas & Berkas Legalitas Persetujuan Pekerjaan", pages: "Hlm 23 - 35" },
      { chapter: "Bagian 3: Laporan Bulanan Bulan 1 — Pemantauan Server & Bug Fixes", pages: "Hlm 36 - 58" },
      { chapter: "Bagian 4: Laporan Bulanan Bulan 2 — Optimasi Database & Keamanan", pages: "Hlm 59 - 78" },
    ],
    samplePage: {
      chapterNum: "BAGIAN 3 — LAPORAN KINERJA PEMELIHARAAN BULAN 1",
      sectionCode: "3.1",
      sectionTitle: "Rekapitulasi Tiket Insiden & Penanganan Bug Sistem SMART",
      pageNumber: "Halaman 42 dari 78",
      intro: "Rangkuman penyelesaian tiket perbaikan bug dan optimasi fungsional aplikasi SMART selama periode pelaksanaan bulan pertama.",
      prerequisites: [
        "Log tiket helpdesk sistem SMART terverifikasi oleh PIC kementerian.",
        "Berita acara uji perbaikan oleh tim Quality Assurance (QA).",
      ],
      steps: [
        {
          step: 1,
          action: "Klasifikasi Kategori Tiket",
          detail: "Tiket dikelompokkan ke dalam 3 level keparahan: Kritis (SLA <4 jam), Mayor (SLA <24 jam), dan Minor (SLA <72 jam).",
        },
        {
          step: 2,
          action: "Pencatatan Tindakan Resolusi",
          detail: "Setiap perbaikan dicatat nomor commit git, modul terdampak, serta hasil regression testing pada lingkungan staging.",
        },
        {
          step: 3,
          action: "Sign-Off Pemulihan Layanan",
          detail: "Meminta persetujuan penutupan tiket dari pemohon untuk memastikan fungsi aplikasi berjalan normal di produksi.",
        },
      ],
      callout: {
        type: "info",
        title: "PEMANTAUAN KETERSEDIAAN SISTEM (UPTIME)",
        content: "Rata-rata uptime server aplikasi SMART pada periode laporan ini tercatat 99.85%, memenuhi ambang batas minimum kontrak 99.5%.",
      },
      troubleshooting: [
        { issue: "Lonjakan penggunaan memori pada modul reporting.", cause: "Query agregasi data historis belum terindeks secara optimal.", action: "Menambahkan composite index pada kolom tanggal dan status pada basis data produksi." },
      ],
    },
    detail: {
      scope: "Pejabat Pembuat Komitmen (PPK), Tim Teknis Komdigi, & Tim Konsultan Pengembang MST",
      highlights: [
        "Menyelaraskan KAK, Nota Dinas, dan Laporan Bulanan kemajuan pekerjaan.",
        "Menyajikan metrik SLA dan penanganan tiket bug secara akuntabel.",
        "Memastikan kelengkapan administrasi BAST tanpa kendala audit.",
      ],
    },
  },

  // 8. Baketrans - SIBIJAK
  {
    id: "sibijak-baketrans",
    category: "baketrans",
    badge: "PORTAL LAYANAN & DATA (PLD)",
    title: {
      id: "Pengembangan Aplikasi SIBIJAK (Portal Baketrans)",
      en: "SIBIJAK Transportation Policy Data Portal",
    },
    description: {
      id: "Dokumentasi rekayasa kebutuhan perangkat lunak (SRS), KAK layanan data, serta laporan pendahuluan dan laporan akhir pengembangan modul SIBIJAK pada portal Baketrans Kementerian Perhubungan.",
      en: "Software Requirements Specification (SRS), TOR, inception and final project delivery reports for the Baketrans transport portal.",
    },
    client: "Badan Kebijakan Transportasi (Baketrans) Kemenhub",
    documentBundle: [
      "1. SRS (Software Requirements Specification) SIBIJAK 2026",
      "2. Laporan Pendahuluan Pengembangan SIBIJAK 2026",
      "3. Laporan Akhir Pengembangan SIBIJAK 2026",
      "4. KAK Pengembangan Layanan Data & Informasi Modul SIBIJAK",
    ],
    tags: ["Baketrans Kemenhub", "SRS Spesifikasi", "Laporan Awal & Akhir", "Portal Kebijakan"],
    bannerGradient: "from-blue-700 to-slate-900",
    bannerIcon: "workflow",
    coverImage: "/images/projects/sibijak-dashboard.png",
    pages: "4 Dokumen • 210+ Hlm",
    documentMeta: {
      docCode: "BKT/MST-2026/SIBIJAK-PLD/SRS",
      version: "v2.0 (Final Approved)",
      classification: "Dokumen Rekayasa Kebutuhan & Serah Terima Kemenhub",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Perumusan rekomendasi kebijakan transportasi nasional membutuhkan integrasi repositori data dari 4 moda transportasi (darat, laut, udara, perkeretaapian) yang sebelumnya tersebar dan tidak terstandarisasi.",
      solution: "Menyusun dokumen Software Requirements Specification (SRS) berstandar IEEE 830, Laporan Pendahuluan desain arsitektur, dan Laporan Akhir pengujian fungsional modul SIBIJAK pada Portal Layanan dan Data (PLD).",
      impact: "Menyatukan alur analisis data transportasi multimoda dalam satu portal terpadu dan mempercepat penyusunan naskah kebijakan strategis menteri perhubungan.",
    },
    tableOfContents: [
      { chapter: "Bagian 1: KAK & Analisis Kebutuhan Tata Kelola Data Transportasi", pages: "Hlm 1 - 32" },
      { chapter: "Bagian 2: Laporan Pendahuluan — Metodologi & Desain Arsitektur", pages: "Hlm 33 - 75" },
      { chapter: "Bagian 3: Software Requirements Specification (SRS) Modul SIBIJAK", pages: "Hlm 76 - 145" },
      { chapter: "Bagian 4: Laporan Akhir — Pengujian Fungsional & Deliverable BAST", pages: "Hlm 146 - 210" },
    ],
    samplePage: {
      chapterNum: "BAGIAN 3 — SPESIFIKASI KEBUTUHAN PERANGKAT LUNAK (SRS)",
      sectionCode: "3.4",
      sectionTitle: "Kebutuhan Fungsional Modul Analisis Kebijakan Multimoda (REQ-SBJ-04)",
      pageNumber: "Halaman 98 dari 210",
      intro: "Spesifikasi masukan, proses pengolahan algoritma, dan luaran visualisasi grafik pergerakan penumpang dan logistik nasional.",
      prerequisites: [
        "Data mentah pergerakan moda transportasi telah teragregasi di staging data lake.",
        "Pengguna memiliki role 'ANALIS_KEBIJAKAN_BKT'.",
      ],
      steps: [
        {
          step: 1,
          action: "Input Parameter Wilayah & Periode",
          detail: "Sistem menyediakan filter koridor transportasi nasional, rentang tanggal (harian/bulanan), dan jenis moda yang ingin dikomparasikan.",
        },
        {
          step: 2,
          action: "Eksekusi Model Regresi & Tren",
          detail: "Sistem mengkalkulasi indeks kepadatan dan disparitas muatan balik logistik antar wilayah secara otomatis.",
        },
        {
          step: 3,
          action: "Ekspor Ringkasan Eksekutif",
          detail: "Menghasilkan naskah ringkasan kebijakan format PDF/Word siap tanda tangan pimpinan badan kebijakan.",
        },
      ],
      callout: {
        type: "tip",
        title: "STANDARISASI FORMAT SRS IEEE 830",
        content: "Setiap butir kebutuhan fungsional dilengkapi kode unik (REQ-ID), prioritas kebutuhan (Must/Should/Could), dan kriteria penerimaan pengujian (Acceptance Criteria).",
      },
      troubleshooting: [
        { issue: "Data anomali outlier pada grafik moda laut.", cause: "Keterlambatan input data manifest kapal perintis dari pelabuhan daerah.", action: "Gunakan filter 'Data Terverifikasi Saja' pada menu preferensi analisis." },
      ],
    },
    detail: {
      scope: "Pimpinan Badan Kebijakan Transportasi, Analis Kebijakan Transportasi, Tim Data Center Kemenhub, & Konsultan MST",
      highlights: [
        "Siklus lengkap dari KAK, Laporan Pendahuluan, SRS, hingga Laporan Akhir.",
        "Dokumen SRS berstandar IEEE 830 dengan pemetaan kebutuhan fungsional presisi.",
        "Mendukung integrasi data analitik transportasi darat, laut, udara, dan kereta api.",
      ],
    },
  },

  // 9. PUPR - INSI-PLANT (AMP & BP)
  {
    id: "insi-plant-pupr",
    category: "pupr",
    badge: "SISTEM MONITORING AMP & BP",
    title: {
      id: "INSI-PLANT (Pengembangan AMP & Batching Plant)",
      en: "INSI-PLANT Infrastructure Monitoring (PUPR)",
    },
    description: {
      id: "Paket lengkap siklus proyek pengawasan mutu aspal dan beton nasional: Laporan Pendahuluan, Laporan Akhir, dan Buku Manual Penggunaan resmi aplikasi INSI-PLANT 2026 Kementerian PUPR.",
      en: "Full project lifecycle for nationwide asphalt & concrete quality monitoring: Inception Report, Final Report, and Official User Manual for PUPR.",
    },
    client: "Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR)",
    documentBundle: [
      "1. Laporan Pendahuluan Pengembangan AMP & Batching Plant 2026",
      "2. Laporan Akhir Pengembangan AMP & Batching Plant 2026",
      "3. Manual Penggunaan Resmi Aplikasi INSI-PLANT (.pdf 20MB)",
    ],
    tags: ["Kementerian PUPR", "INSI-PLANT", "User Manual (.pdf 20MB)", "AMP & Batching Plant"],
    bannerGradient: "from-amber-600 to-orange-800",
    bannerIcon: "workflow",
    coverImage: "/images/projects/insi-plant-cover.png",
    pdfUrl: "/docs/Manual-Penggunaan-INSI-PLANT-PUPR.pdf",
    pages: "3 Dokumen • 185+ Hlm",
    documentMeta: {
      docCode: "PUPR-BM/MST-2026/INSI-PLANT/AMP-BP",
      version: "v3.2 (Resmi PUPR 2026)",
      classification: "Buku Panduan & Laporan Resmi Ditjen Bina Marga",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Pengawasan kelayakan unit Asphalt Mixing Plant (AMP) dan Batching Plant (BP) di ratusan proyek jalan nasional rawan penyimpangan kualitas material tanpa adanya aplikasi inspeksi terpusat dan panduan lapangan yang jelas.",
      solution: "Menyusun Laporan Pendahuluan kerangka kendali mutu, Laporan Akhir implementasi perangkat lunak, dan Buku Manual Penggunaan resmi INSI-PLANT setebal 80+ halaman dilengkapi alur sertifikasi laik operasi alat.",
      impact: "Menjamin transparansi pengujian mutu aspal dan beton proyek jalan nasional serta memangkas waktu inspeksi fisik alat dari 7 hari menjadi 1 hari kerja.",
    },
    tableOfContents: [
      { chapter: "Bagian 1: Laporan Pendahuluan — Metodologi Pengawasan Mutu Konstruksi", pages: "Hlm 1 - 35" },
      { chapter: "Bagian 2: Panduan INSI-PLANT — Pendaftaran Unit AMP & Batching Plant", pages: "Hlm 36 - 65" },
      { chapter: "Bagian 3: Panduan INSI-PLANT — Uji Kalibrasi Timbangan & Termometer", pages: "Hlm 66 - 105" },
      { chapter: "Bagian 4: Panduan INSI-PLANT — Penerbitan Surat Laik Operasi (SLO)", pages: "Hlm 106 - 138" },
      { chapter: "Bagian 5: Laporan Akhir — Evaluasi Implementasi & Rekomendasi Teknis", pages: "Hlm 139 - 185" },
    ],
    samplePage: {
      chapterNum: "BAGIAN 3 — PANDUAN PENGGUNAAN INSI-PLANT",
      sectionCode: "3.2",
      sectionTitle: "Prosedur Uji Kalibrasi Timbangan Agregat & Penginputan Berita Acara",
      pageNumber: "Halaman 78 dari 185",
      intro: "Petunjuk bagi Pejabat Pembuat Komitmen (PPK) dan Konsultan Pengawas dalam memvalidasi sertifikat kalibrasi timbangan pabrik aspal sebelum izin produksi diterbitkan.",
      prerequisites: [
        "Data identitas unit AMP telah terdaftar dengan status 'MENUNGGU_UJI_KALIBRASI'.",
        "Sertifikat kalibrasi dari Badan Metrologi berstatus berlaku.",
      ],
      steps: [
        {
          step: 1,
          action: "Input Data Toleransi Kalibrasi",
          detail: "Masukkan nilai batas toleransi deviasi berat timbangan (maksimal ±0.5% untuk aspal dan ±1.0% untuk agregat).",
        },
        {
          step: 2,
          action: "Unggah Foto Uji Petik Beban",
          detail: "Lampirkan foto pengujian anak timbang standar di lokasi plant dengan metadata geolokasi (GPS) aktif.",
        },
        {
          step: 3,
          action: "Penerbitan Rekomendasi SLO",
          detail: "Jika pengujian memenuhi standar spesifikasi umum Bina Marga, klik 'Rekomendasikan Penerbitan SLO'.",
        },
      ],
      callout: {
        type: "warning",
        title: "STANDAR SPESIFIKASI BINA MARGA DIVISI 6",
        content: "Timbangan yang melebihi ambang batas toleransi deviasi dilarang keras digunakan untuk pencampuran aspal jalan nasional.",
      },
      troubleshooting: [
        { issue: "Aplikasi menolak berkas foto pengujian.", cause: "Foto tidak memuat metadata lokasi GPS atau resolusi melebihi 10MB.", action: "Pastikan fitur lokasi pada kamera HP diaktifkan dan gunakan kamera bawaan aplikasi INSI-PLANT." },
      ],
    },
    detail: {
      scope: "Balai Besar Pelaksanaan Jalan Nasional (BBPJN), PPK Jalan & Jembatan, Konsultan Pengawas, & Vendor Penyedia Aspal/Beton",
      highlights: [
        "Tersedia file asli User Manual INSI-PLANT format PDF 20MB di web portofolio.",
        "Paket lengkap Laporan Pendahuluan, Laporan Akhir, dan Buku Manual Penggunaan.",
        "Menjadi pedoman operasional resmi pengawasan mutu jalan nasional Kementerian PUPR.",
      ],
    },
  },

  // 10. PUPR - SI-JACK 2026 & ARUS
  {
    id: "sijack-arus-pupr",
    category: "pupr",
    badge: "JASA KONSTRUKSI & ARSITEKTUR",
    title: {
      id: "SI-JACK 2026 & Ekosistem Sistem ARUS",
      en: "SI-JACK Construction Info & ARUS Platform",
    },
    description: {
      id: "Penyusunan Laporan Pendahuluan Si-JACK 2026, diagram arsitektur sistem, serta paket laporan siklus bertahap (Pendahuluan, Antara, Akhir, dan User Manual) untuk sistem ARUS Ditjen Bina Konstruksi PUPR.",
      en: "Inception report, system architecture diagrams, and multi-stage lifecycle reports (Inception, Interim, Final, Manual) for the PUPR ARUS platform.",
    },
    client: "Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR)",
    documentBundle: [
      "1. Laporan Pendahuluan Si-JACK 2026 (.pdf 2.1MB)",
      "2. Diagram Arsitektur Aplikasi & Infrastruktur Si-JACK",
      "3. Laporan Pendahuluan, Antara, Akhir, & User Manual ARUS",
      "4. KAK Pengembangan dan Pengelolaan SI-JACK 2026",
    ],
    tags: ["Kementerian PUPR", "Si-JACK (.pdf 2.1MB)", "Sistem ARUS", "Arsitektur & SOP"],
    bannerGradient: "from-emerald-700 to-slate-900",
    bannerIcon: "workflow",
    coverImage: "/images/projects/sijack-cover.jpg",
    pdfUrl: "/docs/Laporan-Pendahuluan-Si-JACK-2026.pdf",
    pages: "4 Dokumen • 250+ Hlm",
    documentMeta: {
      docCode: "PUPR-DJBK/MST-2026/SIJACK-ARUS",
      version: "v2026.1 (Baseline Report)",
      classification: "Laporan Resmi Direktorat Jenderal Bina Konstruksi PUPR",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Pengelolaan data sertifikasi tenaga kerja konstruksi, badan usaha, dan pemantauan rantai pasok material konstruksi nasional (ARUS) membutuhkan kerangka kerja dokumentasi menyeluruh dari fase inisiasi hingga serah terima akhir.",
      solution: "Menyusun Laporan Pendahuluan Si-JACK 2026 dengan visualisasi diagram arsitektur aplikasi dan infrastruktur, serta merampungkan paket 4 dokumen sistem ARUS (Laporan Pendahuluan, Antara, Akhir, dan Buku User Manual).",
      impact: "Menyediakan blueprint arsitektur tata kelola rantai pasok jasa konstruksi nasional yang akuntabel dan mudah diaudit oleh instansi pengawas pemerintah.",
    },
    tableOfContents: [
      { chapter: "Bagian 1: Laporan Pendahuluan Si-JACK 2026 — Ruang Lingkup & Roadmap", pages: "Hlm 1 - 42" },
      { chapter: "Bagian 2: Arsitektur Aplikasi & Diagram Infrastruktur Cloud Si-JACK", pages: "Hlm 43 - 70" },
      { chapter: "Bagian 3: Laporan Pendahuluan & Laporan Antara Sistem ARUS", pages: "Hlm 71 - 140" },
      { chapter: "Bagian 4: Laporan Akhir & Hasil Pengujian Integrasi ARUS-MISFLAT", pages: "Hlm 141 - 195" },
      { chapter: "Bagian 5: User Manual Panduan Pengguna Sistem ARUS", pages: "Hlm 196 - 250" },
    ],
    samplePage: {
      chapterNum: "BAGIAN 2 — ARSITEKTUR APLIKASI SI-JACK",
      sectionCode: "2.1",
      sectionTitle: "Spesifikasi Arsitektur Microservices & Integrasi Gateway Eksternal",
      pageNumber: "Halaman 52 dari 250",
      intro: "Penjelasan arsitektur keterhubungan modul portal informasi jasa konstruksi Si-JACK dengan layanan SSO PUPR dan basis data LPJK.",
      prerequisites: [
        "Koneksi VPN SSL Ditjen Bina Marga / Bina Konstruksi aktif.",
        "Sertifikat SSL domain resmi pu.go.id terpasang pada load balancer.",
      ],
      steps: [
        {
          step: 1,
          action: "Alur Otentikasi Terpadu (SSO)",
          detail: "Pengguna masuk melalui portal SSO PUPR. Token otentikasi OAuth2 divalidasi oleh identity provider kementerian sebelum mengakses data Si-JACK.",
        },
        {
          step: 2,
          action: "Pertukaran Data API Rantai Pasok ARUS",
          detail: "Layanan bertukar payload JSON terenkripsi TLS 1.3 untuk memperbarui ketersediaan material semen, baja, dan aspal regional.",
        },
        {
          step: 3,
          action: "Pencatatan Audit Trail Log",
          detail: "Semua aktivitas perubahan status verifikasi sertifikasi dicatat pada elasticsearch cluster untuk kebutuhan audit reguler BPK/Itjen.",
        },
      ],
      callout: {
        type: "info",
        title: "STANDAR KEAMANAN SPBE KEMENTERIAN",
        content: "Arsitektur dirancang mengikuti panduan Sistem Pemerintahan Berbasis Elektronik (SPBE) dengan standar ketahanan bencana Multi-AZ Cloud.",
      },
      troubleshooting: [
        { issue: "Sinkronisasi data badan usaha LPJK timeout (>30 detik).", cause: "Beban query puncak pada database legacy LPJK.", action: "Aktifkan mekanisme queue worker berbasis RabbitMQ untuk eksekusi asinkronus." },
      ],
    },
    detail: {
      scope: "Direktorat Jenderal Bina Konstruksi PUPR, Balai Jasa Konstruksi Wilayah, LPJK, & Konsultan MST",
      highlights: [
        "Tersedia berkas asli Laporan Pendahuluan Si-JACK 2026 format PDF 2.1MB.",
        "Paket lengkap 4 dokumen berjenjang untuk sistem ARUS (Awal, Antara, Akhir, Manual).",
        "Dilengkapi diagram arsitektur aplikasi dan infrastruktur profesional.",
      ],
    },
  },
];
'''

with open(r'C:\Users\arroz\OneDrive\Dokumen\GitHub\portofolio-technical-writer\data\content.js', 'w', encoding='utf-8') as f:
    f.write(content_js)

print('Updated data/content.js with 10 real MST projects successfully!')
