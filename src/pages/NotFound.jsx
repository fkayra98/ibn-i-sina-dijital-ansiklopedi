import { navItems } from "../data/index.js";
import { linkHandler } from "../hooks/useRoute.js";
import { Ornament } from "../components/Blocks.jsx";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <span className="kicker">404</span>
        <h1>Bu sayfa kütüphanede bulunamadı</h1>
        <Ornament />
        <p>
          Aradığınız bölüm taşınmış veya adresi yanlış yazılmış olabilir. Aşağıdaki
          bölümlerden devam edebilirsiniz.
        </p>
        <div className="notfound__links">
          {navItems.map((item) => (
            <a key={item.path} href={item.path} onClick={linkHandler(item.path)}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
