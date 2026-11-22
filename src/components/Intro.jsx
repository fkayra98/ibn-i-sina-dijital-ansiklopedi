import { useEffect, useState } from "react";

export default function Intro() {
  const [done, setDone] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      return window.sessionStorage.getItem("sina-intro-seen") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (done) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 500 : 2500;

    const finish = () => {
      setDone(true);
      try {
        window.sessionStorage.setItem("sina-intro-seen", "1");
      } catch {
        /* storage may be unavailable */
      }
    };

    const timer = window.setTimeout(finish, duration);
    window.addEventListener("keydown", finish, { once: true });
    window.addEventListener("pointerdown", finish, { once: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", finish);
      window.removeEventListener("pointerdown", finish);
    };
  }, [done]);

  if (done) return null;

  return (
    <div className="intro" aria-hidden="true">
      <svg className="intro__star" viewBox="0 0 200 200">
        <g className="intro__draw">
          <path d="M100 8 122 78 192 100 122 122 100 192 78 122 8 100 78 78Z" />
          <circle cx="100" cy="100" r="46" />
        </g>
      </svg>
      <p className="intro__name">İbn-i Sina</p>
      <p className="intro__dates">980 — 1037</p>
      <span className="intro__hint">devam etmek için dokunun</span>
    </div>
  );
}
