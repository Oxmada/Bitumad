"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <a href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://res.cloudinary.com/uuiwf5lx/image/upload/q_auto/f_auto/v1779650741/Bitumad-logo-simple_nal1lr.webp" alt="Bitumad" style={{ height: "40px", width: "auto" }} />
      </a>

      <ul className="nav-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/a-propos">À propos</a></li>
        <li><a href="/notre-bitume">Notre bitume</a></li>
        <li><a href="/contact" className="nav-cta">Contact</a></li>
      </ul>

      <a href="/#commander" className="nav-cmd">Commander</a>

      <button
        className="nav-hamburger"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
      >
        {open ? <X size={22} color="var(--white)" /> : <Menu size={22} color="var(--white)" />}
      </button>

      {open && (
        <div className="nav-mobile">
          <a href="/" onClick={() => setOpen(false)}>Accueil</a>
          <a href="/a-propos" onClick={() => setOpen(false)}>À propos</a>
          <a href="/notre-bitume" onClick={() => setOpen(false)}>Notre bitume</a>
          <a href="/#commander" className="nav-cmd" onClick={() => setOpen(false)}>Commander</a>
          <a href="/contact" className="nav-cta" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
