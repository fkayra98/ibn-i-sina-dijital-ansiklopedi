import { chapters, siteMeta } from "../data/index.js";
import { linkHandler } from "../hooks/useRoute.js";
import Blocks, { Ornament } from "../components/Blocks.jsx";
import Reveal from "../components/Reveal.jsx";

export default function ChapterPage({ chapter }) {
  const index = chapters.findIndex((item) => item.id === chapter.id);
  const previous = chapters[index - 1];
  const next = chapters[index + 1];
  const toc = chapter.sections.filter((section) => section.id);

  const scrollTo = (event, id) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState({}, "", `#${id}`);
    }
  };

  return (
    <>
      <header className="chapter-hero">
        <div className="chapter-hero__bg">
          <img src={chapter.hero} alt="" fetchpriority="high" />
        </div>
        <div className="chapter-hero__veil" aria-hidden="true" />
        <div className="container chapter-hero__inner">
          <span className="kicker">{chapter.kicker}</span>
          <h1>{chapter.title}</h1>
          <p className="chapter-hero__subtitle">{chapter.subtitle}</p>
        </div>
      </header>

      <div className="container chapter-lead">
        <Reveal>
          <p>{chapter.lead}</p>
        </Reveal>
      </div>

      <div className="container chapter-layout">
        <aside className="chapter-toc" aria-label="Bölüm içindekiler">
          <div className="chapter-toc__sticky">
            <span className="chapter-toc__label">İçindekiler</span>
            <ol>
              {toc.map((section) => (
                <li key={section.id} className={section.num ? undefined : "is-part"}>
                  <a href={`#${section.id}`} onClick={(event) => scrollTo(event, section.id)}>
                    {section.num ? (
                      <>
                        <span>{section.num}</span>
                        {section.title}
                      </>
                    ) : (
                      section.title
                    )}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <div className="chapter-body">
          {chapter.sections.map((section, i) =>
            section.type === "part" ? (
              <Reveal key={`part-${i}`} className="part-wrap">
                <Blocks blocks={[section]} />
              </Reveal>
            ) : (
              <Reveal
                as="section"
                key={section.id || i}
                id={section.id}
                className="content-section"
              >
                <header
                  className={`content-section__head${
                    section.num ? "" : " is-unnumbered"
                  }`}
                >
                  {section.num ? (
                    <span className="content-section__num">{section.num}</span>
                  ) : null}
                  <h2>{section.title}</h2>
                  <Ornament />
                </header>
                <Blocks blocks={section.blocks} />
              </Reveal>
            )
          )}

          <Reveal className="chapter-pager">
            {previous ? (
              <a className="pager" href={previous.path} onClick={linkHandler(previous.path)}>
                <span className="pager__label">← Önceki bölüm</span>
                <span className="pager__title">{previous.title}</span>
              </a>
            ) : (
              <a className="pager" href="/" onClick={linkHandler("/")}>
                <span className="pager__label">← Ana sayfa</span>
                <span className="pager__title">İbn-i Sina</span>
              </a>
            )}
            {next ? (
              <a className="pager pager--next" href={next.path} onClick={linkHandler(next.path)}>
                <span className="pager__label">Sonraki bölüm →</span>
                <span className="pager__title">{next.title}</span>
              </a>
            ) : (
              <a className="pager pager--next" href="/kaynakca" onClick={linkHandler("/kaynakca")}>
                <span className="pager__label">Sonraki bölüm →</span>
                <span className="pager__title">Kronoloji, Sözlük ve Kaynakça</span>
              </a>
            )}
          </Reveal>

          <Reveal className="chapter-note">
            <p>
              Bu bölüm, {siteMeta.name} dijital ansiklopedisinin bir parçasıdır.
              Kaynakça ve kavram sözlüğü için{" "}
              <a href="/kaynakca" onClick={linkHandler("/kaynakca")}>
                kaynaklar bölümüne
              </a>{" "}
              bakabilirsiniz.
            </p>
          </Reveal>
        </div>
      </div>
    </>
  );
}
