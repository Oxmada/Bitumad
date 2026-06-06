import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bebas_Neue, Instrument_Sans, JetBrains_Mono } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bitumad – Des routes solides à Madagascar",
  description:
    "Bitumad est votre partenaire de confiance pour la fourniture de bitume de pénétration 60/70 à Madagascar. Qualité conforme aux normes internationales ASTM.",
  keywords:
    "bitume Madagascar, bitume 60/70, routes Madagascar, BTP Madagascar, fourniture bitume, ASTM",
  authors: [{ name: "Bitumad" }],
  creator: "Bitumad",
  metadataBase: new URL("https://www.bitumad.mg"),
  alternates: { canonical: "/" },
  icons: { icon: "https://res.cloudinary.com/uuiwf5lx/image/upload/q_auto/f_auto/v1779650741/bitumad_logo_cercle_remove_v2_zcpvnc.webp" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${bebasNeue.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
