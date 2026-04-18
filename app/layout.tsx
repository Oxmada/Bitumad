import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Thadeus Externalia Juris – Externalisation Juridique, Sociale et Fiscale",
  description: "Thadeus Externalia Juris (SARL) est votre partenaire de confiance spécialisé dans l'externalisation (BPO) des formalités juridiques, administratives et sociales à Madagascar.",
  keywords: "externalisation juridique, BPO Madagascar, formalités juridiques, INPI, expert-comptable, création entreprise, secrétariat juridique, gestion paie, ingénierie fiscale, cabinet juridique madagascar, externalisation comptable",
  authors: [{ name: "Thadeus Externalia Juris" }],
  creator: "Thadeus Externalia Juris",
  metadataBase: new URL("https://www.jurisexternalia.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* OPTIMISATION LCP : 
          On force le navigateur à télécharger l'image de fond immédiatement.
          Cela évite d'attendre que le fichier CSS soit chargé et lu.
        */}
        <link
          rel="preload"
          href="/hero-bg.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* OPTIMISATION PERFORMANCE : 
          Utilisation de 'lazyOnload' pour Google Analytics. 
          Le script ne se chargera qu'une fois que la page est totalement prête,
          ce qui libère du processeur pour l'affichage initial (FCP).
        */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J033ZDEWNC"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J033ZDEWNC');
          `}
        </Script>
      </body>
    </html>
  );
}