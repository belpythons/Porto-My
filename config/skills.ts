import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

// Ganti 'Icons.code' dengan ikon yang lebih spesifik jika Anda menambahkannya
// di 'components/common/icons.tsx'

export const skillsUnsorted: skillsInterface[] = [
  // Design
  {
    name: "Figma",
    description: "Desain UI/UX dan prototyping aplikasi web dan mobile.",
    rating: 4,
    icon: Icons.media,
  },
  {
    name: "Adobe Illustrator",
    description: "Desain grafis vektor dan aset visual.",
    rating: 3,
    icon: Icons.media,
  },
  {
    name: "Adobe Photoshop",
    description: "Editing gambar dan desain grafis raster.",
    rating: 3,
    icon: Icons.media,
  },

  // Frontend
  {
    name: "HTML 5",
    description: "Struktur fundamental untuk semua aplikasi web.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description: "Styling aplikasi web modern dan desain responsif.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Javascript",
    description: "Bahasa inti untuk interaktivitas web sisi klien.",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "Tailwind CSS",
    description: "Framework CSS utility-first untuk desain cepat.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  {
    name: "Bootstrap",
    description: "Framework CSS untuk pengembangan web responsif.",
    rating: 4,
    icon: Icons.bootstrap,
  },
  {
    name: "React",
    description: "Pelatihan web React.js dan Node.js dengan Express REST API.",
    rating: 2,
    icon: Icons.react,
  },
  {
    name: "Vue.js",
    description: "Digunakan di frontend untuk proyek kolaborasi Mangaphase.",
    rating: 3,
    icon: Icons.javascript,
  },
  
  // Backend & Database
  {
    name: "Node.js",
    description: "Pelatihan backend menggunakan Express.js REST API.",
    rating: 2,
    icon: Icons.nodejs,
  },
  {
    name: "express.js",
    description: "Framework backend untuk Node.js, digunakan dalam pelatihan.",
    rating: 2,
    icon: Icons.express,
  },
  {
    name: "PHP",
    description: "Pengembangan web dinamis PHP native (Proyek PERPUS).",
    rating: 4,
    icon: Icons.nodejs,
  },
  {
    name: "Laravel",
    description: "Backend untuk proyek kolaborasi Mangaphase (rating 1).",
    rating: 1,
    icon: Icons.nestjs,
  },
  {
    name: "Java",
    description: "Bahasa pemrograman fundamental yang dipelajari.",
    rating: 3,
    icon: Icons.javascript,
  },
  {
    name: "C++",
    description: "Pemrograman sistem dan IoT dengan ESP32/Arduino.",
    rating: 3,
    icon: Icons.laptop,
  },
  {
    name: "MySQL",
    description: "Database relasional untuk proyek PHP dan OLW.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "SQLite",
    description: "Database file-based, dipelajari sebagai alternatif SQL.",
    rating: 3,
    icon: Icons.mysql,
  },
  {
    name: "Prisma",
    description: "ORM (Object-Relational Mapping) untuk Node.js.",
    rating: 2,
    icon: Icons.nodejs,
  },

  // Lainnya (MERN)
  // Anda menyebut "MERN stack", jadi saya tambahkan MongoDB & Express (jika belum ada)
  {
    name: "MongoDB",
    description: "Bagian dari MERN stack (NoSQL Database).",
    rating: 2,
    icon: Icons.mongodb,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);