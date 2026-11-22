import { useState } from "react";

export default function Faq({ items, limit }) {
  const [open, setOpen] = useState(0);
  const visible = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <div className="faq">
      {visible.map((item, index) => {
        const isOpen = open === index;
        return (
          <div className={`faq__item${isOpen ? " is-open" : ""}`} key={item.q}>
            <h3>
              <button
                type="button"
                className="faq__q"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <span>{item.q}</span>
                <span className="faq__sign" aria-hidden="true" />
              </button>
            </h3>
            <div className="faq__a">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
