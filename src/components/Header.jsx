import { useEffect, useState } from "react";
import { navItems } from "../data/index.js";
import { linkHandler } from "../hooks/useRoute.js";
import SearchOverlay from "./SearchOverlay.jsx";

export default function Header({ path }) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onShortcut = (event) => {
      const key = event.key.toLowerCase();
      const target = event.target;
      const typing =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if ((event.ctrlKey || event.metaKey) && key === "k") {
        event.preventDefault();
        setSearchOpen((value) => !value);
        return;
      }
      if (key === "/" && !typing && !searchOpen) {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onShortcut);
    return () => window.removeEventListener("keydown", onShortcut);
  }, [searchOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a
          className="brand"
          href="/"
          onClick={linkHandler("/")}
          aria-label="İbn-i Sina ana sayfa"
        >
          <svg className="brand__mark" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M20 3 24.5 15.5 37 20 24.5 24.5 20 37 15.5 24.5 3 20 15.5 15.5Z" />
            <circle cx="20" cy="20" r="5.5" />
          </svg>
          <span className="brand__text">
            İbn-i Sina
            <small>Avicenna</small>
          </span>
        </a>

        <nav
          id="site-nav"
          className={`site-nav${open ? " is-open" : ""}`}
          aria-label="Ana menü"
        >
          {navItems.map((item) => {
            const active = path === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={linkHandler(item.path)}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="header-tools">
          <button
            type="button"
            className="search-trigger"
            aria-label="Site içinde ara"
            aria-expanded={searchOpen}
            title="Site içinde ara (Ctrl+K)"
            onClick={() => setSearchOpen(true)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
          </button>

          <button
            type="button"
            className={`nav-toggle${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
