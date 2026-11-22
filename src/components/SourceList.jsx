import Reveal from "./Reveal.jsx";

export default function SourceList({ items }) {
  return (
    <div className="source-list">
      {items.map((source, index) => (
        <Reveal key={source.url} delay={index * 50}>
          <a
            className="source-card"
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="source-card__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="source-card__body">
              <span className="source-card__title">{source.title}</span>
              <span className="source-card__desc">{source.desc}</span>
              <span className="source-card__url">{source.url}</span>
            </span>
            <span className="source-card__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
