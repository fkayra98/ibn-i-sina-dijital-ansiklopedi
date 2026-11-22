import {
  chapters,
  chronology,
  faq,
  glossary,
  sources,
} from "../data/index.js";
import { worksChapter } from "../data/works.js";

const normalize = (value = "") =>
  String(value)
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/â/g, "a")
    .replace(/î/g, "i")
    .replace(/û/g, "u");

function blockText(block) {
  switch (block.type) {
    case "p":
    case "h3":
    case "note":
      return block.text || "";
    case "ul":
    case "ol":
      return (block.items || []).join(" ");
    case "cards":
    case "worksGrid":
      return (block.items || [])
        .map((item) => `${item.title} ${item.text}`)
        .join(" ");
    case "table":
      return (block.rows || []).flat().join(" ");
    case "figure":
      return block.caption || "";
    case "experiment":
      return [
        block.title,
        block.text,
        block.conclusion,
        ...(block.senses || []).map((sense) => `${sense.label} ${sense.detail}`),
      ]
        .filter(Boolean)
        .join(" ");
    case "syllogism":
      return [...(block.premises || []), block.conclusion].filter(Boolean).join(" ");
    case "gallery":
      return (block.items || [])
        .map((item) => `${item.title} ${item.meta} ${item.caption}`)
        .join(" ");
    case "part":
      return [block.title, block.text].filter(Boolean).join(" ");
    default:
      return "";
  }
}

const clean = (value) => String(value).replace(/\s+/g, " ").trim();

const entries = [];

chapters.forEach((chapter) => {
  chapter.sections.forEach((section, index) => {
    const isPart = section.type === "part";
    entries.push({
      type: isPart ? "Bölüm girişi" : "Bölüm",
      title: section.title,
      context: `${chapter.kicker} · ${chapter.title}`,
      path: `${chapter.path}${section.id ? `#${section.id}` : ""}`,
      text: clean(
        isPart
          ? section.text || ""
          : (section.blocks || []).map(blockText).join(" ")
      ),
      key: `${chapter.id}-${section.id || index}`,
    });
  });
});

worksChapter.featured.forEach((work, index) => {
  entries.push({
    type: "Eser",
    title: work.title,
    context: `Eserler · ${work.field}`,
    path: "/eserler",
    text: clean(`${work.text} ${work.note}`),
    key: `featured-${index}`,
  });
});

const catalogue = worksChapter.sections.find((section) => section.id === "katalog");
const catalogueTable = catalogue?.blocks.find((block) => block.type === "table");
(catalogueTable?.rows || []).forEach((row, index) => {
  entries.push({
    type: "Eser",
    title: row[0],
    context: `Eserler · ${row[1]}`,
    path: "/eserler#katalog",
    text: clean(row[2]),
    key: `catalogue-${index}`,
  });
});

chronology.forEach((item, index) => {
  entries.push({
    type: "Kronoloji",
    title: `${item.date} — ${item.event}`,
    context: `Kronoloji · ${item.period}`,
    path: "/kaynakca#kronoloji",
    text: clean(item.detail),
    key: `chronology-${index}`,
  });
});

faq.forEach((item, index) => {
  entries.push({
    type: "Sıkça sorulan soru",
    title: item.q,
    context: "Kaynakça · SSS",
    path: "/kaynakca#sss",
    text: clean(item.a),
    key: `faq-${index}`,
  });
});

glossary.forEach((item, index) => {
  entries.push({
    type: "Kavram",
    title: item.term,
    context: "Kaynakça · Sözlük",
    path: "/kaynakca#sozluk",
    text: clean(item.def),
    key: `glossary-${index}`,
  });
});

sources.forEach((item, index) => {
  entries.push({
    type: "Kaynak",
    title: item.title,
    context: "Kaynakça",
    path: "/kaynakca#kaynaklar",
    text: clean(item.desc),
    key: `source-${index}`,
  });
});

[
  {
    type: "Sayfa",
    title: "Ana Sayfa",
    context: "İbn-i Sina",
    path: "/",
    text: "İbn-i Sina hayatı bilimi mirası dijital ansiklopedi giriş",
    key: "page-home",
  },
  {
    type: "Sayfa",
    title: "Kronoloji, Sözlük ve Kaynakça",
    context: "Bölüm XIV – XVI",
    path: "/kaynakca",
    text: "kronoloji sıkça sorulan sorular sözlük kaynakça akademik kaynaklar",
    key: "page-appendix",
  },
  {
    type: "Sayfa",
    title: "İletişim ve Künye",
    context: "Site",
    path: "/iletisim",
    text: "iletişim künye Furkan Kayra KILAVUZ Ömer-Emine Akın Anadolu Lisesi Yahyalı Kayseri kaynakça",
    key: "page-contact",
  },
].forEach((entry) => entries.push(entry));

export const searchIndex = entries.map((entry) => ({
  ...entry,
  titleNorm: normalize(entry.title),
  haystack: normalize(`${entry.title} ${entry.context} ${entry.text}`),
}));

function makeSnippet(entry, term) {
  const text = entry.normalizedText;
  const index = text.indexOf(term);
  if (index === -1) {
    return entry.text.length > 190 ? `${entry.text.slice(0, 190)}…` : entry.text;
  }
  const start = Math.max(0, index - 70);
  const end = Math.min(entry.text.length, index + term.length + 110);
  return `${start > 0 ? "…" : ""}${entry.text.slice(start, end)}${
    end < entry.text.length ? "…" : ""
  }`;
}

export function searchSite(query, limit = 24) {
  const normalizedQuery = normalize(query.trim());
  if (normalizedQuery.length < 2) return [];

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  return searchIndex
    .map((entry) => {
      let score = 0;
      for (const term of terms) {
        const index = entry.haystack.indexOf(term);
        if (index === -1) return null;
        score += entry.titleNorm.includes(term) ? 8 : 1;
        if (index < 60) score += 1;
      }
      if (entry.titleNorm.startsWith(normalizedQuery)) score += 8;
      return { entry, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ entry }) => ({
      ...entry,
      snippet: makeSnippet(
        { ...entry, normalizedText: normalize(entry.text) },
        terms[0]
      ),
    }));
}
