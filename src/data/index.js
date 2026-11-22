import { lifeChapter } from "./life.js";
import { medicineChapter } from "./medicine.js";
import { philosophyChapter } from "./philosophy.js";
import { sciencesChapter } from "./sciences.js";
import { worksChapter } from "./works.js";
import { legacyChapter } from "./legacy.js";

export const chapters = [
  lifeChapter,
  medicineChapter,
  philosophyChapter,
  sciencesChapter,
  worksChapter,
  legacyChapter,
];

export const navItems = [
  { path: "/", label: "Ana Sayfa" },
  ...chapters.map((chapter) => ({ path: chapter.path, label: chapter.nav })),
  { path: "/kaynakca", label: "Kaynakça" },
  { path: "/iletisim", label: "İletişim" },
];

export const siteMeta = {
  name: "İbn-i Sina",
  subtitle: "Hayatı, Bilimi ve Mirası",
  dates: "980 – 1037",
  latin: "Avicenna",
  description:
    "İbn-i Sina'nın hayatı, tıbbı, felsefesi, bilimsel çalışmaları ve dünya bilim tarihine etkisi üzerine kapsamlı dijital ansiklopedi.",
};

export * from "./appendix.js";
export * from "./contact.js";
