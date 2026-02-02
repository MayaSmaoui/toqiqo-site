// src/pages/Home.jsx
import PremiumPanels from '../components/PremiumPanels';

const HERO_TEXTS = {
  fr: {
    title: "Maîtrise n'importe quel sujet.",
    subtitle: "Un apprentissage personnalisé pour réviser plus efficacement, sans te prendre la tête.",
    body: "Des exercices quotidiens adaptés à tes cours, tes profs et tes objectifs.",
    value: "Moins cher qu'un prof particulier, plus personnalisé que les autres apps.",
    appStore: "App Store",
    playStore: "Play Store",
    comingSoon: "Bientôt"
  },
  en: {
    title: "Master any topic.",
    subtitle: "Personalised learning that helps you study smarter, not harder.",
    body: "Daily practice tailored to your classes, teachers, and goals.",
    value: "Cheaper than a private tutor, more personalised than other apps.",
    appStore: "App Store",
    playStore: "Play Store",
    comingSoon: "Coming Soon"
  }
};

export default function Home({ t, lang }) {
  const heroText = HERO_TEXTS[lang] || HERO_TEXTS.en;
  
  return (
    <>
      {/* HERO */}
      <main className="hero">
        <div className="hero-inner">
          <img src="/assets/TopiqoWave.gif" alt="Topiqo mascot" className="topi-img" />
          <h1>{heroText.title}</h1>
          <p className="hero-subtitle">{heroText.subtitle}</p>
          <p className="hero-body">{heroText.body}</p>
          <p className="hero-value">{heroText.value}</p>
          <div className="download-buttons">
            <a href="https://apps.apple.com/us/app/topiqo/id6748356744" className="download-button" target="_blank" rel="noreferrer">
              <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {heroText.appStore}
            </a>
            <div className="download-button disabled">
              <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
              {heroText.playStore}
              <span className="coming-soon-badge">{heroText.comingSoon}</span>
            </div>
          </div>
        </div>
        <div className="hero-bg" aria-hidden="true"></div>
      </main>

      {/* PREMIUM PANELS SECTION - Immersive showcase like iOS app */}
      <PremiumPanels lang={lang === "fr" ? "fr" : "en"} />
    </>
  );
}