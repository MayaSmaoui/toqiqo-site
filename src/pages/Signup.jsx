import { useState } from 'react';

export default function Signup({ lang = 'fr' }) {
  const T = {
    fr: { title:"Créer un compte", subtitle:"Grimpe de niveau dès aujourd’hui.", name:"Prénom", email:"E-mail", password:"Mot de passe", consent:"J’accepte les CGU et la Politique de confidentialité", submit:"Commencer l’aventure", alt:"Déjà un compte ? ", altCta:"Se connecter" },
    en: { title:"Create your account", subtitle:"Start leveling up today.", name:"First name", email:"Email", password:"Password", consent:"I accept the Terms and Privacy Policy", submit:"Start now", alt:"Already have an account? ", altCta:"Log in" }
  }[lang];

  const [form, setForm] = useState({ name:'', email:'', password:'', consent:false });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(!form.consent){
      return setMessage(lang==='fr'? 'Merci d’accepter les conditions.' : 'Please accept the terms.');
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage(lang==='fr'? 'Compte créé (démo) 🎉' : 'Account created (demo) 🎉');
    }, 900);
  };

  return (
    <main className="page page-auth">
      <div className="page-hero">
        <span className="chip">Topiqo</span>
        <h1>{T.title}</h1>
        <p>{T.subtitle}</p>
      </div>

      <form className="auth-card" onSubmit={onSubmit}>
        <label className="input">
          <span>{T.name}</span>
          <input type="text" required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder={lang==='fr'? 'ex: Maya' : 'e.g. Maya'} />
        </label>
        <label className="input">
          <span>{T.email}</span>
          <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
        </label>
        <label className="input">
          <span>{T.password}</span>
          <input type="password" minLength={8} required value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} />
          <small className="hint">{lang==='fr'? '8 caractères minimum' : '8 characters minimum'}</small>
        </label>

        <label className="check">
          <input type="checkbox" checked={form.consent} onChange={(e)=>setForm({...form, consent:e.target.checked})} />
          <span>
            {T.consent} <a className="link" href="/legal">CGU</a> • <a className="link" href="/privacy">Privacy</a>
          </span>
        </label>

        <button className="btn btn-primary" disabled={loading}>
          {loading ? '…' : T.submit}
        </button>

        {message && <div className="notice success">{message}</div>}

        <p className="alt">
          {T.alt}
          <a className="link" href="/login">{T.altCta}</a>
        </p>
      </form>
    </main>
  );
}
