// src/FeaturesShowcase.jsx
import { useEffect, useRef } from 'react';
import Maths from './assets/icone1.png';
import Philo from './assets/Philo.png';
import SVT from './assets/SVT.png';

const FEATURES_BY_LANG = {
  fr: [
    {
      title: "Le Duolingo du Bac",
      text: "Révise en t’amusant grâce à des parcours interactifs, des points et des niveaux. Addictif, motivant et pensé pour cartonner au Bac et au Brevet.",
      img: Maths,
      color: "#fccc2d",
      reverse: false
    },
    {
      title: "Ton parcours IA sur-mesure",
      text: "Prends une photo de ton cours et laisse l’IA créer un parcours d’exercices et de leçons adaptés à ton niveau — comme Duolingo, mais pour tes chapitres.",
      img: Philo,
      color: "#58cc02",
      reverse: true
    },
    {
      title: "Booste tes notes",
      text: "La méthode la plus rapide et efficace pour réviser : résumés ciblés, quiz intelligents et suivi précis pour viser la meilleure note possible.",
      img: SVT,
      color: "#7aa2ff",
      reverse: false
    }
  ],
  en: [
    {
      title: "The Duolingo for the Bac",
      text: "Study while having fun with interactive paths, points, and levels. Addictive, motivating, and designed to help you excel in the French Bac and Brevet.",
      img: Maths,
      color: "#fccc2d",
      reverse: false
    },
    {
      title: "Your AI-powered custom path",
      text: "Take a photo of your lesson and let AI create a tailored set of exercises and lessons for your level — just like Duolingo, but for your subjects.",
      img: Philo,
      color: "#58cc02",
      reverse: true
    },
    {
      title: "Boost your grades",
      text: "The fastest and most effective way to study: targeted summaries, smart quizzes, and detailed tracking to aim for the best possible grade.",
      img: SVT,
      color: "#7aa2ff",
      reverse: false
    }
  ]
};

export default function FeaturesShowcase({ lang = 'fr' }) {
  const refs = useRef([]);
  const FEATURES = FEATURES_BY_LANG[lang] || FEATURES_BY_LANG.fr;

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="features-showcase" id="features">
      {FEATURES.map((feat, index) => (
        <div
          key={`${lang}-${index}`}
          ref={el => (refs.current[index] = el)}
          className={`feature-block ${feat.reverse ? "reverse" : ""}`}
          style={{ "--accent": feat.color }}
        >
          <div className="feature-text">
            <h2>{feat.title}</h2>
            <p>{feat.text}</p>
          </div>
          <div className="feature-image">
            <img src={feat.img} alt={feat.title} />
          </div>
        </div>
      ))}
    </section>
  );
}
