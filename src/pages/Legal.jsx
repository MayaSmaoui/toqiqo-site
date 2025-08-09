import React from "react";

export default function Legal({ lang = "fr" }) {
  const i18n = {
    fr: {
      brand: "Topiqo",
      title: "Mentions légales",
      subtitle:
        "Informations prévues par la loi française (LCEN) et rappels de conformité RGPD.",
      updated: "Dernière mise à jour : 9 août 2025",
      toc: "Sommaire",
      sections: [
        {
          id: "publisher",
          h: "Éditeur du site",
          body: (
            <>
              <p>
                <strong>Topiqo SAS</strong> — Société par actions simplifiée
                <br />
                Capital social : <strong>10&nbsp;000&nbsp;€</strong>
                <br />
                RCS : <strong>Paris</strong> — SIREN : <strong>000&nbsp;000&nbsp;000</strong>
                <br />
                Siège social : <strong>10 rue Exemple, 75000 Paris, France</strong>
                <br />
                N° TVA intracommunautaire : <strong>FRXX&nbsp;000000000</strong>
              </p>
              <p>
                Contact :{" "}
                <a className="link" href="mailto:contact@topiqo.com">
                  contact@topiqo.com
                </a>
              </p>
            </>
          ),
        },
        {
          id: "director",
          h: "Directeur de la publication",
          body: (
            <p>
              <strong>Maya [Nom de famille]</strong>. Pour toute demande relative au contenu éditorial :{" "}
              <a className="link" href="mailto:contact@topiqo.com">contact@topiqo.com</a>.
            </p>
          ),
        },
        {
          id: "host",
          h: "Hébergeur",
          body: (
            <p>
              OVHcloud — 2&nbsp;rue Kellermann, 59100 Roubaix, France —{" "}
              <a className="link" href="https://www.ovh.com" target="_blank" rel="noreferrer">
                ovh.com
              </a>
            </p>
          ),
        },
        {
          id: "ip",
          h: "Propriété intellectuelle",
          body: (
            <>
              <p>
                L’ensemble des contenus du site et de l’app Topiqo (textes, marques, logos, illustrations,
                interfaces, code, bases de données) est protégé par le droit français et international
                (droit d’auteur, droit des marques et droit sui generis du producteur de base de données).
              </p>
              <p>
                Toute reproduction, représentation, adaptation ou diffusion, totale ou partielle, sans
                autorisation écrite préalable de Topiqo, est interdite.
              </p>
            </>
          ),
        },
        {
          id: "use",
          h: "Conditions d’utilisation",
          body: (
            <>
              <p>
                L’utilisation du site et de l’app implique l’acceptation pleine et entière des présentes
                mentions ainsi que, le cas échéant, de nos conditions générales. Le service est fourni « en
                l’état ». Malgré nos efforts, des erreurs ou interruptions peuvent survenir.
              </p>
              <p>
                Topiqo ne saurait être tenue responsable des dommages indirects, immatériels ou non
                consécutifs résultant de l’usage du site ou de l’app. Les utilisateurs s’engagent à ne pas
                porter atteinte à l’ordre public, aux bonnes mœurs ou aux droits des tiers.
              </p>
            </>
          ),
        },
        {
          id: "links",
          h: "Liens hypertextes",
          body: (
            <p>
              Le site peut contenir des liens vers des sites tiers. Topiqo n’a aucun contrôle sur leur
              contenu et décline toute responsabilité quant aux informations qu’ils publient.
            </p>
          ),
        },
        {
          id: "notice",
          h: "Signalement de contenus illicites (LCEN art. 6.I.5)",
          body: (
            <>
              <p>
                Pour signaler un contenu illicite, merci d’envoyer une notification contenant : la date, votre
                identité, la description précise du contenu et son URL, les motifs juridiques, la copie de la
                correspondance adressée à l’auteur (si identifiable) pour en demander la modification/retrait.
              </p>
              <p>
                Adresse de signalement :{" "}
                <a className="link" href="mailto:contact@topiqo.com">contact@topiqo.com</a>
              </p>
            </>
          ),
        },
        {
          id: "privacy",
          h: "Données personnelles & cookies (RGPD / CNIL)",
          body: (
            <>
              <p>
                Le traitement de vos données personnelles est décrit dans notre{" "}
                <a className="link" href="/privacy">Politique de confidentialité</a> (bases légales,
                finalités, durées, droits, DPO, transferts, sécurité).
              </p>
              <p>
                Les cookies non essentiels (mesure d’audience non exempte de consentement, marketing) ne sont
                déposés qu’avec votre consentement préalable et peuvent être configurés à tout moment via le module de préférences.
              </p>
              <p>
                Autorité de contrôle compétente :{" "}
                <a className="link" href="https://www.cnil.fr" target="_blank" rel="noreferrer">CNIL</a>.
              </p>
            </>
          ),
        },
        {
          id: "mediation",
          h: "Médiation de la consommation (art. L612-1 C. conso.)",
          body: (
            <>
              <p>
                Si vous êtes consommateur et qu’un litige persiste après réclamation écrite, vous pouvez recourir gratuitement à un médiateur de la consommation.
              </p>
              <p>
                Médiateur compétent : <em>à préciser si vous vendez à des consommateurs</em> (ex. Médiation
                e-commerce FEVAD, CM2C, etc.). Plateforme européenne de RLL :{" "}
                <a className="link" href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">
                  ec.europa.eu/consumers/odr
                </a>.
              </p>
            </>
          ),
        },
        {
          id: "law",
          h: "Droit applicable & juridiction",
          body: (
            <p>
              Les présentes sont régies par le droit français. Sous réserve de dispositions légales
              impératives, les tribunaux compétents sont ceux du ressort du siège de Topiqo.
            </p>
          ),
        },
        {
          id: "contact",
          h: "Contact",
          body: (
            <p>
              Topiqo SAS — 10&nbsp;rue Exemple, 75000 Paris —{" "}
              <a className="link" href="mailto:contact@topiqo.com">contact@topiqo.com</a>
            </p>
          ),
        },
      ],
    },
    en: {
      brand: "Topiqo",
      title: "Legal Notice",
      subtitle:
        "Information required under French law (LCEN) and GDPR/CNIL compliance reminders.",
      updated: "Last updated: August 9, 2025",
      toc: "Contents",
      sections: [
        {
          id: "publisher",
          h: "Publisher",
          body: (
            <>
              <p>
                <strong>Topiqo SAS</strong> — Simplified joint-stock company (SAS)
                <br />
                Share capital: <strong>€10,000</strong>
                <br />
                Trade Register: <strong>Paris</strong> — SIREN: <strong>000&nbsp;000&nbsp;000</strong>
                <br />
                Registered office: <strong>10 rue Exemple, 75000 Paris, France</strong>
                <br />
                EU VAT: <strong>FRXX&nbsp;000000000</strong>
              </p>
              <p>
                Contact: <a className="link" href="mailto:contact@topiqo.com">contact@topiqo.com</a>
              </p>
            </>
          ),
        },
        {
          id: "director",
          h: "Publication director",
          body: (
            <p>
              <strong>Maya [Last name]</strong>. For editorial inquiries:{" "}
              <a className="link" href="mailto:contact@topiqo.com">contact@topiqo.com</a>.
            </p>
          ),
        },
        {
          id: "host",
          h: "Hosting",
          body: (
            <p>
              OVHcloud — 2 rue Kellermann, 59100 Roubaix, France —{" "}
              <a className="link" href="https://www.ovh.com" target="_blank" rel="noreferrer">ovh.com</a>
            </p>
          ),
        },
        {
          id: "ip",
          h: "Intellectual property",
          body: (
            <>
              <p>
                All content on the Topiqo site and app (texts, trademarks, logos, illustrations, interfaces,
                code, databases) is protected by French and international law.
              </p>
              <p>
                Any reproduction, representation, adaptation or distribution without prior written consent
                from Topiqo is prohibited.
              </p>
            </>
          ),
        },
        {
          id: "use",
          h: "Terms of use",
          body: (
            <>
              <p>
                Using the site and app implies full acceptance of the legal notice and, where applicable, our
                terms. The service is provided “as is”. Errors or interruptions may occur.
              </p>
              <p>
                Topiqo cannot be held liable for indirect or non-material damages resulting from use of the
                site or app. Users agree not to infringe public order, morality or third-party rights.
              </p>
            </>
          ),
        },
        {
          id: "links",
          h: "Hyperlinks",
          body: (
            <p>
              The site may contain links to third-party websites. Topiqo has no control over those contents
              and accepts no responsibility for them.
            </p>
          ),
        },
        {
          id: "notice",
          h: "Notice & takedown (French LCEN art. 6.I.5)",
          body: (
            <>
              <p>
                To report illegal content, please send a notice including: date, your identity, precise
                description and URL, legal grounds, and any prior request to the author (if identifiable).
              </p>
              <p>
                Report address:{" "}
                <a className="link" href="mailto:contact@topiqo.com">contact@topiqo.com</a>
              </p>
            </>
          ),
        },
        {
          id: "privacy",
          h: "Personal data & cookies (GDPR / CNIL)",
          body: (
            <>
              <p>
                Processing of your personal data is described in our{" "}
                <a className="link" href="/privacy">Privacy Policy</a> (legal bases, purposes, retention,
                rights, DPO, transfers, security).
              </p>
              <p>
                Non-essential cookies (analytics requiring consent, marketing) are set only with your prior
                consent and can be managed anytime in the preferences module.
              </p>
              <p>
                Supervisory authority in France:{" "}
                <a className="link" href="https://www.cnil.fr" target="_blank" rel="noreferrer">CNIL</a>.
              </p>
            </>
          ),
        },
        {
          id: "mediation",
          h: "Consumer mediation (Art. L612-1 Consumer Code)",
          body: (
            <>
              <p>
                If you are a consumer and a dispute remains after a written complaint, you may use a consumer
                mediation service free of charge.
              </p>
              <p>
                Competent mediator: <em>to be specified if you sell to consumers</em> (e.g., FEVAD mediation,
                CM2C). EU ODR platform:{" "}
                <a className="link" href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">
                  ec.europa.eu/consumers/odr
                </a>.
              </p>
            </>
          ),
        },
        {
          id: "law",
          h: "Governing law & jurisdiction",
          body: (
            <p>
              These notices are governed by French law. Subject to mandatory provisions, competent courts are
              those of Topiqo’s registered office.
            </p>
          ),
        },
        {
          id: "contact",
          h: "Contact",
          body: (
            <p>
              Topiqo SAS — 10 rue Exemple, 75000 Paris —{" "}
              <a className="link" href="mailto:contact@topiqo.com">contact@topiqo.com</a>
            </p>
          ),
        },
      ],
    },
  }[lang];

  const T = i18n;

  const Section = ({ id, title, children }) => (
    <section id={id} className="legal-card">
      <h3 className="legal-card-title">{title}</h3>
      <div className="legal-card-body">{children}</div>
    </section>
  );

  const ToC = () => (
    <aside className="legal-toc" aria-label={T.toc}>
      <div className="legal-toc-inner">
        <div className="legal-toc-label">{T.toc}</div>
        <nav className="legal-toc-links">
          {T.sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="legal-toc-link">
              {s.h}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );

  return (
    <main className="legal-page page">
      <div className="legal-hero">
        <div className="legal-meta">
          <span className="legal-chip">{T.brand}</span>
          <span className="dot" aria-hidden>•</span>
          <span className="updated">{T.updated}</span>
        </div>
        <h1 className="legal-title">{T.title}</h1>
        <p className="legal-subtitle">{T.subtitle}</p>
      </div>

      <div className="legal-layout">
        <div className="legal-content">
          {T.sections.map((s) => (
            <Section key={s.id} id={s.id} title={s.h}>
              {s.body}
            </Section>
          ))}
        </div>

        <ToC />
      </div>

      <footer className="legal-note">
        <p>
          Remplace les identifiants (SIREN, TVA, RCS) par les valeurs officielles. Si tu vends à des
          consommateurs, indique le médiateur choisi.
        </p>
      </footer>
    </main>
  );
}
