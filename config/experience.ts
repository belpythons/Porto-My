import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "aslab-stitek",
    position: "Asisten Lab",
    company: "Sekolah Tinggi Teknologi Bontang (STITEK Bontang)",
    location: "Bontang, Indonesia",
    startDate: new Date("2024-09-01"), // Perkiraan Awal Semester Ganjil 2024
    endDate: "Present",
    description: [
      "Bertugas sebagai asisten laboratorium di STITEK Bontang untuk semester ganjil 2024/2025.",
    ],
    achievements: [
      "Membantu mahasiswa dalam pelaksanaan praktikum mata kuliah.",
      "Mengelola dan memastikan kesiapan peralatan laboratorium.",
      "Memberikan bimbingan dan asistensi teknis terkait materi praktikum.",
    ],
    skills: ["Java", "SQL", "C++", "Javascript"], // Sesuaikan dengan skill yang relevan
    companyUrl: "https://stitek.ac.id/",
    logo: "/experience/logo-stitek.jpg", // Ganti dengan path logo STITEK
  },
];