import { useState } from "react";

export function Ornament({ className = "" }) {
  return (
    <svg
      className={`ornament ${className}`}
      viewBox="0 0 120 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2 12h34" />
      <path d="M84 12h34" />
      <path d="M60 2 67 12 60 22 53 12Z" />
      <path d="M46 12h8M66 12h8" />
      <circle cx="60" cy="12" r="2.2" />
    </svg>
  );
}

function Block({ block, index }) {
  switch (block.type) {
    case "p":
      return <p className="prose">{block.text}</p>;

    case "h3":
      return <h3 className="subhead">{block.text}</h3>;

    case "ul":
      return (
        <ul className="prose-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="prose-list prose-list--ordered">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );

    case "note":
      return (
        <aside className="note">
          <span className="note__star" aria-hidden="true">
            ✦
          </span>
          <p>{block.text}</p>
        </aside>
      );

    case "cards":
      return (
        <div className="mini-grid">
          {block.items.map((item, i) => (
            <div className="mini-card" key={i} style={{ "--i": i }}>
              <span className="mini-card__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="table-wrap">
          <table className="archive-table">
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} scope="col">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c} data-label={block.head[c]}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "worksGrid":
      return (
        <div className="book-grid">
          {block.items.map((item) => (
            <article className="book-card" key={item.no}>
              <span className="book-card__num">{item.no}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      );

    case "figure":
      return (
        <figure className="prose-figure">
          <div className="prose-figure__frame">
            <img src={block.src} alt={block.alt} loading="lazy" decoding="async" />
          </div>
          <figcaption>{block.caption}</figcaption>
        </figure>
      );

    case "syllogism":
      return (
        <div className="syllogism" role="group" aria-label="Kıyas örneği">
          <ol>
            {block.premises.map((premise, i) => (
              <li key={i}>{premise}</li>
            ))}
          </ol>
          <p className="syllogism__conclusion">
            <span aria-hidden="true">∴</span> {block.conclusion}
          </p>
        </div>
      );

    case "gallery":
      return (
        <div className="archive-gallery">
          {block.items.map((item) => (
            <figure className="archive-plate" key={item.src}>
              <div className="archive-plate__frame">
                <img src={item.src} alt={item.alt || item.title} loading="lazy" />
              </div>
              <figcaption>
                <span className="archive-plate__meta">{item.meta}</span>
                <span className="archive-plate__title">{item.title}</span>
                <span className="archive-plate__caption">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      );

    case "experiment":
      return <Experiment block={block} />;

    case "part":
      return (
        <header className="part-divider" id={block.id}>
          <span className="part-divider__kicker">{block.kicker}</span>
          <h2>{block.title}</h2>
          <Ornament />
          {block.text ? <p>{block.text}</p> : null}
        </header>
      );

    default:
      return null;
  }
}

function Experiment({ block }) {
  const [off, setOff] = useState([]);
  const allOff = off.length === block.senses.length;

  const toggle = (id) => {
    setOff((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  return (
    <div className={`experiment${allOff ? " is-complete" : ""}`}>
      <div className="experiment__head">
        <span className="experiment__label">Etkileşimli düşünce deneyi</span>
        <h4>{block.title}</h4>
        <p>{block.text}</p>
      </div>

      <div className="experiment__senses">
        {block.senses.map((sense) => {
          const isOff = off.includes(sense.id);
          return (
            <button
              type="button"
              key={sense.id}
              className={`sense${isOff ? " is-off" : ""}`}
              aria-pressed={isOff}
              onClick={() => toggle(sense.id)}
            >
              <span className="sense__dot" aria-hidden="true" />
              <span className="sense__label">{sense.label}</span>
              <span className="sense__detail">{isOff ? "kapalı" : sense.detail}</span>
            </button>
          );
        })}
      </div>

      <div className="experiment__foot">
        <p>{block.conclusion}</p>
        {off.length > 0 ? (
          <button type="button" className="btn btn--ghost btn--tiny" onClick={() => setOff([])}>
            Duyuları geri aç
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default function Blocks({ blocks }) {
  return blocks.map((block, index) => <Block key={index} block={block} index={index} />);
}
