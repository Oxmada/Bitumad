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
  openGraph: {
    title: "Thadeus Externalia Juris – Externalisation Juridique",
    description: "Votre partenaire BPO spécialisé en formalités juridiques, comptables et sociales à Madagascar.",
    url: "https://www.jurisexternalia.com",
    siteName: "Thadeus Externalia Juris",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thadeus Externalia Juris",
    description: "Externalisation juridique, sociale et fiscale à Madagascar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J033ZDEWNC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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