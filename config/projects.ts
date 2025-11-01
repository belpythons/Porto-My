import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "perpus",
    companyName: "PERPUS - Sistem Manajemen Toko Buku",
    type: "Personal",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Aplikasi web toko buku dengan sistem admin untuk mengelola inventori, transaksi, dan autentikasi pengguna.",
    websiteLink: "https://vigilant-increase-roy.sgp.dom.my.id/",
    githubLink: "https://github.com/belpythons/PERPUS.git",
    techStack: ["PHP", "MySQL", "HTML 5", "CSS 3", "Javascript"],
    startDate: new Date("2024-01-01"), // GANTI TANGGAL INI
    endDate: new Date("2024-03-01"), // GANTI TANGGAL INI
    companyLogoImg: "/projects/perpus/logo.png", // GANTI PATH INI
    pagesInfoArr: [
      {
        title: "Panel Admin",
        description: "Dashboard untuk mengelola buku, kategori, dan transaksi.",
        imgArr: ["/projects/perpus/admin-1.png"], // GANTI PATH INI
      },
      {
        title: "Halaman Pengguna",
        description: "Interface untuk browsing dan pembelian buku oleh pelanggan.",
        imgArr: ["/projects/perpus/user-1.png"], // GANTI PATH INI
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "PERPUS adalah aplikasi web berbasis PHP yang mensimulasikan sistem manajemen toko buku lengkap. Proyek ini dirancang untuk mengelola operasi toko buku secara digital, mulai dari manajemen inventori hingga pemrosesan transaksi.",
      ],
      bullets: [
        "Panel Admin Komprehensif: Dashboard lengkap untuk mengelola buku, kategori, pengguna, dan transaksi penjualan.",
        "Sistem Autentikasi: Sistem login dan registrasi yang aman untuk membedakan akses admin dan pengguna biasa.",
        "Interface Pengguna: Halaman browsing dan pembelian buku yang user-friendly untuk pelanggan.",
        "Integrasi Database: Menggunakan MySQL untuk penyimpanan data yang terstruktur.",
        "Pemrosesan Transaksi Real-time: Sistem checkout dan tracking pesanan.",
      ],
    },
  },
  {
    id: "online-learning",
    companyName: "Online Learning Platform",
    type: "Personal",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Platform pembelajaran online (React/Node) dengan kursus gratis, roadmap karir, dan forum diskusi.",
    websiteLink: "https://online-learning-website-six.vercel.app/",
    githubLink: "https://github.com/belpythons/online-learning-website.git",
    techStack: ["React", "Tailwind CSS", "Node.js", "express.js", "MySQL"],
    startDate: new Date("2024-04-01"), // GANTI TANGGAL INI
    endDate: new Date("2024-06-01"), // GANTI TANGGAL INI
    companyLogoImg: "/projects/olw/logo.png", // GANTI PATH INI
    pagesInfoArr: [
      {
        title: "Halaman Program",
        description: "Katalog lengkap kursus pemrograman dengan search dan filter.",
        imgArr: ["/projects/olw/programs.png"], // GANTI PATH INI
      },
      {
        title: "Documantaries & Articles",
        description: "kumpulan referensi pembelajaran.",
        imgArr: ["/projects/olw/Docs.png"], // GANTI PATH INI
      },
      {
        title: "Forum Diskusi",
        description: "Fitur komunitas untuk tanya jawab tanpa perlu autentikasi.",
        imgArr: ["/projects/olw/forum.png"], // GANTI PATH INI
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Platform pembelajaran online yang terinspirasi dari programmerzamannow.com, menyediakan akses gratis ke lebih dari 10 program pemrograman komprehensif dengan roadmap karir terstruktur. Platform ini dibangun untuk komunitas developer Indonesia dengan pendekatan minimalis dan user-friendly.",
      ],
      bullets: [
        "Menyediakan 10+ kursus pemrograman komprehensif gratis dengan materi terstruktur.",
        "Fitur Roadmap Karir dengan learning path berorientasi karir dan panduan step-by-step.",
        "Sistem tracking progress berbasis local storage dan sertifikat digital gratis.",
        "Forum diskusi komunitas (Q&A) tanpa memerlukan autentikasi (guest system).",
        "UI/UX Modern dengan mobile-first responsive design menggunakan Tailwind CSS.",
      ],
    },
  },
  {
    id: "react-calculator",
    companyName: "React Calculator (OOP Approach)",
    type: "Personal",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Aplikasi kalkulator modern menggunakan React dengan pendekatan Object-Oriented Programming (OOP).",
    websiteLink: "https://react-calc-ten.vercel.app/",
    githubLink: "https://github.com/belpythons/React-Calc.git",
    techStack: ["React", "Javascript", "HTML 5", "CSS 3"],
    startDate: new Date("2024-07-01"), // GANTI TANGGAL INI
    endDate: new Date("2024-07-15"), // GANTI TANGGAL INI
    companyLogoImg: "/projects/react-calc/logo.png", // GANTI PATH INI
    pagesInfoArr: [
      {
        title: "Kalkulator",
        description: "Interface kalkulator yang fungsional dan responsif.",
        imgArr: ["/projects/react-calc/calc.png"], // GANTI PATH INI
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Kalkulator sederhana yang dibangun dengan React menggunakan pendekatan Object-Oriented Programming pada struktur kode. Proyek ini berfokus pada penerapan prinsip OOP dalam ekosistem React dan praktik penggunaan modern tooling seperti Vite dan ESLint.",
      ],
      bullets: [
        "Implementasi operasi aritmetika dasar dengan input multi-digit.",
        "Penerapan prinsip OOP (Separation of Concerns, Single Responsibility) dalam React.",
        "Logika kalkulasi dipisahkan ke module/class tersendiri (Calculator Service).",
        "Error handling untuk pembagian dengan nol dan input tidak valid.",
        "Dibangun menggunakan Vite dan ESlint untuk code quality.",
      ],
    },
  },
  {
    id: "form-peminjaman",
    companyName: "Generator Surat Peminjaman STITEK",
    type: "Personal", // Ubah ke "Professional" jika ini tugas resmi
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Aplikasi web (Vanilla JS) untuk generate surat peminjaman alat dan reservasi ruangan STITEK Bontang.",
    websiteLink: "https://form-peminjaman-woad.vercel.app/",
    githubLink: "https://github.com/belpythons/form-peminjaman.git",
    techStack: ["HTML 5", "Tailwind CSS", "Javascript"],
    startDate: new Date("2024-08-01"), // GANTI TANGGAL INI
    endDate: new Date("2024-08-15"), // GANTI TANGGAL INI
    companyLogoImg: "/projects/form-stitek/logo.png", // GANTI PATH INI
    pagesInfoArr: [
      {
        title: "Formulir Peminjaman",
        description: "Form dinamis untuk mengisi data peminjaman.",
        imgArr: ["/projects/form-stitek/form.png"], // GANTI PATH INI
      },
      {
        title: "Preview Surat",
        description: "Preview surat real-time yang siap cetak ke PDF.",
        imgArr: ["/projects/form-stitek/preview.png"], // GANTI PATH INI
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Aplikasi web sederhana namun powerful untuk membantu sivitas akademika STITEK Bontang dalam membuat surat peminjaman alat dan reservasi ruangan secara otomatis. Sistem ini menghilangkan kebutuhan menulis surat manual dan memastikan format yang konsisten dan standar.",
      ],
      bullets: [
        "Form dinamis yang menyesuaikan berdasarkan jenis peminjam (Ormawa, Mahasiswa, Dosen).",
        "Preview surat otomatis di panel sebelah kanan dengan update real-time.",
        "Manajemen item alat yang dinamis (tambah/hapus alat).",
        "Fitur 'Cetak Surat' untuk generate PDF dengan format resmi.",
        "Aplikasi murni frontend (Vanilla JS & Tailwind) tanpa backend.",
      ],
    },
  },
  {
    id: "esp32-monitor",
    companyName: "ESP32 Temperature & Humidity Monitor",
    type: "Personal",
    category: ["IoT", "Web Dev"],
    shortDescription:
      "Sistem monitoring suhu dan kelembaban real-time menggunakan ESP32 dan sensor DHT22 dengan web server terintegrasi.",
    websiteLink: "https://wokwi.com/projects/446151842311108609",
    githubLink: "https://github.com/belpythons/esp32-sensor-suhu.git",
    techStack: ["C++", "HTML 5", "Arduino"],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-09-15"),
    companyLogoImg: "/projects/esp32/logo.png",
    pagesInfoArr: [
      {
        title: "Simulasi Wokwi",
        description: "Simulasi sirkuit dan web server interface.",
        imgArr: ["/projects/esp32/wokwi.png"], // GANTI PATH INI
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Sistem IoT komprehensif yang menggabungkan pemrograman embedded systems dengan web development. Menggunakan ESP32 sebagai mikrokontroler utama dengan sensor DHT22 untuk monitoring lingkungan, sistem ini mendemonstrasikan implementasi full-stack IoT dengan web server terintegrasi dan interface monitoring real-time yang user-friendly.",
        "Proyek ini menerapkan praktik-praktik terbaik dalam embedded programming seperti interrupt handling, memory management, dan optimisasi performa untuk perangkat dengan resource terbatas. Penggunaan Arduino framework mempermudah development sambil tetap mempertahankan kontrol low-level yang diperlukan untuk IoT devices."
      ],
      bullets: [
        "Implementasi embedded system dengan ESP32 dan sensor DHT22 menggunakan Arduino framework dan C++.",
        "Pengembangan web server asynchronous pada ESP32 dengan AsyncWebServer library.",
        "Interface web responsif dengan auto-refresh untuk monitoring real-time.",
        "Implementasi WiFi connection manager dengan fallback ke mode AP jika koneksi gagal.",
        "Fitur kalibrasi sensor dan error handling untuk pembacaan data yang tidak valid.",
        "Simulasi lengkap di Wokwi dengan emulasi hardware dan jaringan.",
      ],
    },
  },
  {
    id: "medduler-design-thinking",
    companyName: "Medduler - Desain Aplikasi Penjadwalan Kesehatan Lansia",
    type: "Professional", // Sesuai permintaan Anda (Proyek UAS)
    category: ["Figma", "Design Thinking", "Human-Centered Design", "User Research", "Prototyping"],
    shortDescription:
      "Aplikasi penjadwalan kesehatan berbasis mobile yang membantu lansia mengelola jadwal konsultasi dokter dan pengingat minum obat secara mandiri dengan antarmuka yang ramah pengguna.",
    websiteLink: "https://www.figma.com/proto/yDVsD36kDRfYLDDYfL5ccK/Untitled?node-id=123-2045&t=a1B1rzre0N76rSTz-1",
    githubLink: "https://www.figma.com/design/yDVsD36kDRfYLDDYfL5ccK/Untitled?node-id=72-10&t=vFO3wN963CaYkNRQ-1", // Link ke file desain Figma
    techStack: ["UI/UX Design", "Mobile App Design", "Health Tech", "Figma"],
    startDate: new Date("2024-10-24"),
    endDate: new Date("2024-12-11"),
    companyLogoImg: "/projects/meduller/logo.png",
    pagesInfoArr: [
      {
        title: "High-Fidelity Prototype", // GANTI JUDUL INI
        description: "Contoh tampilan antarmuka aplikasi Medduler.", // GANTI DESKRIPSI INI
        imgArr: ["/projects/meduller/gambar-1.png"], // GANTI PATH INI
      },
      {
        title: "User Research (Persona)", // GANTI JUDUL INI
        description: "Contoh persona pengguna yang dikembangkan selama riset.", // GANTI DESKRIPSI INI
        imgArr: ["/projects/meduller/gambar-2.png"], // GANTI PATH INI
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Medduler adalah solusi digital untuk pengelolaan kesehatan lansia yang dirancang melalui pendekatan Human-Centered Design. Aplikasi ini lahir dari penelitian mendalam terhadap tantangan yang dihadapi lansia dalam mengingat jadwal kesehatan, keterbatasan mereka dengan teknologi, dan kebutuhan akan motivasi berkelanjutan.",
        "Sebagai UI/UX Designer, saya bertanggung jawab dalam seluruh proses desain mulai dari riset pengguna (empathy mapping, persona creation, customer journey mapping), definisi masalah (How Might We, POV template), ideasi menggunakan SCAMPER method, hingga pembuatan prototype low-fidelity dan high-fidelity menggunakan Figma.",
        "Proyek ini berfokus pada penciptaan pengalaman pengguna yang inklusif dengan mempertimbangkan keterbatasan fisik dan teknologi lansia. Desain antarmuka menggunakan font besar (Roboto dan Poppins), warna kontras (#F69DC9 pink dan #4CB8FF biru muda), navigasi sederhana, dan sistem pengingat yang personal. Aplikasi ini juga dilengkapi fitur motivasi berupa badge kesehatan, timeline aktivitas, artikel edukasi, dan integrasi dengan layanan BPJS untuk kemudahan administrasi medis."
      ],
      bullets: [
        "Melakukan riset pengguna komprehensif dengan metode observasi langsung, wawancara semi-terstruktur, dan pembuatan 2 persona utama (Nenek Nurbaidah dan Kakek Hasan) untuk memahami kebutuhan dan tantangan lansia dalam mengelola kesehatan.",
        "Mengimplementasikan Human-Centered Design melalui 5 tahap (Empathy, Define, Ideate, Prototype, Test) dengan menggunakan tools seperti Empathy Map, Customer Journey Map, How Might We Questions, dan SCAMPER Method.",
        "Merancang antarmuka ramah lansia dengan fokus pada aksesibilitas: font besar, kontras warna tinggi, navigasi intuitif, dan ikon visual yang jelas untuk mengatasi keterbatasan teknologi pengguna.",
        "Mengembangkan 8 fitur utama termasuk kalender digital dengan notifikasi otomatis, sistem badge penghargaan, timeline kesehatan, artikel edukasi, pencarian dokter/obat, dan integrasi BPJS.",
        "Melakukan user testing dengan target pengguna (lansia) untuk validasi desain dan iterasi berdasarkan feedback, memastikan aplikasi benar-benar mudah digunakan dan sesuai kebutuhan mereka."
      ],
    },
  }, 
  {
    id: "desain-asteric-branding",
    companyName: "Desain Branding Toko Motor Listrik Asteric",
    type: "Professional", // Proyek UJK BNSP
    category: ["Desain Grafis", "Branding", "Desain Promosi"],
    shortDescription:
      "Mengembangkan identitas visual lengkap untuk Toko Motor Listrik Asteric, termasuk logo, flyer promosi, dan desain merchandise untuk memperkuat branding.",
    websiteLink: "https://drive.google.com/file/d/1ci9rO9Emh4iSldGYCtxxsTl_ivFXoSY2/view", // Link Flyer
    githubLink: "https://drive.google.com/file/d/1O1OTOynEEAOfIQzJx7UP10IJr_xoFKYS/view", // Link Guidelines
    techStack: ["Adobe Illustrator", "Adobe Photoshop"],
    startDate: new Date("2024-09-30"),
    endDate: new Date("2024-10-07"),
    companyLogoImg: "/projects/asteric/logo.png",
    pagesInfoArr: [
      {
        title: "Mockup Merchandise",
        description: "Mockup realistis untuk kaos, topi, dan goodie bag.",
        imgArr: ["/projects/asteric/gambar-1.png"], // GANTI PATH INI
      },
      {
        title: "Flyer Promosi A5",
        description: "Desain flyer promosi dua sisi (bolak-balik).",
        imgArr: ["/projects/asteric/gambar-2.png"], // GANTI PATH INI
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Proyek ini bertujuan untuk membangun identitas visual (brand identity) yang kuat bagi Toko Motor Listrik Asteric, sebuah brand yang berfokus pada mobilitas modern dan ramah lingkungan. Klien membutuhkan satu set aset desain yang kohesif untuk peluncuran brand, mencakup logo, materi promosi, dan merchandise.",
        "Peran saya sebagai desainer grafis adalah menerjemahkan design brief menjadi aset visual yang fungsional dan menarik. Tanggung jawab saya meliputi riset visual, pengembangan konsep logo, desain flyer promosi dua sisi (A5), serta pembuatan mockup merchandise (kaos, topi, goodie bag) yang siap digunakan untuk kebutuhan branding digital dan cetak."
      ],
      bullets: [
        "Mendesain logo utama yang secara filosofis menggabungkan ikon baterai (mewakili sumber energi listrik dan efisiensi) dan gear (mewakili roda/mekanisme motor), untuk menciptakan simbol modern yang berfokus pada inovasi dan teknologi.",
        "Mengimplementasikan palet warna yang ditentukan (Biru Tua, Kuning-Oranye, Perak) dan gaya desain minimalis untuk mencerminkan pesan kunci 'Energi Bersih & Gaya Modern' sesuai arahan brief.",
        "Menghasilkan deliverables lengkap sesuai permintaan klien, termasuk logo dalam format vektor/raster, flyer promosi A5 bolak-balik, dan mockup realistis untuk berbagai merchandise (kaos, topi, goodie bag)."
      ],
    },
  }, 
];

export const featuredProjects = Projects.slice(0, 3);
