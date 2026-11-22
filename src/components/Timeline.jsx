import { useEffect, useRef, useState } from "react";

export default function Timeline({ items }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = rootRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const start = window.innerHeight * 0.75;
      const distance = rect.height;
      const value = (start - rect.top) / distance;
      setProgress(Math.min(1, Math.max(0, value)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="timeline" ref={rootRef}>
      <div className="timeline__rail" aria-hidden="true">
        <span className="timeline__beam" style={{ transform: `scaleY(${progress})` }} />
      </div>

      <ol className="timeline__list">
        {items.map((item, index) => {
          const open = active === index;
          return (
            <li
              key={`${item.date}-${index}`}
              className={`tl-item${open ? " is-open" : ""}`}
            >
              <div className="tl-item__marker" aria-hidden="true">
                <span />
              </div>

              <button
                type="button"
                className="tl-item__trigger"
                aria-expanded={open}
                onClick={() => setActive(open ? -1 : index)}
              >
                <span className="tl-item__date">{item.date}</span>
                <span className="tl-item__body">
                  <span className="tl-item__period">{item.period}</span>
                  <span className="tl-item__title">{item.event}</span>
                  <span className="tl-item__detail">
                    <span>{item.detail}</span>
                  </span>
                </span>
                <span className="tl-item__toggle" aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
