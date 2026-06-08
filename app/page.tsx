"use client";
import "./page.css";
import { useState, useEffect } from "react";

type ProjetType = "route" | "voirie" | "aeroport" | "autre";

const TICKER_ITEMS = [
  "DURABILITÉ ÉPROUVÉE",
  "PERFORMANCE OPTIMALE",
  "SÉCURITÉ RENFORCÉE",
  "QUALITÉ CERTIFIÉE ASTM",
  "LIVRAISON PARTOUT À MADAGASCAR",
  "BITUME 60/70",
];

const RADIO_OPTIONS: { value: ProjetType; label: string; sub: string }[] = [
  { value: "route", label: "Route nationale / régionale", sub: "Infrastructure" },
  { value: "voirie", label: "Voirie urbaine", sub: "Milieu urbain" },
  { value: "aeroport", label: "Aéroport / parking / zone industrielle", sub: "Spécialisé" },
  { value: "autre", label: "Autre projet", sub: "À préciser" },
];

export default function HomePage() {
  const [projet, setProjet] = useState<ProjetType>("route");

  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => obs.observe(el));

    // Hero items reveal immediately on mount
    document.querySelectorAll<HTMLElement>(".hero .reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 200 + i * 150);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow reveal">Fournisseur de bitume · Madagascar</div>
          <h1 className="hero-title reveal reveal-delay-2">
            DES ROUTES <em>SOLIDES</em><br />
            COMMENCENT ICI
          </h1>
          <p className="hero-sub reveal reveal-delay-3">
            Bitumad est votre partenaire de confiance pour des routes durables
            à Madagascar. Bitume haute qualité conforme aux normes
            internationales ASTM.
          </p>
          <div className="hero-actions reveal reveal-delay-4">
            <a href="#commander" className="btn-primary">
              Commander maintenant
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a href="#notreproduit" className="btn-ghost">
              Voir la fiche technique
            </a>
          </div>
        </div>
        <div className="ticker-wrap">
          <div className="ticker-track" aria-hidden="true">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span className="ticker-item" key={i}>
                {item} <span className="ticker-dot" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── À PROPOS ─── */}
      <section id="apropos">
        <div className="eyebrow reveal">À propos</div>
        <h2 className="section-title reveal reveal-delay-1">
          VOTRE PARTENAIRE<br />EN BITUME
        </h2>
        <div className="about-grid">
          <div className="about-body reveal reveal-delay-2">
            <p>
              Bitumad est une entreprise spécialisée dans la fourniture de
              bitume à Madagascar. Nous proposons un bitume de pénétration
              60/70, conforme aux normes internationales, idéal pour la
              construction et l'entretien des routes.
            </p>
            <p>
              Nos produits s'adressent aussi bien aux institutions publiques,
              aux entreprises de BTP qu'aux particuliers, garantissant qualité,
              durabilité et performance pour vos projets d'infrastructure.
            </p>
          </div>
          <div className="features-grid reveal reveal-delay-3">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="feature-title">Durabilité éprouvée</div>
              <div className="feature-desc">
                Excellente résistance au vieillissement et grande stabilité
                pour la longévité des routes.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div className="feature-title">Performance optimale</div>
              <div className="feature-desc">
                Pénétrabilité contrôlée (60/70) et point de ramollissement
                adapté aux conditions climatiques.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="feature-title">Sécurité renforcée</div>
              <div className="feature-desc">
                Point éclair élevé (≥ 250 °C) minimisant les risques liés au
                transport et à l'application.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div className="feature-title">Qualité certifiée</div>
              <div className="feature-desc">
                Conforme aux normes ASTM internationales, garantissant un
                produit fiable et performant.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FICHE TECHNIQUE ─── */}
      <section id="notreproduit">
        <div className="product-header">
          <div>
            <div className="eyebrow reveal">Notre bitume</div>
            <h2 className="section-title reveal reveal-delay-1">
              FICHE TECHNIQUE<br />BITUME 60/70
            </h2>
          </div>
          <p className="section-lead reveal reveal-delay-2" style={{ maxWidth: "340px", textAlign: "right" }}>
            Caractéristiques conformes aux normes ASTM pour la construction et
            l'entretien des routes à Madagascar.
          </p>
        </div>

        <div className="reveal reveal-delay-2">
          <table className="spec-table">
            <thead>
              <tr>
                <th>Intitulé</th>
                <th>Méthode</th>
                <th>Unité</th>
                <th>Min.</th>
                <th>Max.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gravité spécifique à 25 °C</td>
                <td className="method">ASTM D70</td>
                <td className="unit">kg/m³</td>
                <td><span className="val-badge val-min">1.01</span></td>
                <td><span className="val-badge val-max">1.06</span></td>
              </tr>
              <tr>
                <td>Pénétrabilité à 25 °C, 100g, 5s</td>
                <td className="method">ASTM D5</td>
                <td className="unit">0.1 mm</td>
                <td><span className="val-badge val-min">60</span></td>
                <td><span className="val-badge val-max">70</span></td>
              </tr>
              <tr>
                <td>Point de ramollissement</td>
                <td className="method">ASTM D36</td>
                <td className="unit">°C</td>
                <td><span className="val-badge val-min">49</span></td>
                <td><span className="val-badge val-max">56</span></td>
              </tr>
              <tr>
                <td>Ductilité à 25 °C</td>
                <td className="method">ASTM D113</td>
                <td className="unit">cm</td>
                <td><span className="val-badge val-min">100</span></td>
                <td><span className="val-dash">—</span></td>
              </tr>
              <tr>
                <td>Perte au chauffage</td>
                <td className="method">ASTM D6</td>
                <td className="unit">% wt</td>
                <td><span className="val-dash">—</span></td>
                <td><span className="val-badge val-max">0.2</span></td>
              </tr>
              <tr>
                <td>Baisse de pénétrabilité après chauffage</td>
                <td className="method">ASTM D5</td>
                <td className="unit">%</td>
                <td><span className="val-dash">—</span></td>
                <td><span className="val-badge val-max">20</span></td>
              </tr>
              <tr>
                <td>Point éclair</td>
                <td className="method">ASTM D92</td>
                <td className="unit">°C</td>
                <td><span className="val-badge val-min">250</span></td>
                <td><span className="val-dash">—</span></td>
              </tr>
              <tr>
                <td>Solubilité dans le trichloréthylène</td>
                <td className="method">ASTM D2042</td>
                <td className="unit">% wt</td>
                <td><span className="val-badge val-min">99</span></td>
                <td><span className="val-dash">—</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── PROCESSUS DE COMMANDE ─── */}
      <section id="commander">
        <div className="eyebrow reveal">Commander</div>
        <h2 className="section-title reveal reveal-delay-1">
          PROCESSUS DE COMMANDE
        </h2>
        <p className="section-lead reveal reveal-delay-2">
          Un parcours simple et rapide — de la demande de devis à la livraison
          sur site.
        </p>

        <div className="process-grid">
          <div className="process-step reveal reveal-delay-2">
            <div className="process-number">01</div>
            <div className="process-step-num">ÉTAPE 01</div>
            <div className="process-title">Demande de devis</div>
            <div className="process-desc">
              Remplissez notre formulaire de contact ou appelez-nous pour nous
              communiquer vos besoins en bitume. Notre équipe analyse votre
              demande et prépare une proposition claire et adaptée à votre
              projet.
            </div>
          </div>
          <div className="process-step reveal reveal-delay-3">
            <div className="process-number">02</div>
            <div className="process-step-num">ÉTAPE 02</div>
            <div className="process-title">Confirmation de commande</div>
            <div className="process-desc">
              Après validation du devis, nous confirmons ensemble les
              quantités, les modalités de paiement et le calendrier de
              livraison.
            </div>
          </div>
          <div className="process-step reveal reveal-delay-4">
            <div className="process-number">03</div>
            <div className="process-step-num">ÉTAPE 03</div>
            <div className="process-title">Livraison sur site</div>
            <div className="process-desc">
              Nous organisons la logistique et assurons le transport du bitume
              directement jusqu'à votre chantier, partout à Madagascar, avec
              un suivi rigoureux pour respecter les délais.
            </div>
          </div>
        </div>
      </section>

      {/* ─── DEVIS ─── */}
      <section id="devis">
        <div className="eyebrow reveal">Demande de devis</div>
        <h2 className="section-title reveal reveal-delay-1">
          OBTENEZ VOTRE DEVIS GRATUIT
        </h2>
        <p className="section-lead reveal reveal-delay-2">
          Remplissez ce formulaire et notre équipe vous répond sous 24h avec
          une proposition adaptée à votre chantier.
        </p>

        <div className="devis-layout">
          {/* Colonne gauche */}
          <div className="devis-left reveal reveal-delay-2">
            <div className="devis-promise">
              <div className="devis-promise-item">
                <div className="devis-promise-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="devis-promise-title">Réponse sous 24h</div>
                  <div className="devis-promise-desc">
                    Notre équipe traite chaque demande rapidement et vous
                    envoie une proposition claire.
                  </div>
                </div>
              </div>
              <div className="devis-promise-item">
                <div className="devis-promise-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="devis-promise-title">Livraison sur site</div>
                  <div className="devis-promise-desc">
                    Transport organisé directement jusqu'à votre chantier,
                    partout à Madagascar.
                  </div>
                </div>
              </div>
            </div>

            <div className="devis-contact-direct">
              <div className="devis-contact-label">Préférez appeler ?</div>
              <div className="devis-phone">
                <div className="devis-phone-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.98-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                +261 38 81 202 93
              </div>
              <div className="devis-hours">Disponible du lundi au vendredi</div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="devis-form reveal reveal-delay-3">
            <div className="devis-form-header">
              <span className="devis-form-title">
                Informations pour votre devis
              </span>
              <span className="devis-form-step">Tous les champs sont requis</span>
            </div>

            <div className="devis-form-body">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="dv-nom">Nom complet</label>
                  <input type="text" id="dv-nom" placeholder="Jean Rakoto" />
                </div>
                <div className="form-field">
                  <label htmlFor="dv-org">Entreprise / Organisation</label>
                  <input type="text" id="dv-org" placeholder="BTP Madagascar SARL" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="dv-tel">Téléphone</label>
                  <input type="tel" id="dv-tel" placeholder="+261 XX XX XXX XX" />
                </div>
                <div className="form-field">
                  <label htmlFor="dv-email">Email</label>
                  <input type="email" id="dv-email" placeholder="jean@exemple.com" />
                </div>
              </div>

              <div className="form-field">
                <label>Type de projet</label>
                <div className="radio-group">
                  {RADIO_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={`radio-option${projet === opt.value ? " selected" : ""}`}
                      onClick={() => setProjet(opt.value)}
                    >
                      <input
                        type="radio"
                        name="projet"
                        value={opt.value}
                        readOnly
                        checked={projet === opt.value}
                      />
                      <div className="radio-dot" />
                      <span className="radio-label">{opt.label}</span>
                      <span className="radio-sub">{opt.sub}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="dv-qte">Quantité estimée</label>
                  <div className="select-wrap">
                    <select id="dv-qte">
                      <option value="">Sélectionner…</option>
                      <option>Moins de 5 tonnes</option>
                      <option>5 – 20 tonnes</option>
                      <option>20 – 50 tonnes</option>
                      <option>50 – 100 tonnes</option>
                      <option>Plus de 100 tonnes</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="dv-region">Région de livraison</label>
                  <input
                    type="text"
                    id="dv-region"
                    placeholder="Ex : Antananarivo, Toamasina…"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="dv-msg">Détails supplémentaires</label>
                <textarea
                  id="dv-msg"
                  placeholder="Décrivez votre chantier, le calendrier souhaité, ou toute information utile pour préparer votre devis…"
                />
              </div>
            </div>

            <div className="devis-form-footer">
              <p className="devis-form-note">
                Vos données sont utilisées uniquement pour traiter votre
                demande de devis. Aucune divulgation à des tiers.
              </p>
              <button className="form-submit">
                Envoyer ma demande
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <line x1="2" y1="8" x2="14" y2="8" />
                  <polyline points="10,4 14,8 10,12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
