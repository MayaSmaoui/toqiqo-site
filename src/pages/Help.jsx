export default function Help({ lang='fr' }){
  const T = {
    fr: { title:'Aide', subtitle:'Questions fréquentes', q:[
      ['Topiqo, c’est quoi ?', 'Une app gamifiée pour réviser le Bac et le Brevet, comme Duolingo mais pour tes matières.'],
      ['L’IA marche comment ?', 'Tu importes ton cours, on génère des exercices adaptés à ton niveau.'],
      ['Puis-je utiliser Topiqo gratuitement ?', 'Oui, avec des limites quotidiennes. Les plans payants déverrouillent tout.'],
      ['Comment annuler ?', 'Depuis ton profil > Abonnement. Annulation en 2 clics.']
    ] },
    en: { title:'Help', subtitle:'Frequently asked questions', q:[
      ['What is Topiqo?', 'A gamified app to study for French exams, Duolingo-style.'],
      ['How does AI work?', 'Upload your lesson; we generate tailored exercises.'],
      ['Is there a free plan?', 'Yes, with daily limits. Paid plans unlock everything.'],
      ['How to cancel?', 'From your profile > Subscription. Two clicks.']
    ] }
  }[lang];

  return (
    <main className="page">
      <div className="page-hero">
        <span className="chip">Topiqo</span>
        <h1>{T.title}</h1>
        <p>{T.subtitle}</p>
      </div>

      <div className="faq">
        {T.q.map(([q,a],i)=> (
          <details key={i} className="faq-item">
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
