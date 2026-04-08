"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Image from "next/image";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SERVICES = [
  {
    icon: "/accounting_5278345.png",
    title: "Externalisation des traitements comptables",
    desc: "Sous-traitement de la préparation et du traitement des dossiers comptables, sans effectuer directement les déclarations qui doivent obligatoirement être certifiées par un expert-comptable.",
  },
  {
    icon: "/icone_contrat.png",
    title: "Création & Formalités",
    desc: "Prise en charge de A à Z : rédaction des statuts, gestion des annonces légales et immatriculation (INPI/EDBM). Un interlocuteur unique pour un Kbis sans délai.",
  },
  {
    icon: "/call-center_2068857.png",
    title: "Secrétariat juridique",
    desc: "Gestion du juridique annuel (approbation des comptes) et exceptionnel (transferts, cessions, modifications). Une haute capacité d'absorption pour vos flux massifs.",
  },
  {
    icon: "/icone_paie.png",
    title: "Gestion Sociale & Paie",
    desc: "Établissement des bulletins de paie, DSN, rédaction des contrats de travail et gestion des organismes (URSSAF, mutuelles). Sécurisez votre gestion RH au quotidien.",
  },
  {
    icon: "/icone_ingénierie.png",
    title: "Ingénierie fiscale",
    desc: "Accompagnement sur les holdings, restructurations, pactes d'associés et flux intra-groupe. Une expertise technique en coordination avec vos conseils habituels.",
  },
];

const STEPS = [
  { n: 1, title: "Conseil & Cadrage stratégique", desc: "Un échange initial pour valider vos choix stratégiques (régime d'imposition, TVA, capital social) et définir le périmètre de la mission." },
  { n: 2, title: "Rédaction & Collecte des pièces", desc: "Nos experts rédigent vos actes sur-mesure (statuts, PV, contrats). Nous centralisons les justificatifs et coordonnons le dépôt des fonds." },
  { n: 3, title: "Signature & Téléprocédures", desc: "Signature électronique sécurisée (Yousign/Oneflow) et saisie immédiate sur le Guichet Unique (INPI) par nos formalistes dédiés." },
  { n: 4, title: "Livraison & Livrables de synthèse", desc: "Réception de votre K-bis à jour et remise d'une plaquette de synthèse claire expliquant les impacts de l'opération réalisée." },
];

const FAQS = [
  { q: "Quels types de structures accompagnez-vous ?", a: "Nous intervenons pour tous types de formes juridiques françaises (SARL, SAS, SCI, Holding, etc.), qu'il s'agisse de créations, de gestion courante ou d'opérations complexes de restructuration. Nous travaillons principalement en partenariat avec des experts-comptables." },
  { q: "Comment garantissez-vous la sécurité de mes données ?", a: "La confidentialité est au cœur de notre métier. Nous utilisons des outils de signature électronique sécurisés (Yousign/Oneflow) et pouvons travailler directement sur vos logiciels métiers (Pennylane, Sage, etc.) via des accès sécurisés pour garantir une continuité parfaite sans rupture de données." },
  { q: "Quels sont vos délais pour l'obtention d'un Kbis ?", a: "Pour une création classique, nous obtenons généralement le Kbis en 2 à 5 jours ouvrés après le dépôt sur le Guichet Unique. Pour les activités artisanales (CMA), les délais peuvent varier entre 4 et 6 semaines selon les chambres consulaires." },
  { q: "Pouvez-vous travailler sur nos propres outils métiers ?", a: " Tout à fait. Nos équipes sont formées aux logiciels standards du marché (Pennylane, Sage, Cegid, MyUnisoft, etc.). Nous nous intégrons directement à votre écosystème digital pour que notre intervention soit transparente et n'ajoute aucune friction à vos processus actuels." },
  { q: "Comment gérez-vous la distance ?", a: "Madagascar ne possède qu'une à deux heures de décalage avec la France (selon la saison). Cela nous permet de travailler en parfaite synchro avec vos horaires de bureau. Nos processus sont 100% digitalisés, vous offrant une réactivité identique, voire supérieure, à un collaborateur en interne." },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Hero />

      {/* ── À PROPOS ── */}
      <section className="about">
        <div className="about-inner">
          <div className="about-container">
            <div className="about-left">
              <span className="section-label">A propos</span>
              <h2>Libérez votre croissance, nous sécurisons vos formalités.</h2>
            </div>
            <div className="about-right">
              <p>Basés à Madagascar, nous accompagnons les experts-comptables et dirigeants pour transformer les contraintes administratives en leviers de réussite.</p>
              <p>Nous agissons comme le prolongement naturel de vos bureaux, vous permettant de vous concentrer sur votre cœur de métier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services" id="services">
        <div className="services-container">
          <div className="services-inner">
            <div className="services-header">
              <span className="section-label">Nos services</span>
              <h2>Un accompagnement 360°<br />pour vos formalités</h2>
            </div>

            {/* --- VERSION MOBILE (CAROUSEL 1 CARTE) --- */}
            <div className="mobile-only-carousel">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  nextEl: ".next-service",
                  prevEl: ".prev-service",
                }}
              >
                {SERVICES.map((service, i) => (
                  <SwiperSlide key={i}>
                    <div className="service-card">
                      <div className="service-icon">
                        <Image src={service.icon} alt={service.title} width={40} height={40} />
                      </div>
                      <h3>{service.title}</h3>
                      <div className="service-content-wrapper">
                        <p>{service.desc}</p>
                        <div className="carousel-nav-inline">
                          <button className="nav-btn prev-service" aria-label="Précédent">
                            <svg width="24" height="24" fill="none" stroke="#C5A059" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
                          </button>
                          <button className="nav-btn next-service" aria-label="Suivant">
                            <svg width="24" height="24" fill="none" stroke="#C5A059" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* --- VERSION DESKTOP (GRILLE) --- */}
            <div className="services-grid desktop-only-grid">
              {SERVICES.map((service, i) => (
                <div className="service-card" key={i}>
                  <div className="service-icon">
                    <Image src={service.icon} alt={service.title} width={40} height={40} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="services-cta">
              <a href="/nos-services" className="btn-gold">En savoir plus</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section className="how">
        <div className="how-inner">
          <div className="how-header">
            <div className="how-header-left">
              <span className="section-label">Notre approche</span>
              <h2>Comment nous<br />collaborons ?</h2>
            </div>
            <div className="how-header-right">
              <p>Chez Thadéus Externalia Juris, nous avons modélisé des processus rigoureux pour vous garantir
                 réactivité et sécurité à chaque étape de la vie de vos dossiers.</p>
            </div>
          </div>
          <div className="how-steps">
            {STEPS.map((step) => (
              <div className="step-card" key={step.n}>
                <div className="step-number"><span>{step.n}</span></div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq">
        <div className="faq-inner">
          <div className="main-container">
            <div className="faq-header">
              <span className="section-label">FAQ</span>
             
               <div className="faq-title-container">
                <h2>Vous avez des questions ?</h2>
              </div>
              <p>Nous répondons aux interrogations les plus fréquentes des cabinets et entreprises pour
                faciliter votre transition vers l'externalisation.</p>
            </div>
          
            <div className="faq-list">
              {FAQS.map((faq, i) => (
                <div className="faq-item" key={i}>
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                   <span className="faq-chevron">
  {openFaq === i ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15"/>
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )}
</span>
                  </button>
                  {openFaq === i && <div className="faq-answer">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta" id="contact">
        <div className="cta-inner">
          <div className="txt-container">
            <h2>Besoin de plus d&apos;informations ?</h2>
            <p>Notre équipe se tient à disposition pour répondre à toutes vos questions.</p>
          </div>
          <a href="thadeus@jurisexternalia.com" className="btn-gold">Contactez-nous !</a>
        </div>
      </section>
    </>
  );
}