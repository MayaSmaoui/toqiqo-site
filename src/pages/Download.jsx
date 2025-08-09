export default function Download({ lang='fr' }){
  const T = {
    fr: { title:"Télécharger l’app", subtitle:"Disponible bientôt sur l’App Store et Google Play.", store:'M’alerter à la sortie', how:'Comment installer en bêta ?', steps:['Rejoins TestFlight (iOS)', 'Accède à la bêta Android', 'Active les notifications de sortie'] },
    en: { title:'Download the app', subtitle:'Coming soon on the App Store and Google Play.', store:'Notify me at launch', how:'How to install beta?', steps:['Join TestFlight (iOS)', 'Get Android beta', 'Enable launch notifications'] }
  }[lang];

  return (
    <main className="page">
      <div className="page-hero">
        <span className="chip">Topiqo</span>
        <h1>{T.title}</h1>
        <p>{T.subtitle}</p>
      </div>

      <div className="card download">
        <div className="store-row">
          <a className="btn btn-primary" href="#">{T.store}</a>
        </div>
        <h3>{T.how}</h3>
        <ol className="steps">
          {T.steps.map((s,i)=> <li key={i}>{s}</li>)}
        </ol>
      </div>
    </main>
  );
}
