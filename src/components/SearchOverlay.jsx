import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { navigate } from "../hooks/useRoute.js";
import { searchSite } from "../lib/search.js";

const quickLinks = [
  { path: "/hayat", label: "Hayatı" },
  { path: "/tip", label: "Tıp" },
  { path: "/felsefe", label: "Felsefe" },
  { path: "/bilimler", label: "Bilimler" },
  { path: "/eserler", label: "Eserler" },
  { path: "/kaynakca", label: "Kaynakça" },
  { path: "/iletisim", label: "İletişim" },
];

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const activeRef = useRef(null);

  const results = useMemo(() => searchSite(query), [query]);

  useEffect(() => {
    if (!open) return undefined;
    setQuery("");
    setActive(0);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  const go = (path) => {
    onClose();
    navigate(path);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((current) => Math.min(current + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((current) => Math.max(current - 1, 0));
    } else if (event.key === "Enter" && results[active]) {
      event.preventDefault();
      go(results[active].path);
    }
  };

  const trimmed = query.trim();
  const showResults = trimmed.length >= 2;

  return createPortal(
    <div
      className="search-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="search-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site içi arama"
      >
        <div className="search-panel__bar">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4.5 4.5" />
          </svg>
          <input
            ref={inputRef}
            className="search-panel__input"
            type="search"
            value={query}
            placeholder="Site içinde ara: kavram, bölüm, eser, soru…"
            aria-label="Site içinde ara"
            aria-controls="search-results"
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            onKeyDown={handleKeyDown}
          />
          <button
            type="button"
            className="search-panel__close"
            onClick={onClose}
            aria-label="Aramayı kapat"
          >
            Esc
          </button>
        </div>

        <div className="search-panel__body">
          {!showResults ? (
            <>
              <div className="search-quick">
                <span className="search-quick__label">Hızlı erişim</span>
                <div className="search-quick__list">
                  {quickLinks.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(event) => {
                        event.preventDefault();
                        go(item.path);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              <p className="search-hint">
                {trimmed.length === 1
                  ? "Aramak için en az 2 karakter yazın."
                  : "Bölümler, eserler, kavramlar, sorular ve kaynaklar arasında arama yapın. ↑ ↓ ile gezin, Enter ile açın."}
              </p>
            </>
          ) : (
            <>
              <p className="search-meta" role="status" aria-live="polite">
                {results.length > 0
                  ? `${results.length} sonuç bulundu`
                  : `“${trimmed}” için sonuç bulunamadı`}
              </p>

              {results.length > 0 ? (
                <ul className="search-results" id="search-results">
                  {results.map((item, index) => (
                    <li key={item.key}>
                      <a
                        ref={index === active ? activeRef : null}
                        href={item.path}
                        className={`search-result${index === active ? " is-active" : ""}`}
                        onClick={(event) => {
                          event.preventDefault();
                          go(item.path);
                        }}
                        onMouseEnter={() => setActive(index)}
                      >
                        <span className="search-result__context">{item.context}</span>
                        <span className="search-result__title">{item.title}</span>
                        {item.snippet ? (
                          <span className="search-result__snippet">{item.snippet}</span>
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="search-empty">
                  <p>
                    Farklı bir sözcük deneyin. Arapça kökenli terimlerde Türkçe
                    karşılıkları da indekslenmiştir; örneğin “mahiyet”, “sudûr”,
                    “meyil”.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
