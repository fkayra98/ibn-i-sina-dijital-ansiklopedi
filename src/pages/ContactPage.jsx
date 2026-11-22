import { contactProfile, sources } from "../data/index.js";
import { linkHandler } from "../hooks/useRoute.js";
import { Ornament } from "../components/Blocks.jsx";
import Reveal from "../components/Reveal.jsx";
import SourceList from "../components/SourceList.jsx";

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="3.6" />
    <path d="M4.5 20c1.2-3.6 4-5.4 7.5-5.4s6.3 1.8 7.5 5.4" />
  </svg>
);

const CapIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M2.5 9 12 4.5 21.5 9 12 13.5Z" />
    <path d="M6.5 11v4.2c0 1.6 2.5 3.1 5.5 3.1s5.5-1.5 5.5-3.1V11" />
    <path d="M21 9v5" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="kicker">Bağlantı</span>
          <h1>İletişim ve Künye</h1>
          <p>
            Site hakkında iletişim bilgileri, öğrenim künyesi ve sitenin dayandığı
            akademik kaynaklar.
          </p>
        </div>
      </header>

      <div className="container appendix">
        <section className="contact-section" aria-labelledby="contact-title">
          <Reveal className="section-head">
            <h2 id="contact-title">Bize ulaşın</h2>
            <p>
              Siteyle ilgili görüş, düzeltme ve sorularınız için aşağıdaki kanalları
              kullanabilirsiniz.
            </p>
          </Reveal>

          <div className="contact-grid">
            <Reveal>
              <article className="contact-card">
                <div className="contact-card__seal">
                  <PersonIcon />
                </div>
                <h2>Site İletişim Bilgileri</h2>
                <dl className="contact-rows">
                  <div className="contact-row">
                    <dt>Ad Soyad</dt>
                    <dd>{contactProfile.name}</dd>
                  </div>
                  <div className="contact-row">
                    <dt>Telefon</dt>
                    <dd>
                      <a href={contactProfile.phoneHref}>
                        {contactProfile.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div className="contact-row">
                    <dt>E-posta</dt>
                    <dd>
                      <a href={`mailto:${contactProfile.email}`}>
                        {contactProfile.email}
                      </a>
                    </dd>
                  </div>
                </dl>
                <div className="contact-actions">
                  <a className="btn btn--contact" href={contactProfile.phoneHref}>
                    Telefona Ara
                  </a>
                  <a
                    className="btn btn--contact"
                    href={`mailto:${contactProfile.email}`}
                  >
                    E-posta Gönder
                  </a>
                  <a
                    className="btn btn--contact"
                    href={contactProfile.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram: {contactProfile.instagram.handle}
                  </a>
                </div>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="contact-card">
                <div className="contact-card__seal">
                  <CapIcon />
                </div>
                <h2>Öğrenim Bilgileri</h2>
                <dl className="contact-rows">
                  <div className="contact-row">
                    <dt>Okul</dt>
                    <dd>{contactProfile.school}</dd>
                  </div>
                  <div className="contact-row">
                    <dt>Konum</dt>
                    <dd>{contactProfile.location}</dd>
                  </div>
                </dl>
                <div className="contact-actions">
                  <a
                    className="btn btn--contact"
                    href={contactProfile.schoolSite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Okulun Web Sitesine Git
                  </a>
                  <a
                    className="btn btn--contact"
                    href={contactProfile.schoolInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Okul Instagramı
                  </a>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal className="contact-footnote-wrap">
            <p className="contact-footnote">
              Bu sayfadaki bilgiler site sahibi tarafından sağlanmıştır. Site içinde
              arama yapmak için üst menüdeki büyüteç simgesini veya{" "}
              <kbd>Ctrl</kbd> + <kbd>K</kbd> kısayolunu kullanabilirsiniz.
            </p>
          </Reveal>
        </section>

        <section
          id="kaynakca"
          className="appendix-block contact-sources"
          aria-labelledby="contact-sources-title"
        >
          <Reveal className="section-head">
            <span className="kicker">Bölüm XVI</span>
            <h2 id="contact-sources-title">Kaynakça</h2>
            <p>
              Sitenin içeriği hazırlanırken başvurulan temel akademik kaynaklar. Her
              bağlantı yeni sekmede açılır; ayrıntılı künye için{" "}
              <a className="inline-link" href="/kaynakca" onClick={linkHandler("/kaynakca")}>
                kaynakça sayfasına
              </a>{" "}
              bakabilirsiniz.
            </p>
          </Reveal>

          <SourceList items={sources} />

          <Reveal className="contact-signature">
            <Ornament />
            <p>
              {contactProfile.name} · {contactProfile.school} ·{" "}
              {contactProfile.location}
            </p>
          </Reveal>
        </section>
      </div>
    </>
  );
}
