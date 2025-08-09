import React from "react";

export default function Privacy({ lang = "fr" }) {
  const i18n = {
    fr: {
      brand: "Topiqo",
      title: "Politique de confidentialité",
      subtitle:
        "Comment nous collectons, utilisons et protégeons tes données (RGPD/CNIL).",
      updated: "Dernière mise à jour : 9 août 2025",
      effective: "Date d’entrée en vigueur : 9 août 2025",
      toc: "Sommaire",
      sections: [
        {
          id: "overview",
          h: "Résumé",
          body: (
            <>
              <p>
                Cette politique explique quelles données nous traitons, pourquoi, pendant combien de temps,
                avec qui nous les partageons et quels sont tes droits. Elle s’applique au site et à l’app
                <strong> Topiqo</strong>.
              </p>
            </>
          ),
        },
        {
          id: "controller",
          h: "Responsable du traitement",
          body: (
            <>
              <p>
                <strong>Topiqo SAS</strong> — 10 rue Exemple, 75000 Paris, France.
                <br />
                Email :{" "}
                <a className="link" href="mailto:privacy@topiqo.com">privacy@topiqo.com</a>
              </p>
            </>
          ),
        },
        {
          id: "dpo",
          h: "Délégué à la Protection des Données (DPO)",
          body: (
            <p>
              Contact DPO :{" "}
              <a className="link" href="mailto:dpo@topiqo.com">dpo@topiqo.com</a>. Tu peux contacter le DPO pour toute
              question relative à tes droits ou à nos traitements.
            </p>
          ),
        },
        {
          id: "data",
          h: "Données que nous collectons",
          body: (
            <>
              <ul>
                <li><strong>Compte</strong> : nom, email, mot de passe (haché), identifiants d’authentification.</li>
                <li><strong>Utilisation</strong> : progression, réponses, scores, paramètres, feedbacks, historique pédagogique.</li>
                <li><strong>Techniques</strong> : appareil, OS, version de l’app, identifiants de session, journaux (logs), IP <em>tronquée</em>, horodatages.</li>
                <li><strong>Support</strong> : messages envoyés et métadonnées associées (ex. pièces jointes, date).</li>
              </ul>
              <p>
                Nous <strong>n’exploitons pas</strong> de <em>données sensibles</em> (santé, opinions, etc.) et
                nous ne faisons <strong>aucune publicité ciblée</strong> ni <strong>profilage marketing</strong> sur les mineurs.
              </p>
            </>
          ),
        },
        {
          id: "purposes",
          h: "Finalités & bases légales",
          body: (
            <>
              <ul>
                <li><strong>Prestation du service (contrat)</strong> : compte, synchronisation, suivi des progrès, fonctionnalités pédagogiques.</li>
                <li><strong>Amélioration & sécurité (intérêt légitime)</strong> : statistiques agrégées, correction de bugs, prévention fraude/abus, sécurité.</li>
                <li><strong>Messages de service (intérêt légitime)</strong> : informations importantes, changements de fonctionnalités/conditions.</li>
                <li><strong>Marketing (consentement)</strong> : newsletters/offres. Retrait possible à tout moment.</li>
              </ul>
            </>
          ),
        },
        {
          id: "cookies",
          h: "Cookies & traceurs",
          body: (
            <>
              <ul>
                <li><strong>Nécessaires</strong> : authentification, sécurité, préférences (déposés sans consentement).</li>
                <li><strong>Mesure d’audience respectueuse</strong> : avec IP anonymisée lorsque possible.</li>
                <li><strong>Marketing</strong> : uniquement avec consentement préalable. <strong>Pas d’ads ciblées mineur·e·s.</strong></li>
              </ul>
              <p>Tu peux gérer tes préférences à tout moment via le module de consentement (icône cookies ou paramètres).</p>
            </>
          ),
        },
        {
          id: "minors",
          h: "Utilisation par des mineurs",
          body: (
            <>
              <p>
                Topiqo est une application <strong>d’éducation destinée aux mineurs</strong> (collège/lycée).
                En France, l’âge de consentement numérique est de <strong>15 ans</strong>. 
              </p>
              <ul>
                <li>Si tu as <strong>15 ans ou plus</strong> : tu peux utiliser l’app conformément à cette politique.</li>
                <li>Si tu as <strong>moins de 15 ans</strong> : l’usage nécessite le <strong>consentement parental</strong> vérifiable (ou du tuteur légal). Nous pouvons demander une validation par un parent/tuteur (ex. email de confirmation ou autre moyen approprié).</li>
              </ul>
              <p>
                Les parents/tuteurs peuvent <strong>exercer les droits</strong> (accès, suppression, etc.) au nom du mineur en écrivant à{" "}
                <a className="link" href="mailto:privacy@topiqo.com">privacy@topiqo.com</a>.
              </p>
            </>
          ),
        },
        {
          id: "retention",
          h: "Durées de conservation",
          body: (
            <p>
              Données conservées tant que le compte est actif. Après suppression, effacement ou anonymisation sous
              <strong> 24 mois</strong> (sauf obligation légale).
            </p>
          ),
        },
        {
          id: "recipients",
          h: "Destinataires",
          body: (
            <>
              <p>
                Accès limité aux équipes habilitées de Topiqo (besoin d’en connaître). Certaines données peuvent être partagées avec des
                <strong> sous-traitants</strong> (hébergement, emailing transactionnel, analytique respectueuse).
              </p>
            </>
          ),
        },
        {
          id: "processors",
          h: "Sous-traitants & hébergement",
          body: (
            <p>
              Hébergement dans l’UE ou équivalent (ex. OVHcloud/Scaleway). Sous-traitants liés par des{" "}
              <abbr title="Accords de traitement">DPA</abbr>, audités, agissant sur instruction de Topiqo.
            </p>
          ),
        },
        {
          id: "transfers",
          h: "Transferts hors UE",
          body: (
            <p>
              S’il y a transfert, nous appliquons des <strong>garanties adéquates</strong> (Clauses Contractuelles Types, TIA) et la <strong>minimisation</strong>.
            </p>
          ),
        },
        {
          id: "security",
          h: "Sécurité",
          body: (
            <>
              <ul>
                <li>Chiffrement en transit (TLS) et au repos selon l’hébergeur.</li>
                <li>Contrôles d’accès, journalisation, sauvegardes régulières.</li>
                <li>Tests/correctifs de sécurité selon les bonnes pratiques.</li>
              </ul>
            </>
          ),
        },
        {
          id: "breach",
          h: "Violation de données",
          body: (
            <p>
              En cas d’incident, nous appliquons notre procédure et notifierons la CNIL et/ou les personnes concernées lorsque requis.
            </p>
          ),
        },
        {
          id: "rights",
          h: "Tes droits (RGPD)",
          body: (
            <>
              <p>
                Droits : <strong>accès</strong>, <strong>rectification</strong>, <strong>effacement</strong>, <strong>opposition</strong>, <strong>limitation</strong>, <strong>portabilité</strong>, <strong>retrait du consentement</strong>.
                Écris à <a className="link" href="mailto:privacy@topiqo.com">privacy@topiqo.com</a>. Réponse sous <strong>un mois</strong> (prolongeable).
              </p>
              <p>
                Autorité de contrôle :{" "}
                <a className="link" href="https://www.cnil.fr" target="_blank" rel="noreferrer">CNIL</a>.
              </p>
            </>
          ),
        },
        {
          id: "changes",
          h: "Modifications",
          body: (
            <p>
              Nous pouvons mettre à jour cette politique. En cas de changement important, nous t’informerons et
              mettrons à jour la date ci-dessus.
            </p>
          ),
        },
        {
          id: "contact",
          h: "Contact",
          body: (
            <p>
              DPO : <a className="link" href="mailto:dpo@topiqo.com">dpo@topiqo.com</a> — Support :{" "}
              <a className="link" href="mailto:privacy@topiqo.com">privacy@topiqo.com</a> — Topiqo SAS, 10 rue Exemple, 75000 Paris.
            </p>
          ),
        },
      ],
    },
    en: {
      brand: "Topiqo",
      title: "Privacy Policy",
      subtitle:
        "How we collect, use, and protect your data (GDPR/CNIL compliant).",
      updated: "Last updated: August 9, 2025",
      effective: "Effective date: August 9, 2025",
      toc: "Contents",
      sections: [
        {
          id: "overview",
          h: "Summary",
          body: (
            <>
              <p>
                This policy explains what we process, why, for how long, with whom we share it, and your rights.
                It applies to the <strong>Topiqo</strong> website and app.
              </p>
            </>
          ),
        },
        {
          id: "controller",
          h: "Controller",
          body: (
            <>
              <p>
                <strong>Topiqo SAS</strong> — 10 rue Exemple, 75000 Paris, France.
                <br />
                Email: <a className="link" href="mailto:privacy@topiqo.com">privacy@topiqo.com</a>
              </p>
            </>
          ),
        },
        {
          id: "dpo",
          h: "Data Protection Officer (DPO)",
          body: (
            <p>
              DPO contact:{" "}
              <a className="link" href="mailto:dpo@topiqo.com">dpo@topiqo.com</a>. You can contact the DPO for questions about your rights or our processing.
            </p>
          ),
        },
        {
          id: "data",
          h: "Data we collect",
          body: (
            <>
              <ul>
                <li><strong>Account</strong>: name, email, password (hashed), auth identifiers.</li>
                <li><strong>Usage</strong>: progress, answers, scores, settings, feedback, learning history.</li>
                <li><strong>Technical</strong>: device, OS, app version, session IDs, logs, <em>truncated</em> IP, timestamps.</li>
                <li><strong>Support</strong>: messages and related metadata.</li>
              </ul>
              <p>
                We do <strong>not</strong> use <em>sensitive data</em>, and we do <strong>no targeted ads</strong> or <strong>marketing profiling</strong> for minors.
              </p>
            </>
          ),
        },
        {
          id: "purposes",
          h: "Purposes & legal bases",
          body: (
            <>
              <ul>
                <li><strong>Service delivery (contract)</strong>: account, sync, progress tracking, learning features.</li>
                <li><strong>Improvement & security (legitimate interest)</strong>: aggregated stats, bug fixing, fraud/abuse prevention, security.</li>
                <li><strong>Service communications (legitimate interest)</strong>: important operational notices/changes.</li>
                <li><strong>Marketing (consent)</strong>: newsletters/offers. You can withdraw consent anytime.</li>
              </ul>
            </>
          ),
        },
        {
          id: "cookies",
          h: "Cookies & trackers",
          body: (
            <>
              <ul>
                <li><strong>Essential</strong>: auth, security, preferences (set without consent).</li>
                <li><strong>Privacy-friendly analytics</strong>: with anonymized IP where possible.</li>
                <li><strong>Marketing</strong>: only with prior consent. <strong>No targeted ads for minors.</strong></li>
              </ul>
              <p>You can manage your preferences anytime via the consent module (cookie icon or settings).</p>
            </>
          ),
        },
        {
          id: "minors",
          h: "Use by minors",
          body: (
            <>
              <p>
                Topiqo is an <strong>education app intended for minors</strong> (middle/high school).
                In France, the digital age of consent is <strong>15</strong>.
              </p>
              <ul>
                <li>If you are <strong>15 or older</strong>: you may use the app in line with this policy.</li>
                <li>If you are <strong>under 15</strong>: use requires <strong>verifiable parental consent</strong>. We may ask a parent/guardian to validate (e.g., email confirmation or another appropriate method).</li>
              </ul>
              <p>
                Parents/guardians may <strong>exercise rights</strong> (access, deletion, etc.) on the minor’s behalf by writing to{" "}
                <a className="link" href="mailto:privacy@topiqo.com">privacy@topiqo.com</a>.
              </p>
            </>
          ),
        },
        {
          id: "retention",
          h: "Retention",
          body: (
            <p>
              Data kept while the account is active. After deletion, data is erased or anonymized within <strong>24 months</strong> (unless the law requires otherwise).
            </p>
          ),
        },
        {
          id: "recipients",
          h: "Recipients",
          body: (
            <>
              <p>
                Access is limited to authorized Topiqo staff (need-to-know). Some data may be shared with{" "}
                <strong>processors</strong> (hosting, transactional email, privacy-friendly analytics).
              </p>
            </>
          ),
        },
        {
          id: "processors",
          h: "Processors & hosting",
          body: (
            <p>
              Hosting within the EU or equivalent (e.g., OVHcloud/Scaleway). Processors are bound by{" "}
              <abbr title="Data Processing Agreement">DPAs</abbr>, audited, and act only on Topiqo’s instructions.
            </p>
          ),
        },
        {
          id: "transfers",
          h: "International transfers",
          body: (
            <p>
              Where transfers occur, we implement <strong>appropriate safeguards</strong> (SCCs, TIAs) and <strong>minimization</strong>.
            </p>
          ),
        },
        {
          id: "security",
          h: "Security",
          body: (
            <>
              <ul>
                <li>Encryption in transit (TLS) and at rest where supported.</li>
                <li>Access controls, logging, regular backups.</li>
                <li>Security testing/patching following best practices.</li>
              </ul>
            </>
          ),
        },
        {
          id: "breach",
          h: "Data breach",
          body: (
            <p>
              If an incident occurs, we follow our incident process and notify the CNIL and/or data subjects when required.
            </p>
          ),
        },
        {
          id: "rights",
          h: "Your rights (GDPR)",
          body: (
            <>
              <p>
                Rights: <strong>access</strong>, <strong>rectification</strong>, <strong>erasure</strong>, <strong>objection</strong>, <strong>restriction</strong>, <strong>portability</strong>, <strong>withdrawal of consent</strong>.
                Write to <a className="link" href="mailto:privacy@topiqo.com">privacy@topiqo.com</a>. We respond within <strong>one month</strong> (extendable).
              </p>
              <p>
                Supervisory authority:{" "}
                <a className="link" href="https://www.cnil.fr" target="_blank" rel="noreferrer">CNIL</a>.
              </p>
            </>
          ),
        },
        {
          id: "changes",
          h: "Changes",
          body: (
            <p>
              We may update this policy. For material changes, we will inform you and update the date above.
            </p>
          ),
        },
        {
          id: "contact",
          h: "Contact",
          body: (
            <p>
              DPO: <a className="link" href="mailto:dpo@topiqo.com">dpo@topiqo.com</a> — Support:{" "}
              <a className="link" href="mailto:privacy@topiqo.com">privacy@topiqo.com</a> — Topiqo SAS, 10 rue Exemple, 75000 Paris.
            </p>
          ),
        },
      ],
    },
  }[lang];

  const T = i18n;

  const Section = ({ id, title, children }) => (
    <section id={id} className="privacy-card">
      <h3 className="privacy-card-title">{title}</h3>
      <div className="privacy-card-body">{children}</div>
    </section>
  );

  const ToC = () => (
    <aside className="privacy-toc" aria-label={T.toc}>
      <div className="privacy-toc-inner">
        <div className="privacy-toc-label">{T.toc}</div>
        <nav className="privacy-toc-links">
          {T.sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="privacy-toc-link">
              {s.h}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );

  return (
    <main className="privacy page">
      <div className="privacy-hero">
        <div className="privacy-meta">
          <span className="privacy-chip">{T.brand}</span>
          <span className="dot" aria-hidden>•</span>
          <span className="updated">{T.updated}</span>
        </div>
        <h1 className="privacy-title">{T.title}</h1>
        <p className="privacy-subtitle">{T.subtitle}</p>
        <p className="privacy-effective">{T.effective}</p>
      </div>

      <div className="privacy-layout">
        <div className="privacy-content">
          {T.sections.map((s) => (
            <Section key={s.id} id={s.id} title={s.h}>
              {s.body}
            </Section>
          ))}
        </div>

        <ToC />
      </div>

      <footer className="privacy-note">
        <p>
          Cette page présente les engagements de Topiqo au regard du RGPD et de la loi française. 
          En cas de divergence linguistique, la version française prévaut.
        </p>
      </footer>
    </main>
  );
}
