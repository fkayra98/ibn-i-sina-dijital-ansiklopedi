import { useEffect, useState } from "react";
import { chronology, faq, sources, siteMeta } from "../data/index.js";
import { worksChapter } from "../data/works.js";
import { linkHandler } from "../hooks/useRoute.js";
import { Ornament } from "../components/Blocks.jsx";
import Reveal from "../components/Reveal.jsx";
import Timeline from "../components/Timeline.jsx";
import Faq from "../components/Faq.jsx";

const Icon = ({ name }) => {
  const paths = {
    medicine: (
      <>
        <path d="M9 3h6M10 3v5.4L5.3 17.2A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.2-3.8L14 8.4V3" />
        <path d="M7.2 14.5h9.6" />
      </>
    ),
    philosophy: (
      <>
        <path d="M12 2.6 14.7 9.3 21.4 12 14.7 14.7 12 21.4 9.3 14.7 2.6 12 9.3 9.3Z" />
        <circle cx="12" cy="12" r="2.4" />
      </>
    ),
    math: (
      <>
        <path d="M4 20 12 4l8 16Z" />
        <path d="M8 14h8" />
      </>
    ),
    astronomy: (
      <>
        <path d="M20.2 13.7A8.5 8.5 0 1 1 10.3 3.8a7 7 0 0 0 9.9 9.9Z" />
        <path d="M17.5 3v4M15.5 5h4" />
      </>
    ),
    logic: (
      <>
        <circle cx="12" cy="5.5" r="2.5" />
        <circle cx="6" cy="18.5" r="2.5" />
        <circle cx="18" cy="18.5" r="2.5" />
        <path d="M10.4 7.8 7.4 16M13.6 7.8l3 8.2M8.5 18.5h7" />
      </>
    ),
    psychology: (
      <>
        <path d="M15.8 3.8A6.5 6.5 0 0 0 9 10.3c0 2 .9 3.4 2 4.6V18h4v-2.6" />
        <path d="M8.5 21h7" />
        <path d="M16.5 7.5c1.8 1.4 2.8 3.6 2.8 6.2a8 8 0 0 1-1.4 4.5" />
      </>
    ),
  };

  return (
    <svg className="disc-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

const disciplines = [
  {
    icon: "medicine",
    title: "Tıp",
    text: "Anatomi, teşhis, koruyucu hekimlik ve ilaç bilimi; beş kitaplık el-Kânûn.",
    to: "/tip",
  },
  {
    icon: "philosophy",
    title: "Felsefe",
    text: "Varlık ve mahiyet, zorunlu varlık, ruh ve beden; Uçan Adam deneyi.",
    to: "/felsefe",
  },
  {
    icon: "math",
    title: "Matematik",
    text: "Aritmetik, geometri ve Öklid geleneği; matematiğin bilimler arası yeri.",
    to: "/bilimler#matematik",
  },
  {
    icon: "astronomy",
    title: "Astronomi",
    text: "Batlamyus'un modeli, gözlem araçları ve göksel hareketlerin eleştirisi.",
    to: "/bilimler#astronomi",
  },
  {
    icon: "logic",
    title: "Mantık",
    text: "Kavram, tanım, önerme, kıyas ve kesin bilgiyi amaçlayan burhan.",
    to: "/bilimler#mantik",
  },
  {
    icon: "psychology",
    title: "Psikoloji",
    text: "Dış ve iç duyular, hafıza, hayal gücü ve aklın soyutlama yeteneği.",
    to: "/bilimler#psikoloji",
  },
];

const stats = [
  { value: "980", label: "Efşene'de doğum (civarı)" },
  { value: "1037", label: "Hemedan'da vefat" },
  { value: "5", label: "el-Kânûn fi't-Tıbb'ın kitabı" },
  { value: "≈800", label: "Basit ilaç maddesi" },
];

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setOffset(window.scrollY);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div
          className="hero__bg"
          style={{ transform: `translate3d(0, ${Math.min(offset * 0.28, 260)}px, 0)` }}
        >
          <img
            src="/images/library.jpg"
            alt="Orta Çağ kütüphanesinde el yazmaları arasında çalışan bilginler"
            fetchpriority="high"
          />
        </div>
        <div className="hero__veil" aria-hidden="true" />
        <div className="hero__frame" aria-hidden="true">
          <span /> <span /> <span /> <span />
        </div>

        <div className="container hero__inner">
          <p className="hero__eyebrow">980 — 1037 · Buhara'dan Hemedan'a</p>
          <h1 className="hero__name" id="hero-title">
            İbn-i Sina
          </h1>
          <p className="hero__latin">AVICENNA</p>
          <Ornament className="hero__ornament" />
          <p className="hero__lead">
            Tıbbın, felsefenin ve doğa bilimlerinin kesiştiği yerde duran bir Orta Çağ
            bilgini. Beş kitaplık bir tıp ansiklopedisi, kapsamlı bir metafizik ve
            bin yıl boyunca okunan bir düşünce sistemi.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--gold"
              href="/hayat"
              onClick={linkHandler("/hayat")}
            >
              Hayat hikâyesini keşfet
            </a>
            <a
              className="btn btn--ghost"
              href="/eserler"
              onClick={linkHandler("/eserler")}
            >
              Eserler kataloğu
            </a>
          </div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>Kaydır</span>
          <i />
        </div>
      </section>

      <section className="section section--parchment intro-band" aria-labelledby="intro-title">
        <div className="container intro-grid">
          <Reveal className="intro-copy">
            <span className="kicker">Bölüm I · Giriş</span>
            <h2 id="intro-title">
              Bir hekimin ötesinde: insanı, doğayı ve varlığı birlikte düşünen bir
              sistem
            </h2>
            <p>
              Ebû Ali el-Hüseyin bin Abdullah bin Sina; yalnızca bir hekim ya da
              filozof değildi. İnsan bedeninden evrenin yapısına, matematiksel
              düşünceden insan ruhuna, mantıktan müziğe uzanan geniş bir araştırma
              alanına sahipti.
            </p>
            <p>
              Onu önemli kılan, farklı alanlardaki bilgileri ortak bir düşünce sistemi
              içinde değerlendirmesidir. İnsan bedenini incelerken yalnızca organları
              değil, bedenin işleyişini, psikolojik durumu, beslenmeyi ve çevreyi de
              hesaba kattı; evreni incelerken fizik, matematik ve felsefe arasında
              bağlantılar kurdu.
            </p>
            <ul className="check-list">
              <li>Buhara saray kütüphanesinde başlayan bir okuma tutkusu</li>
              <li>Bîrûnî ile astronomi ve doğa felsefesi tartışmaları</li>
              <li>Hemedan'da vezirlik, İsfahan'da yoğun bilimsel üretim</li>
            </ul>
            <a className="link-arrow" href="/hayat" onClick={linkHandler("/hayat")}>
              Hayatının tamamını okuyun
            </a>
          </Reveal>

          <Reveal className="portrait-card" delay={120}>
            <div className="portrait-card__frame">
              <img
                src="/images/portrait-stamp.webp"
                alt="İbn-i Sina'nın portresini taşıyan İran hatıra pulu"
                loading="lazy"
              />
            </div>
            <p className="portrait-card__caption">
              İran hatıra pulu · “Portrait d’Avicenne” ibareli temsilî görsel
            </p>
          </Reveal>
        </div>

        <div className="container">
          <dl className="stats">
            {stats.map((stat, index) => (
              <Reveal className="stat" key={stat.label} delay={index * 80}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--night" aria-labelledby="atlas-title">
        <div className="container">
          <Reveal className="section-head">
            <span className="kicker">Düşünce atlası</span>
            <h2 id="atlas-title">Altı alan, tek bir bilgi sistemi</h2>
            <p>
              İbn-i Sina'nın eserleri, disiplinleri birbirinden kopuk bölümler olarak
              değil; ortak ilkeler etrafında düzenlenmiş bir bütün olarak sunar.
            </p>
          </Reveal>

          <div className="discipline-grid">
            {disciplines.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <a
                  className="discipline"
                  href={item.to}
                  onClick={linkHandler(item.to)}
                >
                  <Icon name={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="discipline__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="works-title">
        <div className="container">
          <Reveal className="section-head section-head--split">
            <div>
              <span className="kicker">Bölüm XI · Eserler</span>
              <h2 id="works-title">Kütüphanenin ağırlık merkezleri</h2>
            </div>
            <a className="link-arrow" href="/eserler" onClick={linkHandler("/eserler")}>
              Tüm kataloğu görün
            </a>
          </Reveal>

          <div className="featured-grid">
            {worksChapter.featured.map((work, index) => (
              <Reveal key={work.title} delay={index * 100}>
                <article className="work-card">
                  <div className="work-card__media">
                    <img src={work.image} alt="" loading="lazy" />
                    <span className="work-card__field">{work.field}</span>
                  </div>
                  <div className="work-card__body">
                    <h3>{work.title}</h3>
                    <p>{work.text}</p>
                    <span className="work-card__note">{work.note}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--parchment timeline-section" aria-labelledby="timeline-title">
        <div className="container">
          <Reveal className="section-head">
            <span className="kicker">Bölüm XIV · Kronoloji</span>
            <h2 id="timeline-title">Hayat çizgisi</h2>
            <p>
              Tarihler yaklaşık olarak verilmiştir. Bazı olayların kesin tarihleri
              kaynaklara göre değişir; bir döneme tıklayarak ayrıntıyı açabilirsiniz.
            </p>
          </Reveal>

          <Timeline items={chronology} />

          <Reveal className="timeline-footnote">
            <p>
              Kronolojinin tamamı, kaynak değerlendirmesiyle birlikte{" "}
              <a href="/kaynakca#kronoloji" onClick={linkHandler("/kaynakca#kronoloji")}>
                kaynakça bölümünde
              </a>{" "}
              de yer alır.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--void flying-band" aria-labelledby="flying-title">
        <div className="container flying-grid">
          <Reveal className="flying-media">
            <img
              src="/images/flying-man.jpg"
              alt="Karanlık bir boşlukta asılı duran, içinden ışık yayılan bir insan figürü"
              loading="lazy"
            />
            <span className="flying-media__label">Düşünce deneyi</span>
          </Reveal>

          <Reveal className="flying-copy" delay={120}>
            <span className="kicker">Bölüm IV · Felsefe</span>
            <h2 id="flying-title">Uçan Adam</h2>
            <p>
              Hiçbir duyusal bilgiye sahip olmayan bir insan düşünün: görmüyor,
              duymuyor, dokunmuyor, kendi bedenini bile hissetmiyor. İbn-i Sina'ya göre
              bu insan yine de kendi varlığının farkında olur.
            </p>
            <p>
              Böylece insanın kendisini bilmesinin yalnızca bedenini algılamasına bağlı
              olmadığı sonucuna ulaşır. Bu deney, bugün zihin felsefesi ve bilinç
              araştırmalarında tarihsel bir başlangıç noktası olarak incelenir.
            </p>
            <a className="btn btn--outline" href="/felsefe#ucan-adam" onClick={linkHandler("/felsefe#ucan-adam")}>
              Deneyi etkileşimli keşfedin
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <Reveal className="faq-intro">
            <span className="kicker">Bölüm XV · Sorular</span>
            <h2 id="faq-title">Merak edilenler</h2>
            <p>
              İbn-i Sina hakkında en sık sorulan sorular ve kısa cevapları. Tüm sorular
              için kaynakça bölümüne göz atabilirsiniz.
            </p>
            <a className="link-arrow" href="/kaynakca#sss" onClick={linkHandler("/kaynakca#sss")}>
              Tüm soruları görün
            </a>
          </Reveal>
          <Reveal delay={120}>
            <Faq items={faq} limit={5} />
          </Reveal>
        </div>
      </section>

      <section className="section section--closing" aria-labelledby="closing-title">
        <div className="container closing">
          <span className="kicker">Bölüm XVI · Kaynaklar</span>
          <h2 id="closing-title">Bir bin yıllık mirası, kaynaklarıyla birlikte okuyun</h2>
          <p>
            Stanford Encyclopedia of Philosophy, Encyclopaedia Iranica, MacTutor ve
            Library of Congress kayıtları dahil {sources.length} temel başvuru kaynağı;
            ayrıca {faq.length} soru ve kavram sözlüğü.
          </p>
          <a className="btn btn--gold" href="/kaynakca" onClick={linkHandler("/kaynakca")}>
            Kaynakça ve sözlüğe gidin
          </a>
        </div>
      </section>
    </>
  );
}
