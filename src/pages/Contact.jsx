import { useState } from 'react';

export default function Contact({ lang='fr' }){
  const T = {
    fr: { title:'Contact', subtitle:'Besoin d’aide ? Écris-nous.', name:'Nom', email:'E-mail', msg:'Message', send:'Envoyer', ok:'Message envoyé (démo) ✅' },
    en: { title:'Contact', subtitle:'Need help? Write to us.', name:'Name', email:'Email', msg:'Message', send:'Send', ok:'Message sent (demo) ✅' }
  }[lang];

  const [sent, setSent] = useState(false);
  const submit = (e)=>{ e.preventDefault(); setTimeout(()=>setSent(true), 700); };

  return (
    <main className="page">
      <div className="page-hero">
        <span className="chip">Topiqo</span>
        <h1>{T.title}</h1>
        <p>{T.subtitle}</p>
      </div>

      <form className="card" onSubmit={submit}>
        <label className="input"><span>{T.name}</span><input required /></label>
        <label className="input"><span>{T.email}</span><input type="email" required /></label>
        <label className="input"><span>{T.msg}</span><textarea rows="5" required /></label>
        <button className="btn btn-primary">{T.send}</button>
        {sent && <div className="notice success">{T.ok}</div>}
      </form>
    </main>
  );
}
