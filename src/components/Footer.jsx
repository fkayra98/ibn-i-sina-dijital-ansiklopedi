import { chapters, navItems, siteMeta } from "../data/index.js";
import { linkHandler } from "../hooks/useRoute.js";
import { Ornament } from "./Blocks.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-brand__kicker">{siteMeta.dates}</span>
          <h2>İbn-i Sina</h2>
          <p className="footer-brand__latin">AVICENNA</p>
          <Ornament />
          <p className="footer-brand__text">
            Buhara'dan Hemedan'a uzanan bir hayat; tıptan metafiziğe uzanan bir bilgi
            sistemi.
          </p>
        </div>

        <nav className="footer-col" aria-label="Bölümler">
          <h3>Bölümler</h3>
          <ul>
            {navItems.slice(1).map((item) => (
              <li key={item.path}>
                <a href={item.path} onClick={linkHandler(item.path)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h3>Kapsam</h3>
          <ul>
            {chapters.map((chapter) => (
              <li key={chapter.id} className="footer-col__muted">
                {chapter.kicker} — {chapter.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-col--note">
          <h3>Not</h3>
          <p>
            Bu site eğitim amacıyla hazırlanmıştır. Tarihî kişilik ve olaylar
            ansiklopedik kaynaklara dayanır; kesinliği tartışmalı noktalar ilgili
            bölümlerde belirtilmiştir.
          </p>
          <p>
            Minyatür ve illüstrasyonlar tarihî belge değil, dönemin görsel dilinden
            esinlenen temsillerdir. Portre galerisindeki üç görsel ise kullanıcı
            tarafından sağlanmış temsilî portrelerdir; orijinal kaynakları
            belgelenmemiştir.
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} İbn-i Sina Dijital Ansiklopedisi</p>
        <p className="footer-bottom__meta">
          Kaynaklar için <a href="/kaynakca" onClick={linkHandler("/kaynakca")}>kaynakça bölümü</a>
        </p>
      </div>
    </footer>
  );
}
