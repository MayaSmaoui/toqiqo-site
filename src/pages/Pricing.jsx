export default function Pricing({ lang = 'fr' }) {
  const T = {
    fr: {
      title: 'Tarifs',
      subtitle: "Investis en toi. Annule quand tu veux.",
      monthly: 'Mensuel',
      yearly: 'Annuel (2 mois offerts)',
      lifetime: 'À vie',
      cta: 'Commencer',
      features: [
        'Accès à toutes les matières',
        'Parcours IA personnalisés',
        'Quiz intelligents illimités',
        'Suivi de progression',
        'Mode hors-ligne (bientôt)'
      ]
    },
    en: {
      title: 'Pricing',
      subtitle: 'Invest in yourself. Cancel anytime.',
      monthly: 'Monthly',
      yearly: 'Yearly (2 months free)',
      lifetime: 'Lifetime',
      cta: 'Get started',
      features: [
        'All subjects access',
        'Personalized AI paths',
        'Unlimited smart quizzes',
        'Progress tracking',
        'Offline mode (soon)'
      ]
    }
  }[lang];

  const plans = [
    { label: T.monthly, price: '6,99€', badge: '🔥', per: '/mo' },
    { label: T.yearly, price: '59,99€', badge: '💎', per: '' },
    { label: T.lifetime, price: '149,99€', badge: '∞', per: '' }
  ];

  return (
    <main className="page">
      <div className="page-hero">
        <span className="chip">Topiqo</span>
        <h1>{T.title}</h1>
        <p>{T.subtitle}</p>
      </div>

      <div className="pricing-grid">
        {plans.map((p, i) => (
          <div className={`price-card ${i === 0 ? 'highlight' : ''}`} key={i}>
            <div className="badge">{p.badge} {p.label}</div>
            <h3>{p.price}</h3>
            {p.per && <small>{p.per}</small>}
            <ul>
              {T.features.map((f, j) => (
                <li key={j}>✅ {f}</li>
              ))}
            </ul>
            <a className={`btn ${i === 0 ? 'btn-primary' : 'btn-ghost'}`} href="/signup">
              {T.cta}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
