Portofolio Pribadi - Rius
Ini adalah kode sumber untuk situs portofolio pribadi saya, yang dibuat untuk menampilkan proyek, pengalaman, dan keahlian saya. Situs ini dirancang dengan desain yang bersih, modern, dan responsif.
Demo Langsung: porto-my.vercel.app
✨ Fitur Utama
•	Desain Modern & Responsif: Dibangun dengan Tailwind CSS untuk tampilan yang optimal di semua perangkat, dari desktop hingga seluler.
•	Mode Terang & Gelap: Tombol untuk beralih tema (light/dark mode) yang preferensinya disimpan di local storage.
•	Animasi Halus: Transisi halaman dan animasi komponen yang elegan menggunakan Framer Motion.
•	Formulir Kontak Fungsional: Halaman kontak dengan formulir yang divalidasi menggunakan react-hook-form dan zod, serta mengirim email melalui API route menggunakan Resend.
•	SEO Optimized: Menyertakan sitemap.ts dan robots.txt untuk optimasi mesin pencari yang lebih baik.
•	Struktur Data Terpisah: Data untuk proyek, pengalaman, dan keahlian disimpan secara terpisah di direktori config/ untuk pengelolaan yang mudah.
🛠️ Teknologi yang Digunakan
Proyek ini dibangun menggunakan tumpukan teknologi modern:
•	Framework: Next.js 14 (menggunakan App Router)
•	Bahasa: TypeScript
•	Styling: Tailwind CSS
•	Komponen UI: Shadcn/ui
•	Animasi: Framer Motion
•	Manajemen Formulir: React Hook Form
•	Validasi Skema: Zod
•	Pengiriman Email: Resend
•	Notifikasi: Sonner (React Toast)
•	Ikon: Lucide React
📂 Struktur Proyek
Proyek ini menggunakan struktur yang terorganisir dengan baik, memisahkan logika, data, dan komponen UI.
/
├── app/
│   ├── (root)/                 # Grup rute utama (layout, halaman)
│   │   ├── projects/
│   │   ├── experience/
│   │   ├── skills/
│   │   ├── contact/
│   │   └── page.tsx            # Halaman utama (Home)
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # API route untuk formulir kontak
│   ├── layout.tsx              # Layout utama
│   └── globals.css             # CSS global
├── components/
│   ├── common/                 # Komponen bersama (Navbar, Footer, dll.)
│   ├── forms/                  # Komponen formulir (ContactForm)
│   ├── ui/                     # Komponen Shadcn/ui
│   └── ...                     # Komponen spesifik halaman
├── config/
│   ├── projects.ts             # Data untuk halaman proyek
│   ├── experience.ts           # Data untuk halaman pengalaman
│   ├── skills.ts               # Data untuk halaman keahlian
│   ├── site.ts                 # Konfigurasi metadata situs
│   └── ...
├── public/
│   └── ...                     # Aset statis (gambar, logo, dll.)
├── providers/
│   ├── animation-provider.tsx  # Provider untuk Framer Motion
│   └── theme-provider.tsx      # Provider untuk mode terang/gelap
├── .env.example                # Contoh file variabel lingkungan
├── next.config.js              # Konfigurasi Next.js
├── tailwind.config.js          # Konfigurasi Tailwind CSS
└── package.json
🚀 Menjalankan Secara Lokal
Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:
1.	Clone Repositori
Bash
git clone https://github.com/username/repo-name.git
cd repo-name
2.	Instal Dependensi Disarankan menggunakan npm:
Bash
npm install
3.	Siapkan Variabel Lingkungan Salin file .env.example menjadi .env.local:
Bash
cp .env.example .env.local
Buka file .env.local dan tambahkan RESEND_API_KEY Anda. Anda bisa mendapatkannya dari situs Resend.
Code snippet
RESEND_API_KEY=re_xxxxxxxxxxxxxxx
4.	Jalankan Server Pengembangan
Bash
npm run dev
5.	Buka Aplikasi Buka http://localhost:3000 di browser Anda.
📄 Lisensi
Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file LICENSE untuk detail lebih lanjut.

