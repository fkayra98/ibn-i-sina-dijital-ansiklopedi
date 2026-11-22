import { chronology, faq, glossary, sources } from "../data/index.js";
import { linkHandler } from "../hooks/useRoute.js";
import { Ornament } from "../components/Blocks.jsx";
import Reveal from "../components/Reveal.jsx";
import Timeline from "../components/Timeline.jsx";
import Faq from "../components/Faq.jsx";
import Glossary from "../components/Glossary.jsx";
import SourceList from "../components/SourceList.jsx";

export default function AppendixPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="kicker">Bölüm XIV – XVI</span>
          <h1>Kronoloji, Sözlük ve Kaynakça</h1>
          <p>
            İbn-i Sina'nın hayatındaki dönüm noktaları, sıkça sorulan sorular, temel
            kavramlar ve akademik başvuru kaynakları.
          </p>
        </div>
      </header>

      <div className="container appendix">
        <section id="kronoloji" className="appendix-block" aria-labelledby="kronoloji-title">
          <Reveal className="section-head">
            <span className="kicker">Bölüm XIV</span>
            <h2 id="kronoloji-title">Tarihsel kronoloji</h2>
            <p>
              Tarihler yaklaşık olarak verilmiştir. Bazı olayların kesin tarihleri
              kaynaklara göre değişmektedir.
            </p>
          </Reveal>
          <Timeline items={chronology} />
        </section>

        <section id="sss" className="appendix-block" aria-labelledby="sss-title">
          <Reveal className="section-head">
            <span className="kicker">Bölüm XV</span>
            <h2 id="sss-title">Sıkça sorulan sorular</h2>
            <p>Kısa ve doğrudan cevaplarla temel sorular.</p>
          </Reveal>
          <Reveal>
            <Faq items={faq} />
          </Reveal>
        </section>

        <section id="sozluk" className="appendix-block" aria-labelledby="sozluk-title">
          <Reveal className="section-head">
            <span className="kicker">Bölüm XV</span>
            <h2 id="sozluk-title">Bilimsel kavramlar sözlüğü</h2>
            <p>
              Metinlerde geçen temel kavramlar. Arama alanına terim veya açıklama
              yazarak filtreleyebilirsiniz.
            </p>
          </Reveal>
          <Reveal>
            <Glossary items={glossary} />
          </Reveal>
        </section>

        <section id="kaynaklar" className="appendix-block" aria-labelledby="kaynaklar-title">
          <Reveal className="section-head">
            <span className="kicker">Bölüm XVI</span>
            <h2 id="kaynaklar-title">Kaynakça ve akademik araştırma merkezi</h2>
            <p>
              Sitenin içeriği hazırlanırken başvurulan temel akademik kaynaklar. Her
              bağlantı yeni sekmede açılır.
            </p>
          </Reveal>

          <SourceList items={sources} />

          <Reveal className="appendix-note">
            <h3>Yöntem ve sınırlar</h3>
            <p>
              Bu dijital ansiklopedi, İbn-i Sina hakkındaki yaygın akademik anlatıyı
              öğretici bir bütün hâlinde sunmayı amaçlar. Tarihî kişiliğin kesin
              ayrıntıları, eserlerin yazarlığı ve bazı olayların tarihleri konusunda
              kaynaklar arasında farklılıklar bulunmaktadır; bu noktalar ilgili
              bölümlerde belirtilmiştir.
            </p>
            <p>
              Sitedeki minyatür ve illüstrasyonlar tarihî belge değildir; dönemin görsel
              dilinden esinlenerek üretilmiş temsillerdir. “Görsel arşiv” bölümündeki
              renkli portre, hatıra pulu ve gravür ise kullanıcı tarafından sağlanmış
              temsilî görsellerdir; orijinal kaynakları ve sanatçıları bu proje
              kapsamında belgelenmemiştir. Tıbbi içerikler tarihsel bilgi amaçlıdır ve
              güncel tıbbi tavsiye niteliği taşımaz.
            </p>
            <Ornament />
            <a className="link-arrow" href="/" onClick={linkHandler("/")}>
              Ana sayfaya dönün
            </a>
          </Reveal>
        </section>
      </div>
    </>
  );
}
