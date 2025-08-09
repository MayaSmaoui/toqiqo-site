import { useState } from 'react';

export default function Login({ lang = 'fr' }) {
  const T = {
    fr: { title: "Se connecter", subtitle: "Ravi de te revoir ! Continue ta streak.", email: "E-mail", password: "Mot de passe", remember: "Se souvenir de moi", forgot: "Mot de passe oublié ?", submit: "Connexion", alt: "Pas de compte ? ", altCta: "Créer un compte" },
    en: { title: "Log in", subtitle: "Welcome back! Keep your streak alive.", email: "Email", password: "Password", remember: "Remember me", forgot: "Forgot password?", submit: "Log in", alt: "No account? ", altCta: "Sign up" }
  }[lang];

  const [form, setForm] = useState({ email: '', password: '', remember: true });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage(lang === 'fr' ? 'Connexion simulée avec succès ✅' : 'Logged in (demo) ✅');
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
          <span>{T.email}</span>
          <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="ex: toi@email.com" />
        </label>
        <label className="input">
          <span>{T.password}</span>
          <input type="password" required value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} />
        </label>

        <div className="auth-row">
          <label className="switch">
            <input type="checkbox" checked={form.remember} onChange={(e)=>setForm({...form, remember: e.target.checked})} />
            <span>{T.remember}</span>
          </label>
          <a className="link" href="#">{T.forgot}</a>
        </div>

        <button className="btn btn-primary" disabled={loading}>
          {loading ? '…' : T.submit}
        </button>

        {message && <div className="notice success">{message}</div>}

        <p className="alt">
          {T.alt}
          <a className="link" href="/signup">{T.altCta}</a>
        </p>
      </form>
    </main>
  );
}
