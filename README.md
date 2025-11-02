# Porto-My

Porto-My adalah portofolio pribadi saya, Anda dapat melihat portofolio [di sini](https://porto-my.vercel.app/).

## Ikhtisar (Overview)

Ini adalah portofolio pribadi saya, dibangun menggunakan Next.js 13 dengan App Router dan TypeScript. Portofolio ini menampilkan proyek, pengalaman, dan keahlian saya.

Anda juga dapat melihat ikhtisar proyek yang lebih rinci [di sini](./information/overview.md).

### Fitur

-   **App Router**: Menggunakan App Router baru dari Next.js 13 untuk *routing* dan *layout* yang terstruktur.
-   **Dark Mode**: Tombol *toggle* untuk mode terang dan gelap.
-   **Animasi**: Menggunakan `framer-motion` untuk transisi halaman dan animasi komponen.
-   **Konten Dinamis**: Menampilkan proyek dan pengalaman secara dinamis.
-   **Formulir Kontak**: Formulir kontak fungsional dengan validasi sisi klien dan sisi server menggunakan `zod`.

## Struktur Proyek

Proyek ini mengikuti struktur yang direkomendasikan oleh Next.js App Router.

Porto-My/ ├── app/ │ ├── (root)/ # Grup rute untuk halaman utama │ │ ├── projects/ # Halaman daftar & detail proyek │ │ ├── experience/ # Halaman pengalaman (timeline) │ │ ├── skills/ # Halaman keahlian │ │ ├── resume/ # Halaman resume │ │ ├── contact/ # Halaman formulir kontak │ │ └── page.tsx # Halaman beranda │ ├── api/ # Rute API (misal: /api/contact) │ ├── layout.tsx # Root layout │ └── globals.css # File CSS global ├── components/ │ ├── common/ # Komponen umum (Navbar, Footer, dll.) │ ├── forms/ # Komponen formulir (ContactForm) │ ├── ui/ # Komponen UI dari Shadcn (Button, Card, dll.) │ └── ... # Komponen spesifik halaman lainnya ├── config/ # File konfigurasi (data proyek, navigasi, dll.) ├── hooks/ # Kustom React Hooks ├── lib/ # Fungsi utilitas (misal: cn dari clsx) ├── providers/ # Penyedia konteks (Tema, Animasi) └── public/ # Aset statis (gambar, ikon, font)


Anda juga dapat melihat struktur proyek yang lebih rinci [di sini](./information/structure.md).

## Tumpukan Teknologi (Tech Stack)

-   [Next.js](https://nextjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Shadcn/UI](https://ui.shadcn.com/)
-   [Framer Motion](https://www.framer.com/motion/)
-   [React Hook Form](https://react-hook-form.com/)
-   [Zod](https://zod.dev/)
-   [Resend](https://resend.com/)

## Memulai (Getting Started)

Untuk memulai proyek ini, jalankan:

```bash
pnpm install
# or
npm install
# or
yarn install
Selanjutnya, jalankan server pengembangan:

Bash

pnpm dev
# or
npm run dev
# or
yarn dev
Buka http://localhost:3000 dengan browser Anda untuk melihat hasilnya.

Lisensi
Proyek ini dilisensikan di bawah Lisensi MIT.
