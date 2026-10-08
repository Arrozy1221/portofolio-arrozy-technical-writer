# -*- coding: utf-8 -*-
"""
Script to generate sanitized, audit-safe data/content.js
Fully compliant with confidentiality, accurate metrics, professional experience alignment,
and sanitized case study samples.
"""

content_code = r'''export const content = {
  id: {
    nav: {
      brand: "Arrozy Adi Falaqi, S.Kom.",
      brandSub: "Technical Writer & Documentation Specialist",
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      methodology: "Metodologi",
      experience: "Pengalaman",
      contact: "Kontak",
      downloadCv: "Download CV",
      cvUrl: "/cv/CV_Arrozy_Adi_Falaqi_Technical_Writer_ID.pdf",
    },
    hero: {
      badge: "DOKUMENTASI TEKNIS • USER MANUAL • KAMUS DATA • SKENARIO UAT • SOP",
      name: "Arrozy Adi Falaqi, S.Kom.",
      role: "Technical Writer & Systems Documentation Specialist",
      summary:
        "Menyusun dokumentasi teknis sistem berskala kementerian & enterprise: User Manual (Buku Panduan Pengguna), Laporan Siklus Proyek (Pendahuluan, Antara & Akhir), Kamus Data Relasional, Skenario UAT, dan SOP Operasional Digital.",
      location: "Bandung, Indonesia",
      experience: "3+ Tahun Pengalaman Profesional",
      industry: "Kementerian, Lembaga Publik, & IT Enterprise",
      ctaPrimary: "Unduh Resume (.pdf)",
      ctaSecondary: "Lihat Katalog Dokumen",
    },
    metrics: [
      {
        value: "10+",
        label: "Paket Proyek Instansi",
        desc: "Kementerian, Lembaga Publik, & PTN",
      },
      {
        value: "35+",
        label: "Dokumen Teknis Tersusun",
        desc: "User Manual, Kamus Data, Laporan Siklus, SOP & UAT",
      },
      {
        value: "40%",
        label: "Efisiensi Onboarding",
        desc: "Memangkas eskalasi tiket pertanyaan pengguna berulang lewat panduan visual step-by-step",
      },
      {
        value: "100%",
        label: "Kepatuhan Standar Dokumen",
        desc: "Sesuai kaidah formal dokumen dan lulus verifikasi serah terima institusi",
      },
    ],
    showcase: {
      eyebrow: "KATALOG DOKUMENTASI TEKNIS (STUDI KASUS TERSANITASI)",
      title: "Paket Proyek Dokumentasi Terstruktur",
      subtitle:
        "Seluruh paket dokumen disajikan sebagai studi kasus profesional tersanitasi (sanitized sample) mencakup Laporan Siklus Proyek, Buku Panduan Pengguna (User Manual), Kamus Data, Skenario UAT, dan SOP Operasional Digital.",
      viewAll: "Lihat Semua Proyek →",
      categories: [
        { id: "all", label: "Semua Instansi (10 Proyek)" },
        { id: "ut", label: "Universitas Terbuka (UT)" },
        { id: "komdigi", label: "Kementerian Komdigi & BBPPT" },
        { id: "pupr", label: "Kementerian PUPR" },
        { id: "baketrans", label: "Kemenhub (Baketrans)" },
      ],
    },
    lifecycle: {
      eyebrow: "PENDEKATAN KERJA",
      title: "Metodologi Siklus Hidup Dokumentasi Teknis (DDLC)",
      subtitle:
        "Setiap dokumentasi disusun secara sistematis dan terukur untuk memastikan hasil yang berkualitas dan mudah dipahami.",
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
          desc: "Mendistribusikan dokumentasi dalam format terstandarisasi (Executive PDF, Web Docs, Markdown).",
        },
        {
          num: "06",
          title: "Pemeliharaan & Pembaruan",
          desc: "Update konten secara berkala sesuai perkembangan rilis sistem dan masukan pengguna.",
        },
      ],
    },
    experience: {
      eyebrow: "PENGALAMAN KERJA PROFESIONAL",
      title: "Riwayat Pengalaman Kerja",
      subtitle:
        "Rekam jejak kontribusi dalam perancangan antarmuka dan penyusunan dokumentasi teknis sistem berskala enterprise.",
      viewAll: "Lihat Portofolio Dokumen →",
      items: [
        {
          role: "UI/UX Designer & Technical Writer",
          company: "PT Mitra Sinerji Teknoindo (MST)",
          location: "Bandung, Indonesia",
          period: "Agt 2023 – Sekarang",
          icon: "building",
          summary: "Konsultan IT Enterprise untuk Pemerintahan & Pendidikan Tinggi",
          points: [
            "Menyusun paket dokumen lengkap (User Manual, Laporan Siklus Proyek, Kamus Data, dan Dokumen Pengujian UAT) untuk Komdigi, PUPR, Baketrans, dan Universitas Terbuka.",
            "Menyusun buku panduan resmi (User Manual) sistem akademik Kaprodi 3.0 setebal 240+ halaman berstandar nasional lengkap dengan anotasi UI dan alur troubleshooting.",
            "Menyusun spesifikasi FSD, kamus data relasional basis data, serta skenario pengujian UAT modul billing SIMPONI V2.",
          ],
        },
        {
          role: "Web Developer & Systems Documentation (Magang)",
          company: "CV Mitra Yudha Xaviera",
          location: "Bandung, Indonesia",
          period: "Sep 2022 – Nov 2022",
          icon: "monitor",
          summary: "Penyedia Layanan Teknologi Informasi & Pengembangan Web",
          points: [
            "Mengembangkan antarmuka front-end berbasis web standar serta mendokumentasikan panduan integrasi sistem.",
            "Mempelajari dan mendokumentasikan pemodelan basis data relasional guna memperkuat dasar penyusunan kamus data dan API.",
            "Mengoptimalkan aset antarmuka sehingga mempercepat waktu respon pemuatan halaman web hingga 20%.",
          ],
        },
        {
          role: "Sarjana Ilmu Komputer — Rekayasa Perangkat Lunak & Sistem",
          company: "Universitas Pendidikan Indonesia (UPI)",
          location: "Bandung, Indonesia",
          period: "2019 – 2024",
          icon: "users",
          summary: "Pendidikan Akademik Ilmu Komputer (IPK 3.73 / 4.00)",
          points: [
            "Mendalami Rekayasa Perangkat Lunak, Interaksi Manusia & Komputer (HCI), dan Manajemen Basis Data.",
            "Menyelesaikan proyek skripsi sistem web menggunakan metode Double Diamond mencakup riset pengguna, perancangan antarmuka, dan dokumentasi teknis sistem.",
            "Menyusun modul panduan dan dokumentasi teknis antarmuka bagi pengguna civitas akademika.",
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
            "User Manual & Buku Panduan Sistem",
            "Laporan Pendahuluan, Antara & Akhir",
            "Kamus Data (Data Dictionary)",
            "Database ERD & Relasi Skema",
            "Skenario & Checklist UAT",
            "SOP Operasional Digital Sistem",
          ],
        },
        {
          title: "Tools & Tata Letak",
          icon: "terminal",
          items: [
            "Microsoft Word (Executive Book Layout)",
            "Draw.io & Visio (BPMN & Flowchart)",
            "Figma (Screen Annotation Callouts)",
            "Navicat (DB Architecture & ERD)",
            "Markdown, MDX & Notion",
            "Git & Version Control",
          ],
        },
        {
          title: "Pemahaman Rekayasa Sistem",
          icon: "code",
          items: [
            "Basis Data Relasional (PostgreSQL, MySQL)",
            "REST APIs & Integrasi Layanan",
            "Arsitektur Microservices & SSO",
            "Metodologi SDLC & DDLC",
          ],
        },
        {
          title: "Komunikasi & Tata Kelola",
          icon: "users",
          items: [
            "Wawancara Analisis Kebutuhan",
            "Kolaborasi Tim Dev, QA & Stakeholder",
            "Verifikasi Kriteria Serah Terima (BAST)",
            "Information Architecture & Taksonomi",
          ],
        },
      ],
    },
    cta: {
      badge: "TERBUKA UNTUK KOLABORASI & KERJA SAMA",
      title: "Siap Membantu Dokumentasi Sistem Anda",
      desc:
        "Siap menyusun paket dokumentasi teknis yang jelas, rapi, dan berstandar audit: User Manual, Laporan Siklus Proyek, Kamus Data, Skenario UAT, dan SOP Digital.",
      whatsappBtn: "Hubungi via WhatsApp",
      linkedinBtn: "Lihat Profil LinkedIn",
      quote: "“Dokumentasi yang jelas adalah jembatan utama antara kompleksitas sistem dan kemudahan pengguna.”",
      whatsappUrl: "https://wa.me/6281298023537",
      linkedinUrl: "https://www.linkedin.com/in/arrozy-adi-falaqi-6a25ba14a",
    },
    footer: {
      rights: "© 2026 Arrozy Adi Falaqi, S.Kom. All rights reserved.",
      tagline:
        "Portofolio Profesional Independen Arrozy Adi Falaqi, S.Kom. • Seluruh cuplikan dokumen teknis dan artefak arsitektur disajikan secara tersanitasi (sanitized sample) semata untuk evaluasi kompetensi Technical Writer. Hak cipta sistem milik masing-masing instansi.",
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
      experience: "Experience",
      contact: "Contact",
      downloadCv: "Download CV",
      cvUrl: "/cv/CV_Arrozy_Adi_Falaqi_Technical_Writer_EN.pdf",
    },
    hero: {
      badge: "TECHNICAL WRITING • USER MANUALS • DATA DICTIONARIES • UAT SCENARIOS • SOP",
      name: "Arrozy Adi Falaqi, S.Kom.",
      role: "Technical Writer & Systems Documentation Specialist",
      summary:
        "Authoring enterprise & ministerial technical documentation: User Manuals, Project Lifecycle Reports (Inception, Interim & Final), Relational Data Dictionaries, UAT Test Scenarios, and Digital SOPs.",
      location: "Bandung, Indonesia",
      experience: "3+ Years Professional Experience",
      industry: "Ministries, Public Agencies, & Enterprise IT",
      ctaPrimary: "Download Resume (.pdf)",
      ctaSecondary: "Explore Document Catalog",
    },
    metrics: [
      {
        value: "10+",
        label: "Institutional Projects",
        desc: "Ministries, Public Agencies, & Universities",
      },
      {
        value: "35+",
        label: "Authored Tech Documents",
        desc: "User Manuals, Data Dictionaries, Reports, SOP & UAT",
      },
      {
        value: "40%",
        label: "Onboarding Efficiency",
        desc: "Reduces repetitive support tickets via visual step-by-step guidance",
      },
      {
        value: "100%",
        label: "Document Quality Compliance",
        desc: "Aligned with formal reporting guidelines and passing institutional handover verification",
      },
    ],
    showcase: {
      eyebrow: "TECHNICAL DOCUMENTATION CATALOG (SANITIZED CASE STUDIES)",
      title: "Structured Project Documentation Packages",
      subtitle:
        "All document packages are presented as sanitized professional case studies covering Inception & Final Reports, User Manuals, Data Dictionaries, UAT Scenarios, and Digital SOPs.",
      viewAll: "View All Projects →",
      categories: [
        { id: "all", label: "All Institutions (10 Projects)" },
        { id: "ut", label: "Universitas Terbuka (UT)" },
        { id: "komdigi", label: "Ministry of Komdigi & BBPPT" },
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
      eyebrow: "PROFESSIONAL WORK EXPERIENCE",
      title: "Work Experience",
      subtitle:
        "Track record in user interface design and enterprise-scale technical documentation authoring.",
      viewAll: "Explore Projects Catalog →",
      items: [
        {
          role: "UI/UX Designer & Technical Writer",
          company: "PT Mitra Sinerji Teknoindo (MST)",
          location: "Bandung, Indonesia",
          period: "Aug 2023 – Present",
          icon: "building",
          summary: "Enterprise IT Consulting for Ministries & Higher Education",
          points: [
            "Authored complete document packages (User Manuals, Lifecycle Reports, Data Dictionaries, UAT Documents) for Komdigi, PUPR, Baketrans, and Universitas Terbuka.",
            "Authored official 240+ page User Manual for the Kaprodi 3.0 academic curriculum system with UI callouts and troubleshooting flows.",
            "Authored FSD specifications, relational database dictionaries, and UAT test scenarios for billing modules.",
          ],
        },
        {
          role: "Web Developer & Systems Documentation (Intern)",
          company: "CV Mitra Yudha Xaviera",
          location: "Bandung, Indonesia",
          period: "Sep 2022 – Nov 2022",
          icon: "monitor",
          summary: "IT Services & Web Solutions Provider",
          points: [
            "Developed front-end web interfaces and documented system integration guidelines.",
            "Studied and documented relational database schemas to establish foundations for data dictionaries and API specs.",
            "Optimized interface assets, improving web loading response speed by up to 20%.",
          ],
        },
        {
          role: "B.Sc. in Computer Science — Software Engineering & Systems",
          company: "Universitas Pendidikan Indonesia (UPI)",
          location: "Bandung, Indonesia",
          period: "2019 – 2024",
          icon: "users",
          summary: "Computer Science Academic Background (GPA 3.73 / 4.00)",
          points: [
            "Studied Software Engineering, Human-Computer Interaction (HCI), and Relational Database Systems.",
            "Completed capstone web platform using the Double Diamond method covering user research, UI design, and technical system documentation.",
            "Authored user guides and technical UI documentation for academic users.",
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
            "User Manuals & System Handbooks",
            "Inception, Interim & Final Reports",
            "Data Dictionaries (Relational DB)",
            "Database ERD & Schema Diagrams",
            "UAT Scenarios & Verification Sheets",
            "Digital SOPs (Standard Operating Procedures)",
          ],
        },
        {
          title: "Tools & Layout",
          icon: "terminal",
          items: [
            "Microsoft Word (Executive Book Layout)",
            "Draw.io & Visio (BPMN & Flowcharts)",
            "Figma (Screen Annotation Callouts)",
            "Navicat (DB Architecture & ERD)",
            "Markdown, MDX & Notion",
            "Git & Version Control",
          ],
        },
        {
          title: "Engineering Literacy",
          icon: "code",
          items: [
            "Relational Databases (PostgreSQL, MySQL)",
            "REST APIs & Service Integration",
            "Microservices Architecture & SSO",
            "SDLC & DDLC Methodologies",
          ],
        },
        {
          title: "Communication & Governance",
          icon: "users",
          items: [
            "Requirements Gathering Interviews",
            "Dev, QA & Stakeholder Collaboration",
            "Handover Acceptance Criteria (BAST)",
            "Information Architecture & Taxonomy",
          ],
        },
      ],
    },
    cta: {
      badge: "AVAILABLE FOR COLLABORATION",
      title: "Ready to Elevate Your Systems Documentation?",
      desc:
        "I am ready to help author complete, audit-ready documentation packages (User Manuals, Project Lifecycle Reports, Data Dictionaries, UAT Scenarios, and Digital SOPs) for your organization.",
      whatsappBtn: "Contact via WhatsApp",
      linkedinBtn: "View LinkedIn Profile",
      quote: "“Clear documentation is the bridge between complex systems and seamless user experiences.”",
      whatsappUrl: "https://wa.me/6281298023537",
      linkedinUrl: "https://www.linkedin.com/in/arrozy-adi-falaqi-6a25ba14a",
    },
    footer: {
      rights: "© 2026 Arrozy Adi Falaqi, S.Kom. All rights reserved.",
      tagline:
        "Independent Professional Portfolio of Arrozy Adi Falaqi, S.Kom. • All technical document excerpts and architecture artifacts are presented in sanitized form solely for technical writing competency evaluation. System IP rights remain with respective institutions.",
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
      "1. Laporan Pendahuluan Analisis Pengembangan Kurikulum S2",
      "2. Laporan Akhir Validasi Kurikulum S2 Berbasis CPL",
      "3. Buku Panduan Penggunaan Kurikulum - Kaprodi 3.0 (240+ Hlm)",
      "4. Lembar Verifikasi Penjaminan Mutu Akademik",
    ],
    tags: ["Universitas Terbuka", "Laporan Siklus Proyek", "User Manual 240+ Hlm", "Kurikulum S2"],
    bannerGradient: "from-blue-600 to-indigo-700",
    bannerIcon: "graduation",
    coverImage: "/images/projects/ut-workspace.png",
    pages: "4 Dokumen • 320+ Hlm",
    documentMeta: {
      docCode: "UT-CASE/KUR-S2/KAPRODI-3.0",
      version: "v3.0.0 (Portofolio Case Study)",
      classification: "Studi Kasus Dokumentasi Akademik (Tersanitasi)",
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
      stepsTitle: "Prosedur Pengoperasian Bertahap:",
      steps: [
        {
          step: 1,
          action: "Buka Modul Kurikulum S2",
          detail: "Pada bilah navigasi samping, klik menu 'Kurikulum Pascasarjana' lalu pilih submenu 'Matriks Pemetaan CPL'.",
        },
        {
          step: 2,
          action: "Tambah Butir Capaian",
          detail: "Klik tombol '+ Tambah Butir CPL'. Masukkan kode unik (misal: CPL-MAG-01) dan pilih Taksonomi Bloom yang relevan.",
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
        "Paket lengkap dokumen: Laporan Pendahuluan, Laporan Akhir, dan Buku Panduan Kaprodi 3.0.",
        "Buku panduan setebal 240+ halaman dengan taksonomi rapi dan tangkapan layar beranotasi.",
        "Menjadi standar acuan operasional civitas akademika pascasarjana.",
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
      "1. Laporan Pendahuluan Arsitektur Web Dashboard SDGs",
      "2. Laporan Akhir Evaluasi Implementasi Modul SDGs",
      "3. Buku Panduan Pengguna (User Manual) Dashboard SDGs",
      "4. Panduan Format Standar Eviden Capaian Indikator",
    ],
    tags: ["Universitas Terbuka", "SDGs", "Laporan Siklus Proyek", "User Manual"],
    bannerGradient: "from-emerald-600 to-teal-800",
    bannerIcon: "graduation",
    coverImage: "/images/projects/ut-sdgs.png",
    pages: "4 Dokumen • 160+ Hlm",
    documentMeta: {
      docCode: "UT-CASE/SDGS-DASHBOARD/V2",
      version: "v2.1.0 (Portofolio Case Study)",
      classification: "Studi Kasus Panduan Web SDGs (Tersanitasi)",
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
      stepsTitle: "Prosedur Pengoperasian Bertahap:",
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
        { issue: "Gagal mengunggah file bukti eviden.", cause: "Ukuran berkas PDF melebihi batas kuota 20MB atau format file tidak diizinkan.", action: "Kompres file PDF menggunakan kompresor standar atau gunakan Google Drive link yang disetel publik." },
      ],
    },
    detail: {
      scope: "Pimpinan Universitas, Tim Gugus Tugas SDGs, PIC Fakultas & Unit Kerja, serta Asesor Pemeringkatan",
      highlights: [
        "Menyediakan panduan lengkap pemetaan 17 tujuan Sustainable Development Goals.",
        "Mendukung pelaporan internasional THE University Impact Rankings.",
        "Lengkap dengan petunjuk troubleshooting upload eviden dan taksonomi dokumen.",
      ],
    },
  },

  // 3. UT - MyUT Alumni & BIMON
  {
    id: "myut-alumni-bimon",
    category: "ut",
    badge: "EKOSISTEM DIGITAL MAHASISWA & ALUMNI",
    title: {
      id: "Ekosistem MyUT: Tracer Alumni & Bimbingan Online",
      en: "MyUT Ecosystem: Alumni Tracer & BIMON Online Supervision",
    },
    description: {
      id: "Dokumentasi buku panduan pengguna terpadu untuk platform tracer study alumni serta sistem bimbingan online (BIMON) tugas akhir mahasiswa Universitas Terbuka.",
      en: "Unified user guide and system documentation for the alumni tracer study platform and BIMON final project online supervision.",
    },
    client: "Universitas Terbuka (UT)",
    documentBundle: [
      "1. User Manual Portal Tracer Study & Registrasi Alumni MyUT",
      "2. User Manual Sistem Bimbingan Online (BIMON) Tugas Akhir",
      "3. Laporan Evaluasi Uji Coba Pengguna (User Testing Report)",
      "4. Panduan Verifikasi Ijazah & Legalisir Digital",
    ],
    tags: ["Universitas Terbuka", "MyUT", "User Manual", "Tracer Study & BIMON"],
    bannerGradient: "from-blue-700 to-indigo-900",
    bannerIcon: "graduation",
    coverImage: "/images/projects/my-ut.png",
    pages: "4 Dokumen • 140+ Hlm",
    documentMeta: {
      docCode: "UT-CASE/MYUT-TRACER-BIMON",
      version: "v2.0 (Portofolio Case Study)",
      classification: "Studi Kasus Panduan Sistem Informasi (Tersanitasi)",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Tingginya jumlah alumni yang tersebar di seluruh Indonesia membuat pendataan kuesioner tracer study tracer lambat dan pelacakan revisi bimbingan mahasiswa tugas akhir tidak terpantau.",
      solution: "Menyusun buku panduan pengguna MyUT Alumni dengan antarmuka mobile-friendly, panduan sistem BIMON untuk dosen pembimbing, dan modul FAQ mandiri.",
      impact: "Mendongkrak response rate pengisian kuesioner alumni dan memangkas waktu approval bimbingan tugas akhir sebesar 35%.",
    },
    tableOfContents: [
      { chapter: "Bab 1: Ikhtisar Ekosistem MyUT & Single Sign-On (SSO)", pages: "Hlm 1 - 18" },
      { chapter: "Bab 2: Panduan Alumni — Pemutakhiran Profil & Kuesioner Tracer", pages: "Hlm 19 - 48" },
      { chapter: "Bab 3: Panduan Mahasiswa — Pengajuan Judul & Bab BIMON", pages: "Hlm 49 - 85" },
      { chapter: "Bab 4: Panduan Dosen — Review Naskah, Catatan Revisi & Nilai", pages: "Hlm 86 - 118" },
      { chapter: "Bab 5: Panduan Admin Fakultas — Rekapitulasi & Pelaporan", pages: "Hlm 119 - 142" },
    ],
    samplePage: {
      chapterNum: "BAB 3 — SISTEM BIMBINGAN ONLINE (BIMON)",
      sectionCode: "3.3",
      sectionTitle: "Tata Cara Pengunggahan Draf Skripsi & Log Konsultasi Mahasiswa",
      pageNumber: "Halaman 64 dari 142",
      intro: "Petunjuk bagi mahasiswa tingkat akhir dalam menyerahkan berkas draf laporan tugas akhir dan mencatat notula konsultasi dengan dosen pembimbing.",
      prerequisites: [
        "Status registrasi mahasiswa aktif semester akhir.",
        "Dosen pembimbing telah ditetapkan oleh Ketua Program Studi.",
      ],
      stepsTitle: "Prosedur Pengoperasian Bertahap:",
      steps: [
        {
          step: 1,
          action: "Akses Menu BIMON",
          detail: "Login ke portal MyUT, buka modul 'Akademik' lalu pilih submenu 'Bimbingan Online (BIMON)'.",
        },
        {
          step: 2,
          action: "Unggah Draf & Catatan",
          detail: "Klik 'Sesi Bimbingan Baru', tentukan topik konsultasi, tuliskan rangkuman kemajuan naskah, dan lampirkan file draf naskah.",
        },
        {
          step: 3,
          action: "Kirim Pemberitahuan",
          detail: "Klik 'Kirim ke Dosen'. Dosen pembimbing akan menerima notifikasi email otomatis untuk memberikan review dan catatan perbaikan.",
        },
      ],
      callout: {
        type: "tip",
        title: "KETENTUAN SYARAT SIDANG",
        content: "Minimal frekuensi konsultasi yang disetujui dosen pembimbing pada sistem BIMON adalah 8 kali sebelum pendaftaran sidang ujian dibuka.",
      },
      troubleshooting: [
        { issue: "Status bimbingan terkunci dan tidak bisa unggah revisi.", cause: "Dosen pembimbing belum memberikan status review pada sesi sebelumnya.", action: "Hubungi dosen pembimbing untuk menyelesaikan ulasan sesi aktif terlebih dahulu." },
      ],
    },
    detail: {
      scope: "Alumni Universitas Terbuka, Mahasiswa Tugas Akhir, Dosen Pembimbing, & Pengelola Tracer Study",
      highlights: [
        "Panduan visual dua sisi: antarmuka mahasiswa dan dashboard dosen pembimbing.",
        "Memuat standarisasi pengisian instrumen survei tracer study.",
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
      id: "Aplikasi CAT & Skenario UAT Uji Kompetensi (Komdigi)",
      en: "CAT Examination Platform & UAT Testing Scenarios (Komdigi)",
    },
    description: {
      id: "Paket dokumen pelaporan progres berkala, skenario pengujian UAT, dan buku panduan penggunaan aplikasi CAT terpisah untuk peserta ujian dan administrator/pengawas Kementerian Komunikasi dan Digital.",
      en: "Progress reporting package, UAT acceptance scenarios, and dual user manuals for candidates and proctor administrators on the Komdigi CAT exam system.",
    },
    client: "Kementerian Komunikasi dan Digital (Komdigi)",
    documentBundle: [
      "1. Dokumen Perancangan Sistem & Alur Ujian CAT",
      "2. User Manual Aplikasi CAT (Panduan Peserta Ujian)",
      "3. User Manual Aplikasi CAT (Panduan Pengawas & Admin)",
      "4. Dokumen Skenario UAT (User Acceptance Testing) & Lembar Verifikasi",
    ],
    tags: ["Kementerian Komdigi", "CAT Exam", "Skenario UAT", "User Manual Dual-Peran"],
    bannerGradient: "from-purple-700 to-indigo-900",
    bannerIcon: "building",
    coverImage: "/images/projects/simponi-dashboard.png",
    pages: "4 Dokumen • 115+ Hlm",
    documentMeta: {
      docCode: "KOMDIGI-CASE/CAT-EXAM-UAT",
      version: "v1.2 (Portofolio Case Study)",
      classification: "Studi Kasus Sistem Ujian & Pengujian UAT (Tersanitasi)",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Penyelenggaraan ujian kompetensi sertifikasi membutuhkan tata tertib dan panduan teknis yang sangat ketat untuk meminimalisir kendala teknis peserta dan memastikan integritas data pengawas.",
      solution: "Menyusun skenario pengujian UAT menyeluruh, Laporan Progres berkala, serta merancang dua buku panduan terpisah: User Manual Peserta (berorientasi UX ramah pemula) dan User Manual Admin (tata kelola token, bank soal, dan monitoring kecurangan).",
      impact: "Menghasilkan zero downtime keluhan instruksi selama pelaksanaan ujian sertifikasi nasional dan mempercepat rekapitulasi nilai ujian.",
    },
    tableOfContents: [
      { chapter: "Bagian 1: Desain Arsitektur & Alur Bisnis Ujian CAT", pages: "Hlm 1 - 25" },
      { chapter: "Bagian 2: Panduan Peserta — Login, Token & Simulasi Tes", pages: "Hlm 26 - 52" },
      { chapter: "Bagian 3: Panduan Peserta — Pengerjaan Soal & Submit Jawaban", pages: "Hlm 53 - 70" },
      { chapter: "Bagian 4: Panduan Admin — Manajemen Bank Soal & Pengacakan", pages: "Hlm 71 - 85" },
      { chapter: "Bagian 5: Panduan Admin — Monitoring Live Peserta & Freeze Sesi", pages: "Hlm 86 - 98" },
      { chapter: "Bagian 6: Skenario UAT — Matriks Pengujian Fungsional & Kriteria Penerimaan", pages: "Hlm 99 - 118" },
    ],
    samplePage: {
      chapterNum: "BAGIAN 2 — PANDUAN PESERTA UJIAN CAT",
      sectionCode: "2.2",
      sectionTitle: "Tata Cara Memulai Ujian Menggunakan Token Sesi & Verifikasi Kamera",
      pageNumber: "Halaman 32 dari 118",
      intro: "Petunjuk bagi peserta dalam melakukan otentikasi identitas, memasukkan token ujian dari pengawas, dan memulai hitung mundur pengerjaan soal.",
      prerequisites: [
        "Browser modern dengan izin akses webcam aktif.",
        "Nomor Peserta Ujian dan Token Sesi yang dibacakan oleh Pengawas.",
      ],
      stepsTitle: "Prosedur Pengoperasian Bertahap:",
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
        "Dilengkapi dokumen skenario UAT lengkap dengan prasyarat dan expected vs actual result.",
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
      id: "Kamus Data & Arsitektur Non-SIMS (BBPPT Komdigi)",
      en: "Non-SIMS Data Dictionary & Architecture (BBPPT Komdigi)",
    },
    description: {
      id: "Dokumentasi spesifikasi teknis kamus data formal, relasi foreign key, skema Entity Relationship Diagram (ERD), dan dokumen arsitektur pemanfaatan Chatbot AI Balai Pengujian Perangkat Telekomunikasi (BBPPT Komdigi).",
      en: "Technical data dictionary, ERD entity relations, and architecture whitepaper for BBPPT AI Chatbot testing systems.",
    },
    client: "Balai Besar Pengujian Perangkat Telekomunikasi (BBPPT Komdigi)",
    documentBundle: [
      "1. Kamus Data Relasional Sistem Layanan Pengujian (Tersanitasi)",
      "2. Entity Relationship Diagram (ERD) Logikal & Fisikal",
      "3. Dokumen Arsitektur Integrasi Layanan & Chatbot AI",
      "4. Standar Konvensi Penamaan Tabel & Indeks Basis Data",
    ],
    tags: ["BBPPT Komdigi", "Kamus Data", "ERD Diagram", "Spektrum AI", "PostgreSQL"],
    bannerGradient: "from-teal-700 to-emerald-950",
    bannerIcon: "database",
    coverImage: "/images/projects/non-sims-erd.png",
    pages: "4 Dokumen • 98+ Hlm",
    documentMeta: {
      docCode: "BBPPT-CASE/DATA-DICT/NON-SIMS",
      version: "v2.4 (Portofolio Case Study)",
      classification: "Studi Kasus Spesifikasi Teknis Basis Data (Tersanitasi)",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Pengembangan mikroservis pengujian perangkat telekomunikasi kerap terhambat akibat inkonsistensi tipe data, duplikasi kolom basis data, dan belum adanya acuan relasi foreign key yang baku antar developer backend.",
      solution: "Menyusun Kamus Data relasional mendalam berisi puluhan entitas tabel, diagram ERD konseptual-fisik, serta dokumen implementasi Chatbot AI untuk otomasi tanya-jawab regulasi pengujian.",
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
      chapterNum: "BAB 3 — SPESIFIKASI ENTITAS HASIL UJI (CONTOH TERSANITASI)",
      sectionCode: "3.3",
      sectionTitle: "Kamus Data Tabel: 'ref_sample_inspection_result'",
      pageNumber: "Halaman 42 dari 98",
      intro: "Struktur kolom, tipe data, indeks, dan batasan integritas untuk menyimpan rekaman data pengujian parameter teknis perangkat telekomunikasi. (Seluruh nama field dan basis data telah disanitasi).",
      prerequisites: [
        "Akses skema PostgreSQL database 'db_testing_service_sample' (Sanitized Environment).",
        "Hak otorisasi DBA atau Lead Software Engineer.",
      ],
      stepsTitle: "Struktur Spesifikasi Kolom Data (Data Dictionary Schema):",
      steps: [
        {
          step: 1,
          action: "id_inspection_result (UUID, PK)",
          detail: "Primary Key unik format RFC 4122 v4. Ter-generate otomatis saat nomor agenda pengujian dimulai. Sifat: NOT NULL, UNIQUE, Indexed.",
        },
        {
          step: 2,
          action: "ref_certificate_code (VARCHAR(50))",
          detail: "Foreign Key mereferensikan 'ref_service_application(certificate_code)'. Constraint: ON DELETE RESTRICT, ON UPDATE CASCADE.",
        },
        {
          step: 3,
          action: "compliance_status (ENUM)",
          detail: "Domain nilai: ['PASSED', 'FAILED', 'RE_TESTING']. Nilai bawaan (default): 'RE_TESTING'.",
        },
      ],
      callout: {
        type: "info",
        title: "STANDAR INTEGRITAS DATA & AUDIT TRAIL",
        content: "Setiap record tabel wajib menyertakan kolom audit trail: 'created_at', 'created_by', 'updated_at', dan flag 'is_deleted' untuk soft-delete auditing.",
      },
      troubleshooting: [
        { issue: "Foreign key constraint violation error (23503).", cause: "Kode referensi yang direferensikan belum tersimpan di tabel induk permohonan.", action: "Pastikan transaksi data induk telah berhasil di-commit sebelum menuliskan data hasil pengujian." },
      ],
    },
    detail: {
      scope: "Software Engineers, Database Administrators, QA Leads, & Auditor Keamanan Sistem BBPPT",
      highlights: [
        "Spesifikasi kamus data formal tersanitasi dengan dokumentasi constraint yang teliti.",
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
      id: "SIMPEL: Sistem Pengujian & Kalibrasi Laboratorium",
      en: "SIMPEL: Laboratory Testing & Calibration Platform",
    },
    description: {
      id: "Paket dokumentasi perancangan alur pelayanan pengujian perangkat, SOP operasional teknisi laboratorium, dan buku panduan manual terpadu Balai Pengujian BBPPT Komdigi.",
      en: "System workflow documentation, laboratory technician operational SOPs, and unified user manual for national telecom testing and calibration.",
    },
    client: "Balai Besar Pengujian Perangkat Telekomunikasi (BBPPT Komdigi)",
    documentBundle: [
      "1. Dokumen Perancangan Alur Pelayanan Pengujian & Kalibrasi",
      "2. User Manual Prosedur Alur Pengujian Alat Pelanggan",
      "3. User Manual Prosedur Alur Kalibrasi Standar Laboratorium",
      "4. Dokumen SOP Pengendalian Sampel Uji Berstandar ISO 17025",
    ],
    tags: ["BBPPT Komdigi", "SIMPEL NG", "Alur Integrasi Sistem", "User Manual & SOP"],
    bannerGradient: "from-cyan-700 to-blue-900",
    bannerIcon: "building",
    coverImage: "/images/projects/ut-panduan.png",
    pages: "4 Dokumen • 120+ Hlm",
    documentMeta: {
      docCode: "BBPPT-CASE/SIMPEL-LAB/SOP",
      version: "v2.0 (Portofolio Case Study)",
      classification: "Studi Kasus Panduan Layanan Laboratorium (Tersanitasi)",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Operasional pengujian dan kalibrasi perangkat telekomunikasi membutuhkan alur kerja terstruktur yang ketat guna memenuhi standar akreditasi KAN ISO/IEC 17025 tanpa ada risiko salah penanganan sampel.",
      solution: "Menyusun dokumen alur integrasi sistem, manual guide terpisah bagi loket penerimaan dan teknisi lab, serta merumuskan dokumen SOP pengendalian sampel uji.",
      impact: "Memperjelas alur kerja timbal balik antar divisi laboratorium dan menjamin kepatuhan dokumentasi akreditasi internasional.",
    },
    tableOfContents: [
      { chapter: "Bagian 1: Desain Arsitektur & Alur Integrasi Sistem SIMPEL", pages: "Hlm 1 - 28" },
      { chapter: "Bagian 2: Manual Guide Prosedur Alur Pengujian Alat Pelanggan", pages: "Hlm 29 - 62" },
      { chapter: "Bagian 3: Manual Guide Prosedur Alur Kalibrasi Standar Laboratorium", pages: "Hlm 63 - 95" },
      { chapter: "Bagian 4: Standard Operating Procedure (SOP) Pengendalian Sampel Uji", pages: "Hlm 96 - 120" },
    ],
    samplePage: {
      chapterNum: "BAGIAN 2 — ALUR PELAYANAN PENGUJIAN",
      sectionCode: "2.2",
      sectionTitle: "Prosedur Penerimaan Sampel Perangkat & Penerbitan Tanda Terima Uji",
      pageNumber: "Halaman 42 dari 120",
      intro: "Tata cara staf loket pelayanan BBPPT dalam memverifikasi sampel fisik perangkat telekomunikasi yang diajukan pemohon sebelum diserahkan ke laboratorium uji.",
      prerequisites: [
        "Permohonan online berstatus 'DOKUMEN_LENGKAP'.",
        "Fisik perangkat uji telah tiba di loket pelayanan BBPPT.",
      ],
      stepsTitle: "Prosedur Pengoperasian Bertahap:",
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
      scope: "Kepala Balai BBPPT, Teknisi Laboratorium Uji & Kalibrasi, Petugas Loket Pelayanan",
      highlights: [
        "Paket dokumentasi alur sistem lengkap: Alur Integrasi, Manual Guide, dan SOP Standar.",
        "Menunjang kepatuhan akreditasi laboratorium ISO/IEC 17025.",
        "Menghilangkan kerancuan penanganan sampel antara loket pelayanan dan lab teknis.",
      ],
    },
  },

  // 7. Komdigi - SMART Komdigi
  {
    id: "pemeliharaan-smart-komdigi",
    category: "komdigi",
    badge: "SOP DIGITAL & MANAJEMEN SISTEM",
    title: {
      id: "SOP Digital & Manajemen Insiden Platform SMART (Komdigi)",
      en: "Digital SOP & Incident Management for SMART Platform (Komdigi)",
    },
    description: {
      id: "Penyusunan Standard Operating Procedure (SOP) operasional sistem, panduan pemantauan performa server, dan skenario penanganan tiket insiden aplikasi SMART Kementerian Komunikasi dan Digital.",
      en: "Standard Operating Procedures (SOP), server performance monitoring guidelines, and incident ticket handling workflows for the Komdigi SMART enterprise platform.",
    },
    client: "Kementerian Komunikasi dan Digital (Komdigi)",
    documentBundle: [
      "1. Standard Operating Procedure (SOP) Operasional Aplikasi SMART",
      "2. Panduan Penanganan Insiden & Matriks Eskalasi Tiket Bug",
      "3. Dokumen Spesifikasi Pemantauan Kinerja & Uptime Server",
      "4. Skenario UAT Regresi Pembaruan Sistem",
    ],
    tags: ["Kementerian Komdigi", "SMART System", "SOP Digital", "Skenario UAT & SLA"],
    bannerGradient: "from-slate-700 to-indigo-900",
    bannerIcon: "building",
    coverImage: "/images/projects/ut-laporan-akhir.png",
    pages: "4 Dokumen • 95+ Hlm",
    documentMeta: {
      docCode: "KOMDIGI-CASE/SMART-SOP-INCIDENT",
      version: "v1.0 (Portofolio Case Study)",
      classification: "Studi Kasus Tata Kelola SOP Digital (Tersanitasi)",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Operasional aplikasi strategis kementerian memerlukan keselarasan prosedur antara tim helpdesk, administrator sistem, dan engineer perbaikan saat terjadi insiden aplikasi agar SLA layanan tidak terlanggar.",
      solution: "Menyusun dokumen Standard Operating Procedure (SOP) digital yang komprehensif, memetakan indikator SLA penanganan insiden, serta menyusun skenario pengujian regresi UAT untuk setiap pembaruan modul.",
      impact: "Meningkatkan kecepatan resolusi tiket penanganan bug sebesar 30% dan menjaga rata-rata ketersediaan sistem (uptime) di atas 99.8%.",
    },
    tableOfContents: [
      { chapter: "Bagian 1: Standard Operating Procedure (SOP) Operasional Sistem SMART", pages: "Hlm 1 - 25" },
      { chapter: "Bagian 2: Matriks Klasifikasi Tingkat Keparahan Insiden & SLA", pages: "Hlm 26 - 45" },
      { chapter: "Bagian 3: Prosedur Pemantauan Server & Pemulihan Layanan (Disaster Recovery)", pages: "Hlm 46 - 70" },
      { chapter: "Bagian 4: Skenario UAT Pengujian Regresi Pembaruan Fitur", pages: "Hlm 71 - 95" },
    ],
    samplePage: {
      chapterNum: "BAGIAN 2 — PENANGANAN TIKET INSIDEN",
      sectionCode: "2.1",
      sectionTitle: "Rekapitulasi Tiket Insiden & Penanganan Bug Sistem SMART",
      pageNumber: "Halaman 34 dari 95",
      intro: "Prosedur penanganan tiket laporan galat dan optimasi fungsional aplikasi SMART berdasarkan matriks eskalasi berjenjang.",
      prerequisites: [
        "Log tiket terdaftar di portal ticketing helpdesk Komdigi.",
        "Tim penguji QA siap melakukan validasi pada lingkungan staging.",
      ],
      stepsTitle: "Prosedur Pengoperasian Bertahap:",
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
          detail: "Meminta konfirmasi penyelesaian tiket dari unit pelapor untuk memastikan modul berjalan normal di produksi.",
        },
      ],
      callout: {
        type: "info",
        title: "PEMANTAUAN KETERSEDIAAN SISTEM (UPTIME)",
        content: "Rata-rata uptime server aplikasi SMART pada periode evaluasi tercatat 99.85%, memenuhi target SLA ketersediaan layanan publik.",
      },
      troubleshooting: [
        { issue: "Lonjakan penggunaan memori pada modul reporting.", cause: "Query agregasi data historis belum terindeks secara optimal.", action: "Menambahkan composite index pada kolom tanggal dan status pada basis data produksi." },
      ],
    },
    detail: {
      scope: "Pengelola Sistem Informasi Komdigi, Tim Helpdesk, & Administrator Database",
      highlights: [
        "Menyajikan dokumen SOP Digital lengkap dengan alur matriks eskalasi.",
        "Menyajikan metrik SLA dan penanganan tiket bug secara akuntabel.",
        "Mendukung pemantauan uptime dan disaster recovery berkala.",
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
      id: "Dokumentasi rekayasa kebutuhan perangkat lunak (SRS), laporan pendahuluan desain arsitektur, laporan akhir, serta dokumen pengujian fungsional modul SIBIJAK Badan Kebijakan Transportasi Kemenhub.",
      en: "Software Requirements Specification (SRS), system architecture inception report, final report, and functional test documents for the Baketrans transport portal.",
    },
    client: "Badan Kebijakan Transportasi (Baketrans) Kemenhub",
    documentBundle: [
      "1. SRS (Software Requirements Specification) SIBIJAK Berstandar IEEE 830",
      "2. Laporan Pendahuluan — Metodologi & Desain Arsitektur Sistem",
      "3. Laporan Akhir — Evaluasi Implementasi & Pengujian Fungsional",
      "4. Dokumen Skenario UAT & Lembar Verifikasi Fungsional",
    ],
    tags: ["Baketrans Kemenhub", "SRS Spesifikasi", "Laporan Siklus Proyek", "Portal Kebijakan"],
    bannerGradient: "from-blue-700 to-slate-900",
    bannerIcon: "workflow",
    coverImage: "/images/projects/sibijak-dashboard.png",
    pages: "4 Dokumen • 210+ Hlm",
    documentMeta: {
      docCode: "BKT-CASE/SIBIJAK-PLD/SRS",
      version: "v2.0 (Portofolio Case Study)",
      classification: "Studi Kasus Rekayasa Kebutuhan Perangkat Lunak (Tersanitasi)",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Perumusan rekomendasi kebijakan transportasi nasional membutuhkan integrasi repositori data dari 4 moda transportasi (darat, laut, udara, perkeretaapian) yang sebelumnya tersebar dan tidak terstandarisasi.",
      solution: "Menyusun dokumen Software Requirements Specification (SRS) berstandar IEEE 830, Laporan Pendahuluan desain arsitektur, dan Laporan Akhir pengujian fungsional modul SIBIJAK pada Portal Layanan dan Data (PLD).",
      impact: "Menyatukan alur analisis data transportasi multimoda dalam satu portal terpadu dan mempercepat penyusunan naskah kebijakan strategis kementerian perhubungan.",
    },
    tableOfContents: [
      { chapter: "Bagian 1: Analisis Kebutuhan Tata Kelola Data Transportasi Multimoda", pages: "Hlm 1 - 32" },
      { chapter: "Bagian 2: Laporan Pendahuluan — Metodologi & Desain Arsitektur", pages: "Hlm 33 - 75" },
      { chapter: "Bagian 3: Software Requirements Specification (SRS) Modul SIBIJAK", pages: "Hlm 76 - 145" },
      { chapter: "Bagian 4: Laporan Akhir — Pengujian Fungsional & Deliverable Sistem", pages: "Hlm 146 - 210" },
    ],
    samplePage: {
      chapterNum: "BAGIAN 3 — SPESIFIKASI KEBUTUHAN PERANGKAT LUNAK (SRS)",
      sectionCode: "3.4",
      sectionTitle: "Kebutuhan Fungsional Modul Analisis Kebijakan Multimoda (REQ-SBJ-04)",
      pageNumber: "Halaman 98 dari 210",
      intro: "Spesifikasi masukan, proses pengolahan algoritma, dan luaran visualisasi grafik pergerakan penumpang dan logistik nasional.",
      prerequisites: [
        "Data pergerakan moda transportasi telah teragregasi di staging data lake.",
        "Pengguna memiliki role 'ANALIS_KEBIJAKAN_BKT'.",
      ],
      stepsTitle: "Prosedur Pengoperasian Bertahap:",
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
          detail: "Menghasilkan naskah ringkasan kebijakan format PDF/Word siap telaah pimpinan badan kebijakan.",
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
      scope: "Pimpinan Badan Kebijakan Transportasi, Analis Kebijakan Transportasi, Tim Data Center Kemenhub",
      highlights: [
        "Siklus lengkap dari Laporan Pendahuluan, SRS IEEE 830, hingga Laporan Akhir.",
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
      id: "INSI-PLANT (Monitoring AMP & Batching Plant)",
      en: "INSI-PLANT Infrastructure Monitoring (PUPR)",
    },
    description: {
      id: "Paket lengkap siklus proyek pengawasan mutu aspal dan beton nasional: Laporan Pendahuluan, Laporan Akhir, dan Buku Manual Penggunaan resmi aplikasi INSI-PLANT Kementerian PUPR.",
      en: "Full project lifecycle for nationwide asphalt & concrete quality monitoring: Inception Report, Final Report, and Official User Manual for PUPR.",
    },
    client: "Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR)",
    documentBundle: [
      "1. Laporan Pendahuluan Sistem Kendali Mutu AMP & BP",
      "2. Laporan Akhir Evaluasi Implementasi Aplikasi INSI-PLANT",
      "3. Buku Manual Penggunaan Resmi Aplikasi INSI-PLANT",
      "4. Dokumen SOP Verifikasi Kelaikan Operasi Alat Lapangan",
    ],
    tags: ["Kementerian PUPR", "INSI-PLANT", "User Manual", "SOP Kendali Mutu", "AMP & Batching Plant"],
    bannerGradient: "from-amber-600 to-orange-800",
    bannerIcon: "workflow",
    coverImage: "/images/projects/insi-plant-cover.png",
    pages: "4 Dokumen • 185+ Hlm",
    documentMeta: {
      docCode: "PUPR-CASE/INSI-PLANT/AMP-BP",
      version: "v3.2 (Portofolio Case Study)",
      classification: "Studi Kasus Buku Panduan Lapangan (Tersanitasi)",
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
      stepsTitle: "Prosedur Pengoperasian Bertahap:",
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
        "Paket lengkap Laporan Pendahuluan, Laporan Akhir, dan Buku Manual Penggunaan.",
        "Mendukung SOP verifikasi kelaikan operasi aspal dan beton jalan nasional.",
        "Dilengkapi panduan penanganan toleransi alat sesuai Spesifikasi Umum Bina Marga.",
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
      id: "Penyusunan Laporan Pendahuluan Si-JACK 2026, dokumen arsitektur modul sistem, serta paket laporan siklus bertahap (Pendahuluan, Antara, Akhir, dan User Manual) untuk ekosistem tata kelola jasa konstruksi nasional.",
      en: "Inception report, system architecture module documentation, and multi-stage lifecycle reports (Inception, Interim, Final, Manual) for the national construction governance platform.",
    },
    client: "Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR)",
    documentBundle: [
      "1. Laporan Pendahuluan Blueprint Sistem SI-JACK & ARUS",
      "2. Dokumen Arsitektur Modul Aplikasi & Integrasi API",
      "3. Laporan Antara & Laporan Akhir Siklus Pengembangan",
      "4. User Manual Panduan Pengguna Ekosistem Jasa Konstruksi",
    ],
    tags: ["Kementerian PUPR", "Si-JACK", "Sistem ARUS", "Arsitektur Modul & SOP", "User Manual"],
    bannerGradient: "from-emerald-700 to-slate-900",
    bannerIcon: "workflow",
    coverImage: "/images/projects/sijack-cover.jpg",
    pages: "4 Dokumen • 250+ Hlm",
    documentMeta: {
      docCode: "PUPR-CASE/SIJACK-ARUS",
      version: "v2026.1 (Portofolio Case Study)",
      classification: "Studi Kasus Laporan & Blueprint Arsitektur (Tersanitasi)",
      effectiveDate: "2026",
    },
    caseStudy: {
      problem: "Pengelolaan data sertifikasi tenaga kerja konstruksi, badan usaha, dan pemantauan rantai pasok material konstruksi nasional (ARUS) membutuhkan kerangka kerja dokumentasi menyeluruh dari fase inisiasi hingga serah terima akhir.",
      solution: "Menyusun Laporan Pendahuluan Si-JACK dengan visualisasi diagram arsitektur modul aplikasi, serta merampungkan paket 4 dokumen sistem ARUS (Laporan Pendahuluan, Antara, Akhir, dan Buku User Manual).",
      impact: "Menyediakan blueprint arsitektur tata kelola rantai pasok jasa konstruksi nasional yang akuntabel dan mudah dipahami seluruh pemangku kepentingan.",
    },
    tableOfContents: [
      { chapter: "Bagian 1: Laporan Pendahuluan Si-JACK — Ruang Lingkup & Roadmap", pages: "Hlm 1 - 42" },
      { chapter: "Bagian 2: Arsitektur Modul Aplikasi & Diagram Alur Data Si-JACK", pages: "Hlm 43 - 70" },
      { chapter: "Bagian 3: Laporan Pendahuluan & Laporan Antara Sistem ARUS", pages: "Hlm 71 - 140" },
      { chapter: "Bagian 4: Laporan Akhir & Hasil Pengujian Integrasi ARUS", pages: "Hlm 141 - 195" },
      { chapter: "Bagian 5: User Manual Panduan Pengguna Sistem ARUS", pages: "Hlm 196 - 250" },
    ],
    samplePage: {
      chapterNum: "BAGIAN 2 — ARSITEKTUR APLIKASI SI-JACK",
      sectionCode: "2.1",
      sectionTitle: "Spesifikasi Arsitektur Modul Aplikasi & Integrasi Gateway Layanan",
      pageNumber: "Halaman 52 dari 250",
      intro: "Penjelasan arsitektur keterhubungan modul portal informasi jasa konstruksi Si-JACK dengan layanan SSO dan basis data referensi sertifikasi badan usaha.",
      prerequisites: [
        "Akun pengguna terdaftar dengan role 'VERIFIKATOR_JASA_KONSTRUKSI'.",
        "Peramban web modern dengan dukungan enkripsi data HTTPS.",
      ],
      stepsTitle: "Prosedur Pengoperasian Bertahap:",
      steps: [
        {
          step: 1,
          action: "Otentikasi Identitas Pengguna",
          detail: "Pengguna melakukan login terpadu menggunakan layanan SSO dengan autentikasi dua faktor (2FA).",
        },
        {
          step: 2,
          action: "Pertukaran Token API Gateway",
          detail: "Gateway memvalidasi JSON Web Token (JWT) dengan masa berlaku sesi maksimal 60 menit.",
        },
        {
          step: 3,
          action: "Query Data Referensi Terenkripsi",
          detail: "Kueri data profil kontraktor dan sertifikasi divalidasi melalui endpoint aman berprotokol TLS 1.3.",
        },
      ],
      callout: {
        type: "info",
        title: "KEAMANAN PERTUKARAN DATA",
        content: "Seluruh komunikasi data antar modul menggunakan enkripsi end-to-end dengan pembatasan kuota (Rate Limiting) untuk mencegah serangan brute force.",
      },
      troubleshooting: [
        { issue: "Token otentikasi kedaluwarsa (401 Unauthorized).", cause: "Sesi pengguna telah melebihi batas 60 menit tanpa aktivitas.", action: "Lakukan login ulang untuk memperbarui token otentikasi sesi." },
      ],
    },
    detail: {
      scope: "Direktorat Jenderal Bina Konstruksi PUPR, Asosiasi Kontraktor, Tenaga Kerja Bersertifikat",
      highlights: [
        "Blueprint arsitektur aplikasi dan alur data terintegrasi.",
        "Paket lengkap Laporan Pendahuluan, Laporan Antara, Laporan Akhir, dan Buku User Manual.",
        "Menjadi acuan perancangan sistem rantai pasok material dan jasa konstruksi nasional.",
      ],
    },
  },
];
'''

with open("data/content.js", "w", encoding="utf-8") as f:
    f.write(content_code)

print("Updated data/content.js with sanitized, NDA-safe, accurate content successfully!")
