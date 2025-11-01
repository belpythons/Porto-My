export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "base-web",
    contibutionDescription:
      "Berkolaborasi di website baca manga (Laravel, Vue.js, Express, Redis).",
    repoOwner: "mangaphase",
    link: "https://github.com/mangaphase/base-web",
  },
  {
    repo: "course-program",
    contibutionDescription:
      "Berkolaborasi di website daftar kursus online Suvi Training Program.",
    repoOwner: "suvi-course-program",
    link: "https://github.com/suvi-course-program/course-program",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);