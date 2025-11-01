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
];

export const featuredProjects = Projects.slice(0, 3);