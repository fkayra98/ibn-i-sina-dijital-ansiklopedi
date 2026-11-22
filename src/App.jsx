import { useEffect } from "react";
import { chapters, siteMeta } from "./data/index.js";
import { useRoute } from "./hooks/useRoute.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Intro from "./components/Intro.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Home from "./pages/Home.jsx";
import ChapterPage from "./pages/ChapterPage.jsx";
import AppendixPage from "./pages/AppendixPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const { path } = useRoute();
  const chapter = chapters.find((item) => item.path === path);

  let page = <Home />;
  let title = `${siteMeta.name} | ${siteMeta.subtitle}`;
  let description = siteMeta.description;

  if (chapter) {
    page = <ChapterPage chapter={chapter} />;
    title = `${chapter.title} | ${siteMeta.name}`;
    description = `${chapter.subtitle} ${siteMeta.name}'nın hayatı, bilimi ve mirası üzerine kapsamlı dijital ansiklopedi.`;
  } else if (path === "/kaynakca") {
    page = <AppendixPage />;
    title = `Kronoloji, Sözlük ve Kaynakça | ${siteMeta.name}`;
    description =
      "İbn-i Sina kronolojisi, sıkça sorulan sorular, bilimsel kavramlar sözlüğü ve akademik kaynaklar.";
  } else if (path === "/iletisim") {
    page = <ContactPage />;
    title = `İletişim ve Künye | ${siteMeta.name}`;
    description =
      "İbn-i Sina dijital ansiklopedisi iletişim bilgileri, öğrenim künyesi ve akademik kaynaklar.";
  } else if (path !== "/") {
    page = <NotFound />;
    title = `Sayfa bulunamadı | ${siteMeta.name}`;
  }

  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);

  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.replace("#", "");
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ block: "start" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [path]);

  return (
    <>
      <a className="skip-link" href="#main">
        İçeriğe geç
      </a>
      <Intro />
      <ScrollProgress />
      <Header path={path} />
      <main id="main">{page}</main>
      <Footer />
    </>
  );
}
