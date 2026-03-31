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
        <div className="navbar-logo">
          <Image
            src="/thadeuslogo.png"
            alt="Thadeus Logo"
            width={300}
            height={100}
            style={{ objectFit: 'contain' }}
          />
        </div>
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