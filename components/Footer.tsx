"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const footer = footerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-inner">
        <img src="/footer.png" alt="" className="footer-bg-image" aria-hidden="true" />

        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-name">THADEUS</div>
            <p>
              Libérez votre croissance,<br />
              nous sécurisons vos formalités.
            </p>

            <div className="footer-socials">
              <a href="https://www.instagram.com/thadeus.externalia.juris?igsh=MXExdzZ4OXJ6bTNjMw==" aria-label="Instagram">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61586899691901" aria-label="Facebook">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation + Contact */}
          <div className="footer-right-group">

            <div className="footer-nav">
              <h4>Navigation</h4>
              <Link href="/">Accueil</Link>
              <Link href="#services">Nos services</Link>
              <Link href="/contact">Contacts</Link>
              <Link href="/mentions-legales">Mentions légales</Link>
            </div>

            <div className="footer-contact">
              <h4>Informations de contacts</h4>

              <div className="footer-contact-item">
                <span>thadeus@jurisexternalia.com</span>
              </div>

              <div className="footer-contact-item">
                <span>+261 32 17 575 66</span>
              </div>

              <div className="footer-contact-item">
                <span>
                  Logement 149, Cité Lovasoa Ambatara<br />
                  Antananarivo 101, Madagascar
                </span>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <a href="https://oxmad-digital.mg/" rel="nofollow" target="_blank">
            Réalisé par Oxmad Digital
          </a>
          <span>©2026 THADEUS. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}