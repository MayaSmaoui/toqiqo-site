// src/App.jsx
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Pricing from './pages/Pricing';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';
import Download from './pages/Download';

// Textes FR / EN
const TEXTS = {
  fr: {
    heroTitle: "Bienvenue sur Topiqo",
    heroText:
      "Topiqo transforme le bac et le brevet en un jeu. Gagne des points, débloque des niveaux et progresse chaque jour avec plaisir !",
    download: "📱 Télécharger l'app",
    login: "Se connecter",
    signup: "Créer un compte",
    footerText:
      "L’app qui transforme le bac et le brevet en un jeu. Progresse chaque jour, garde la motivation, réussis avec le sourire.",
    links: [
      "Accueil",
      "Télécharger l’app",
      "Tarifs",
      "Aide",
      "Contact",
      "Confidentialité",
      "Mentions légales"
    ]
  },
  en: {
    heroTitle: "Welcome to Topiqo",
    heroText:
      "Topiqo turns high school exams into a game. Earn points, unlock levels, and make progress every single day with joy!",
    download: "📱 Download the app",
    login: "Log in",
    signup: "Sign up",
    footerText:
      "The app that turns your final exams into a game. Progress every day, stay motivated, and succeed with a smile.",
    links: [
      "Home Page",
      "Download the app",
      "Pricing",
      "Help",
      "Contact",
      "Privacy",
      "Legal"
    ]
  }
};

function App() {
  const [lang, setLang] = useState('fr');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = TEXTS[lang];
  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });


  // Échap pour fermer
  useEffect(() => {
    function onKey(e){ if(e.key === 'Escape') setMenuOpen(false); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  // Bloque le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // Ferme le drawer quand on clique un lien du drawer
  const closeAnd = (fn) => (e) => {
    setMenuOpen(false);
    if (typeof fn === 'function') fn(e);
  };

  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <nav className="navbar">
       <div className="navbar-inner">
  <div className="nav-left">
    <button
      className="burger"
      aria-label={lang === "fr" ? "Ouvrir le menu" : "Open menu"}
      aria-controls="topiqo-drawer"
      aria-expanded={menuOpen ? "true" : "false"}
      onClick={() => setMenuOpen(true)}
    >
      <span></span><span></span><span></span>
    </button>

    <Link to="/" className="logo">Topiqo</Link>
  </div>

  <div className="nav-links">
    <Link to="/login" className="nav-link">{t.login}</Link>
    <Link to="/signup" className="signup-button">{t.signup}</Link>
    <button
      className="lang-toggle"
      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
    >
      {lang === "fr" ? "EN" : "FR"}
    </button>
  </div>
</div>

      </nav>

      {/* OVERLAY + DRAWER */}
      <div
        className={`drawer-overlay ${menuOpen ? 'show' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        id="topiqo-drawer"
        className={`drawer ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={lang === "fr" ? "Menu latéral" : "Side menu"}
      >
        <div className="drawer-header">
          <span className="brand">Topiqo</span>
          <button
            className="drawer-close"
            aria-label={lang === "fr" ? "Fermer le menu" : "Close menu"}
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="drawer-links">
  {[
    { label: t.links[0], to: "/#features" }, // Fonctionnalités
    { label: t.links[1], to: "/download" },  // Télécharger l’app
    { label: t.links[3], to: "/help" },      // Aide
    { label: t.links[4], to: "/contact" },   // Contact
    { label: t.links[2], to: "/pricing" }    // Tarifs
  ].map((item, i) => (
    <Link key={i} to={item.to} className="drawer-link" onClick={() => setMenuOpen(false)}>
      {item.label}
    </Link>
  ))}
</nav>


        <div className="drawer-cta">
          <Link to="/signup" className="btn btn-primary" onClick={closeAnd()}>{t.signup}</Link>
          <Link to="/login" className="btn btn-ghost" onClick={closeAnd()}>{t.login}</Link>
        </div>

        <div className="drawer-lang">
          <button
            className="lang-toggle full"
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
          >
            {lang === "fr" ? "Passer en EN" : "Switch to FR"}
          </button>
        </div>
      </aside>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home t={t} lang={lang} setLang={setLang} />} />
        <Route path="/login" element={<Login lang={lang} />} />
        <Route path="/signup" element={<Signup lang={lang} />} />
        <Route path="/pricing" element={<Pricing lang={lang} />} />
        <Route path="/help" element={<Help lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} />} />
        <Route path="/privacy" element={<Privacy lang={lang} />} />
        <Route path="/legal" element={<Legal lang={lang} />} />
        <Route path="/download" element={<Download lang={lang} />} />
      </Routes>

      {/* FOOTER */}
      <footer className="site-footer">
        <svg className="foot-wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,40 C240,110 360,110 600,60 C840,10 1080,10 1440,70 L1440,120 L0,120 Z" />
        </svg>

        <div className="footer-wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-logo">Topiqo</div>
              <p>{t.footerText}</p>
              <Link to="/signup" className="footer-cta">{t.signup}</Link>
            </div>

            <nav className="footer-col">
  <h4>{lang === "fr" ? "Liens" : "Links"}</h4>
  {[
    { label: t.links[0], to: "/#features" },
    { label: t.links[1], to: "/download" },
    { label: t.links[2], to: "/pricing" },
    { label: t.links[3], to: "/help" },
    { label: t.links[4], to: "/contact" },
    { label: t.links[5], to: "/privacy" },
    { label: t.links[6], to: "/legal" }
  ].map((item, i) => (
    <Link key={i} to={item.to} onClick={goTop}>
      {item.label}
    </Link>
  ))}
</nav>

          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Topiqo</span>
            <div className="socials">
              <a className="ico" aria-label="Instagram" href="https://instagram.com/topiqo" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2a1.1 1.1 0 0 0 0-2.2zM12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6z"/></svg>
              </a>
              <a className="ico" aria-label="TikTok" href="https://tiktok.com/@topiqo" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M16 3v3.2c1.2.9 2.7 1.5 4.3 1.6V11c-1.7-.1-3.2-.7-4.3-1.5v5.7A6.2 6.2 0 1 1 9 9.3V11a3.9 3.9 0 1 0 3 3.8V3h4z"/></svg>
              </a>
              <a className="ico" aria-label="YouTube" href="https://youtube.com/@topiqo" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M23 7.1a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.5A3 3 0 0 0 1 7.1 31.7 31.7 0 0 0 .5 12 31.7 31.7 0 0 0 1 16.9 3 3 0 0 0 3.1 19c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 16.9 31.7 31.7 0 0 0 23.5 12 31.7 31.7 0 0 0 23 7.1zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
