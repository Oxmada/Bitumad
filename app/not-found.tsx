import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable – Bitumad",
  description: "La page que vous recherchez n'existe pas. Retournez à l'accueil de Bitumad.",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "64px 24px",
        gap: "24px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(80px, 20vw, 160px)",
          lineHeight: 1,
          color: "var(--green)",
          opacity: 0.15,
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        404
      </div>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 5vw, 48px)",
          letterSpacing: "0.04em",
          marginTop: "-40px",
        }}
      >
        PAGE INTROUVABLE
      </h1>
      <p style={{ color: "var(--muted)", maxWidth: "420px", lineHeight: 1.7 }}>
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            background: "var(--green)",
            color: "var(--black)",
            padding: "12px 28px",
            fontFamily: "var(--font-display)",
            letterSpacing: "0.08em",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          RETOUR À L&apos;ACCUEIL
        </Link>
        <Link
          href="/notre-bitume"
          style={{
            border: "1px solid var(--border)",
            color: "var(--fg)",
            padding: "12px 28px",
            fontFamily: "var(--font-display)",
            letterSpacing: "0.08em",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          NOS PRODUITS
        </Link>
      </div>
    </div>
  );
}
