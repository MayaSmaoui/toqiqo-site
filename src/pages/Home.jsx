// src/pages/Home.jsx
import FeaturesShowcase from '../FeaturesShowcase';
import topiGif from '../assets/Topi.gif';

export default function Home({ t, lang }) {
  return (
    <>
      {/* HERO */}
      <main className="hero">
        <div className="hero-inner">
          <img src={topiGif} alt="Topi animé" className="topi-img" />
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <button className="download-button">{t.download}</button>
        </div>
        <div className="hero-bg" aria-hidden="true"></div>
      </main>

      {/* SECTION IMMERSIVE */}
      <FeaturesShowcase lang={lang} key={lang} />
    </>
  );
}
