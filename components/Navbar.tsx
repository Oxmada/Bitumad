"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [bitumesOpen, setBitumesOpen] = useState(false);

  return (
    <nav className="nav">
      <a href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/uuiwf5lx/image/upload/v1784570915/Bitumad-logo-simple_white_cfpbuq.png"
          alt="Bitumad"
          className="nav-logo-img nav-logo-img--dark"
          style={{ height: "40px", width: "auto" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/uuiwf5lx/image/upload/v1784570923/bitumad_logo_rectangle_vcffyo.webp"
          alt="Bitumad"
          className="nav-logo-img nav-logo-img--light"
          style={{ height: "40px", width: "auto" }}
        />
      </a>

      <ul className="nav-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/a-propos">À propos</a></li>
        <li className="nav-dropdown-item">
          <a href="/notre-bitume" className="nav-dropdown-trigger" aria-haspopup="true">
            Nos bitumes
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-chevron" aria-hidden="true" focusable="false">
              <polyline points="2,4 6,8 10,4" />
            </svg>
          </a>
          <div className="nav-dropdown">
            <a href="/notre-bitume">Catalogue</a>
            <a href="/notre-bitume/60-70">
              <span className="nav-dropdown-grade">60/70</span>
              Zones intérieures
            </a>
            <a href="/notre-bitume/35-50">
              <span className="nav-dropdown-grade nav-dropdown-grade--new">35/50</span>
              Zones côtières
              <span className="nav-dropdown-new">Nouveau</span>
            </a>
          </div>
        </li>
        <li><a href="/contact" className="nav-cta">Contact</a></li>
      </ul>

      <div className="nav-cta-group">
        <a href="/#devis" className="nav-cmd">Obtenir un devis</a>
        <ThemeToggle />

        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} color="var(--white)" /> : <Menu size={22} color="var(--white)" />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          <a href="/" onClick={() => setOpen(false)}>Accueil</a>
          <a href="/a-propos" onClick={() => setOpen(false)}>À propos</a>
          <button
            className="nav-mobile-group-btn"
            onClick={() => setBitumesOpen(!bitumesOpen)}
            aria-expanded={bitumesOpen}
            aria-controls="nav-mobile-submenu"
          >
            Nos bitumes
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12, transition: "transform 0.2s", transform: bitumesOpen ? "rotate(180deg)" : "none" }} aria-hidden="true" focusable="false">
              <polyline points="2,4 6,8 10,4" />
            </svg>
          </button>
          {bitumesOpen && (
            <div className="nav-mobile-submenu" id="nav-mobile-submenu">
              <a href="/notre-bitume" onClick={() => setOpen(false)}>Catalogue</a>
              <a href="/notre-bitume/60-70" onClick={() => setOpen(false)}>Bitume 60/70 — Zones intérieures</a>
              <a href="/notre-bitume/35-50" onClick={() => setOpen(false)}>
                Bitume 35/50 — Zones côtières <span className="nav-mobile-new">Nouveau</span>
              </a>
            </div>
          )}
          <a href="/#devis" className="nav-cmd" onClick={() => setOpen(false)}>Obtenir un devis</a>
          <a href="/contact" className="nav-cta" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
