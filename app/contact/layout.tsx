import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devis bitume 60/70 & 35/50 — Contactez-nous",
  description:
    "Obtenez un devis bitume 60/70 ou 35/50 sous 24h. Bitumad livre sur tout le territoire malgache — routes nationales, voiries urbaines, aéroports, ports.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contactez Bitumad — Devis bitume sous 24h",
    description:
      "Un devis adapté à votre chantier sous 24h. Bitumad livre du bitume 60/70 et 35/50 partout à Madagascar — routes, voiries, aéroports, ports.",
    url: "https://www.bitumad.mg/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
