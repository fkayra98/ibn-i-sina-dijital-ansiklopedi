import { useMemo, useState } from "react";

const normalize = (value) =>
  value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");

export default function Glossary({ items }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return items;
    return items.filter(
      (item) =>
        normalize(item.term).includes(q) || normalize(item.def).includes(q)
    );
  }, [items, query]);

  return (
    <div className="glossary">
      <label className="glossary__search">
        <span>Kavram ara</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Örn. mahiyet, sudûr, meyil…"
        />
      </label>

      <p className="glossary__count" role="status" aria-live="polite">
        {filtered.length} kavram
        {query ? ` · "${query}" için` : ""}
      </p>

      <dl className="glossary__list">
        {filtered.map((item) => (
          <div className="glossary__item" key={item.term}>
            <dt>{item.term}</dt>
            <dd>{item.def}</dd>
          </div>
        ))}
      </dl>

      {filtered.length === 0 ? (
        <p className="glossary__empty">
          Bu aramayla eşleşen kavram bulunamadı. Sözlükteki terimlerin bir kısmı
          Arapça kökenlidir; farklı bir yazım deneyin.
        </p>
      ) : null}
    </div>
  );
}
