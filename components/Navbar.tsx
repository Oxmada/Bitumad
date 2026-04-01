"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
  <nav className="navbar">
    <div className="navbar-brand">
      <Image
  src="/logotr.png"
  alt="Thadeus Logo"
  width={200}
  height={90}
  style={{ 
    objectFit: 'contain',
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)'
  }}
/>

    </div>

      {/* ── Liens desktop ── */}
      <div className="navbar-links">
        <Link href="/">Accueil</Link>
        <Link href="/nos-services">Nos services</Link>
        <Link href="/contact">Contacts</Link>
      </div>

      {/* ── Bouton hamburger mobile ── */}
      <button className="navbar-hamburger" onClick={() => setOpen(!open)}>
        {open ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
      </button>

      {/* ── Menu mobile ── */}
      {open && (
        <div className="navbar-mobile">
          <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link href="/nos-services" onClick={() => setOpen(false)}>Nos services</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contacts</Link>
        </div>
      )}
    </nav>
  );
}