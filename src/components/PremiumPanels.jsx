// src/components/PremiumPanels.jsx
import { useState, useEffect, useRef } from 'react';
import './PremiumPanels.css';

// Import your video files - adjust paths as needed
// You'll need to add these videos to your public folder or assets
const VIDEOS = {
  graphs: '/videos/graphs.mov',
  pronounciation: '/videos/pronounciation.mov',
  barchart: '/videos/barchart.mov',
  truefalse: '/videos/truefalse.mov',
  sentencetranslation: '/videos/sentencetranslation.mov',
  completethecode: '/videos/completethecode.mov',
  codequestion: '/videos/codequestion.mov',
  ordering: '/videos/ordering.mov',
  connectpairs: '/videos/connectpairs.mov',
};

const TEXTS = {
  fr: {
    // Panel 1: Features Slideshow
    adaptsTitle: "S'adapte à ce que tu veux apprendre",
    slides: {
      graphs: "Graphiques Interactifs",
      pronunciation: "Apprends à Prononcer",
      barchart: "Diagrammes Visuels",
      truefalse: "Quiz Vrai ou Faux",
      translation: "Traduction de Phrases",
      completecode: "Complète le Code",
      codequestion: "Questions de Code",
      ordering: "Remets dans l'Ordre",
      matchpairs: "Relie les Paires",
    },
    
    // Panel 2: Roadmap
    roadmapTitle: "Ton parcours personnalisé",
    roadmapSubtitle: "Progresse étape par étape avec des leçons adaptées à toi",
    roadmapBody: "Importe tes cours, complète le parcours, réussis ton examen.",
    roadmapValue: "Moins cher qu'un prof particulier, plus personnalisé que les autres apps.",
    roadmapItems: [
      { title: "Introduction", subtitle: "Concepts de base" },
      { title: "Principes Clés", subtitle: "Fondations essentielles" },
      { title: "Pratique", subtitle: "Applique tes connaissances" },
      { title: "Avancé", subtitle: "Approfondissement" },
      { title: "Révision Finale", subtitle: "Préparation examen" },
    ],

    // Panel 3: Download
    downloadTitle: "Prêt à commencer ?",
    downloadSubtitle: "Télécharge Topiqo et commence à progresser dès aujourd'hui.",
    appStore: "App Store",
    playStore: "Play Store",
    comingSoon: "Bientôt",
  },
  en: {
    // Panel 1: Features Slideshow
    adaptsTitle: "Adapts to what you want to learn",
    slides: {
      graphs: "Interactive Graphs",
      pronunciation: "Learn to Pronounce",
      barchart: "Visual Bar Charts",
      truefalse: "True or False Quizzes",
      translation: "Sentence Translation",
      completecode: "Complete the Code",
      codequestion: "Code Questions",
      ordering: "Put in Order",
      matchpairs: "Match Pairs",
    },
    
    // Panel 2: Roadmap
    roadmapTitle: "Your personal learning path",
    roadmapSubtitle: "Progress step by step with lessons that adapt to you",
    roadmapBody: "Upload your notes, complete the roadmap, ace your exam.",
    roadmapValue: "Cheaper than a private tutor, more personalised than other apps.",
    roadmapItems: [
      { title: "Introduction", subtitle: "Basic concepts" },
      { title: "Key Principles", subtitle: "Core foundations" },
      { title: "Practice", subtitle: "Apply knowledge" },
      { title: "Advanced", subtitle: "Deep dive" },
      { title: "Final Review", subtitle: "Exam prep" },
    ],

    // Panel 3: Download
    downloadTitle: "Ready to get started?",
    downloadSubtitle: "Download Topiqo and start making progress today.",
    appStore: "App Store",
    playStore: "Play Store",
    comingSoon: "Coming Soon",
  }
};

const SLIDESHOW_ITEMS = [
  { key: 'graphs', video: VIDEOS.graphs },
  { key: 'pronunciation', video: VIDEOS.pronounciation },
  { key: 'barchart', video: VIDEOS.barchart },
  { key: 'truefalse', video: VIDEOS.truefalse },
  { key: 'translation', video: VIDEOS.sentencetranslation },
  { key: 'completecode', video: VIDEOS.completethecode },
  { key: 'codequestion', video: VIDEOS.codequestion },
  { key: 'ordering', video: VIDEOS.ordering },
  { key: 'matchpairs', video: VIDEOS.connectpairs },
];

// Phone mockup with video
function PhoneVideo({ videoSrc, isActive }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <div className="phone-mockup">
      <div className="phone-bezel">
        <div className="phone-notch">
          <div className="phone-speaker"></div>
          <div className="phone-camera"></div>
        </div>
        <div className="phone-screen">
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            loop
            className="phone-video"
          />
        </div>
        <div className="phone-home-indicator"></div>
      </div>
    </div>
  );
}

// Scroll indicator
function ScrollIndicator({ text }) {
  return (
    <div className="scroll-indicator">
      <span>{text}</span>
      <div className="scroll-chevron">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

// Panel 2: Features Slideshow
function FeaturesPanel({ t, visible }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!visible) return;
    
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDESHOW_ITEMS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [visible]);

  // Reset to first slide when panel becomes visible
  useEffect(() => {
    if (visible) {
      setCurrentSlide(0);
    }
  }, [visible]);

  const slideKeys = Object.keys(t.slides);

  return (
    <section className={`premium-panel features-panel ${visible ? 'visible' : ''}`}>
      <div className="panel-bg-circles">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>
      
      <div className="panel-content">
        <h2 className="panel-title purple">{t.adaptsTitle}</h2>
        
        <div className="slide-title-container">
          {SLIDESHOW_ITEMS.map((item, index) => (
            <span 
              key={item.key}
              className={`slide-title ${currentSlide === index ? 'active' : ''}`}
            >
              {t.slides[item.key]}
            </span>
          ))}
        </div>
        
        <div className="phone-slideshow">
          {SLIDESHOW_ITEMS.map((item, index) => (
            <div 
              key={item.key}
              className={`slideshow-item ${currentSlide === index ? 'active' : ''}`}
            >
              <PhoneVideo videoSrc={item.video} isActive={currentSlide === index && visible} />
            </div>
          ))}
        </div>
        
        <div className="slideshow-dots">
          {SLIDESHOW_ITEMS.map((item, index) => (
            <button
              key={item.key}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Panel 2: Roadmap
function RoadmapPanel({ t, visible }) {
  const [visibleNodes, setVisibleNodes] = useState([]);
  const [showChips, setShowChips] = useState(false);
  const [showText, setShowText] = useState(false);

  const items = [
    { title: t.roadmapItems[0].title, subtitle: t.roadmapItems[0].subtitle, icon: '⚛️', status: 'completed' },
    { title: t.roadmapItems[1].title, subtitle: t.roadmapItems[1].subtitle, icon: '💧', status: 'completed' },
    { title: t.roadmapItems[2].title, subtitle: t.roadmapItems[2].subtitle, icon: '🧊', status: 'current' },
    { title: t.roadmapItems[3].title, subtitle: t.roadmapItems[3].subtitle, icon: '⬡', status: 'locked' },
    { title: t.roadmapItems[4].title, subtitle: t.roadmapItems[4].subtitle, icon: '🔥', status: 'locked' },
  ];

  // Offset pattern matching iOS: [0, 15, 25, 15, 0]
  const offsets = [0, 15, 25, 15, 0];

  // Animate nodes one by one when panel becomes visible
  useEffect(() => {
    if (visible) {
      setVisibleNodes([]);
      setShowChips(false);
      setShowText(false);
      
      // Stagger node appearances
      items.forEach((_, index) => {
        setTimeout(() => {
          setVisibleNodes(prev => [...prev, index]);
        }, 400 + index * 250); // Start after 400ms, then 250ms between each
      });

      // Show chips after nodes
      setTimeout(() => setShowChips(true), 400 + items.length * 250 + 200);
      
      // Show text after chips
      setTimeout(() => setShowText(true), 400 + items.length * 250 + 500);
    } else {
      setVisibleNodes([]);
      setShowChips(false);
      setShowText(false);
    }
  }, [visible]);

  return (
    <section className={`premium-panel roadmap-panel ${visible ? 'visible' : ''}`}>
      <div className="panel-bg-circles">
        <div className="bg-circle circle-roadmap"></div>
      </div>
      
      <div className="panel-content">
        <h2 className="panel-title purple">{t.roadmapTitle}</h2>
        <p className="panel-subtitle">{t.roadmapSubtitle}</p>
        
        <div className="roadmap-container">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`roadmap-node ${item.status} ${visibleNodes.includes(index) ? 'show' : ''}`}
              style={{ 
                '--offset': `${offsets[index]}px`
              }}
            >
              <div className={`depth-button ${item.status}`}>
                <div className="depth-button-shadow"></div>
                <div className="depth-button-face">
                  {item.status === 'completed' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12L10 17L19 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {item.status === 'current' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                    </svg>
                  )}
                  {item.status === 'locked' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="10" rx="2" stroke="white" strokeWidth="2"/>
                      <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>
              </div>
              
              <div className="node-content">
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upload chips */}
        <div className={`upload-chips ${showChips ? 'show' : ''}`}>
          <div className="upload-chip">
            <span>📷</span> Photos
          </div>
          <div className="upload-chip">
            <span>📄</span> PDFs
          </div>
          <div className="upload-chip">
            <span>🎤</span> Audio
          </div>
        </div>

        <p className={`roadmap-body ${showText ? 'show' : ''}`}>{t.roadmapBody}</p>
        <p className={`roadmap-value ${showText ? 'show' : ''}`}>{t.roadmapValue}</p>
      </div>
    </section>
  );
}

// Panel 3: Download
function DownloadPanel({ t, visible }) {
  return (
    <section className={`premium-panel download-panel ${visible ? 'visible' : ''}`}>
      <div className="panel-content">
        <h2 className="panel-title purple">{t.downloadTitle}</h2>
        <p className="panel-subtitle">{t.downloadSubtitle}</p>
        
        <div className="download-buttons-vertical">
          <a href="https://apps.apple.com/us/app/topiqo/id6748356744" className="download-button-large" target="_blank" rel="noreferrer">
            <svg className="store-icon-large" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            {t.appStore}
          </a>
          <div className="download-button-large disabled">
            <svg className="store-icon-large" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
            {t.playStore}
            <span className="coming-soon-badge">{t.comingSoon}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main component
export default function PremiumPanels({ lang = 'fr' }) {
  const t = TEXTS[lang] || TEXTS.fr;
  const [visiblePanels, setVisiblePanels] = useState({
    features: false,
    roadmap: false,
    download: false,
  });
  
  const panelRefs = {
    features: useRef(null),
    roadmap: useRef(null),
    download: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const panelId = entry.target.dataset.panel;
          // Set visible when entering, reset when leaving
          setVisiblePanels(prev => ({ ...prev, [panelId]: entry.isIntersecting }));
        });
      },
      { threshold: 0.2 }
    );

    Object.entries(panelRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.dataset.panel = key;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="premium-panels-container">
      <div ref={panelRefs.features}>
        <FeaturesPanel t={t} visible={visiblePanels.features} />
      </div>
      <div ref={panelRefs.roadmap}>
        <RoadmapPanel t={t} visible={visiblePanels.roadmap} />
      </div>
      <div ref={panelRefs.download}>
        <DownloadPanel t={t} visible={visiblePanels.download} />
      </div>
    </div>
  );
}