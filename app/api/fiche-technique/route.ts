import { NextResponse } from "next/server";
import { pdf, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import React from "react";

const BRAND = {
  black: "#0c0c0b",
  dark: "#161614",
  white: "#f5f2eb",
  sand: "#e8dfc8",
  green: "#1D9E75",
  greenDim: "#d4f0e7",
  muted: "#7a7a72",
  limit: "#f0906a",
  border: "#e2ddd2",
};

const s = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    paddingTop: 0,
    paddingBottom: 40,
    paddingHorizontal: 0,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#1a1a18",
  },
  page2: {
    backgroundColor: "#ffffff",
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 0,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#1a1a18",
  },
  // ─── Header ───
  header: {
    backgroundColor: BRAND.black,
    paddingHorizontal: 40,
    paddingTop: 28,
    paddingBottom: 22,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  headerLeft: { flexDirection: "column", gap: 4 },
  headerBrand: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: BRAND.white,
    letterSpacing: 3,
  },
  headerSub: {
    fontSize: 8,
    color: BRAND.green,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  headerRight: { alignItems: "flex-end" },
  headerDocType: {
    fontSize: 8,
    color: BRAND.muted,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  headerDate: {
    fontSize: 7,
    color: BRAND.muted,
    marginTop: 2,
  },
  // ─── Green banner ───
  greenBanner: {
    backgroundColor: BRAND.green,
    paddingHorizontal: 40,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greenBannerTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
    letterSpacing: 1,
  },
  greenBannerGrade: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    color: "rgba(255,255,255,0.25)",
    letterSpacing: 2,
  },
  // ─── Body ───
  body: {
    paddingHorizontal: 40,
    paddingTop: 28,
  },
  // ─── Section ───
  sectionTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: BRAND.green,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: BRAND.greenDim,
    paddingBottom: 5,
  },
  section: {
    marginBottom: 22,
  },
  // ─── Description ───
  descText: {
    fontSize: 8.5,
    lineHeight: 1.7,
    color: "#2a2a27",
  },
  // ─── Specs table ───
  tableHeader: {
    flexDirection: "row",
    backgroundColor: BRAND.black,
    borderRadius: 3,
    paddingHorizontal: 8,
    paddingVertical: 7,
    marginBottom: 1,
  },
  tableRow: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: BRAND.border,
  },
  tableRowAlt: {
    backgroundColor: "#f9f7f3",
  },
  thLabel: {
    flex: 3,
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: BRAND.sand,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  thMethod: {
    width: 60,
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: BRAND.sand,
    textAlign: "center",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  thUnit: {
    width: 44,
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: BRAND.sand,
    textAlign: "center",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  thVal: {
    width: 36,
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: BRAND.sand,
    textAlign: "center",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  tdLabel: {
    flex: 3,
    fontSize: 8,
    color: "#1a1a18",
    lineHeight: 1.4,
  },
  tdMethod: {
    width: 60,
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: BRAND.muted,
    textAlign: "center",
  },
  tdUnit: {
    width: 44,
    fontSize: 7.5,
    color: BRAND.muted,
    textAlign: "center",
  },
  // ─── Value badges ───
  badgeMin: {
    width: 36,
    alignItems: "center",
  },
  badgeMax: {
    width: 36,
    alignItems: "center",
  },
  badgePillMin: {
    backgroundColor: BRAND.greenDim,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgePillMax: {
    backgroundColor: "#fde8df",
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeTextMin: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: BRAND.green,
  },
  badgeTextMax: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: BRAND.limit,
  },
  dashText: {
    fontSize: 8,
    color: "#cccccc",
    textAlign: "center",
  },
  // ─── Two-column grid ───
  twoCol: {
    flexDirection: "row",
    gap: 20,
  },
  col: {
    flex: 1,
  },
  // ─── Bullet list ───
  bulletItem: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "flex-start",
  },
  bulletDot: {
    width: 12,
    fontSize: 8,
    color: BRAND.green,
    marginTop: 1,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    color: "#2a2a27",
    lineHeight: 1.5,
  },
  // ─── Steps ───
  step: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "flex-start",
  },
  stepNum: {
    width: 22,
    height: 22,
    backgroundColor: BRAND.black,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    marginTop: 1,
  },
  stepNumText: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: BRAND.green,
  },
  stepContent: { flex: 1 },
  stepTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a18",
    marginBottom: 2,
  },
  stepDesc: {
    fontSize: 7.5,
    color: BRAND.muted,
    lineHeight: 1.5,
  },
  // ─── Info box ───
  infoBox: {
    backgroundColor: "#f9f7f3",
    borderLeftWidth: 3,
    borderLeftColor: BRAND.green,
    borderRadius: 2,
    padding: 10,
    marginBottom: 10,
  },
  infoBoxTitle: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a18",
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  infoBoxText: {
    fontSize: 7.5,
    color: "#2a2a27",
    lineHeight: 1.6,
  },
  // ─── Warning box ───
  warningBox: {
    backgroundColor: "#fff7f4",
    borderLeftWidth: 3,
    borderLeftColor: BRAND.limit,
    borderRadius: 2,
    padding: 10,
    marginBottom: 10,
  },
  warningBoxTitle: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: BRAND.limit,
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  // ─── Footer ───
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: BRAND.dark,
    paddingHorizontal: 40,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerBrand: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: BRAND.white,
    letterSpacing: 2,
  },
  footerInfo: {
    fontSize: 7,
    color: BRAND.muted,
    textAlign: "right",
  },
  footerVersion: {
    fontSize: 7,
    color: BRAND.muted,
  },
});

const SPEC_ROWS = [
  { label: "Gravité spécifique à 25 °C", method: "ASTM D70", unit: "kg/m³", min: "1.01", max: "1.06" },
  { label: "Pénétrabilité à 25 °C, 100g, 5s", method: "ASTM D5", unit: "0.1 mm", min: "60", max: "70" },
  { label: "Point de ramollissement", method: "ASTM D36", unit: "°C", min: "49", max: "56" },
  { label: "Ductilité à 25 °C", method: "ASTM D113", unit: "cm", min: "100", max: null },
  { label: "Perte au chauffage", method: "ASTM D6", unit: "% wt", min: null, max: "0.2" },
  { label: "Baisse de pénétrabilité après chauffage", method: "ASTM D5", unit: "%", min: null, max: "20" },
  { label: "Point éclair", method: "ASTM D92", unit: "°C", min: "250", max: null },
  { label: "Solubilité dans le trichloréthylène", method: "ASTM D2042", unit: "% wt", min: "99", max: null },
];

const SPEC_ROWS_3550 = [
  { label: "Gravité spécifique à 25 °C", method: "ASTM D70", unit: "kg/m³", min: "1.01", max: "1.06" },
  { label: "Pénétrabilité à 25 °C, 100g, 5s", method: "ASTM D5", unit: "0.1 mm", min: "35", max: "50" },
  { label: "Point de ramollissement", method: "ASTM D36", unit: "°C", min: "52", max: "60" },
  { label: "Ductilité à 25 °C", method: "ASTM D113", unit: "cm", min: "50", max: null },
  { label: "Perte au chauffage", method: "ASTM D6", unit: "% wt", min: null, max: "0.2" },
  { label: "Baisse de pénétrabilité après chauffage", method: "ASTM D5", unit: "%", min: null, max: "20" },
  { label: "Point éclair", method: "ASTM D92", unit: "°C", min: "250", max: null },
  { label: "Solubilité dans le trichloréthylène", method: "ASTM D2042", unit: "% wt", min: "99", max: null },
];

const Footer = ({ grade }: { grade: string }) =>
  React.createElement(
    View,
    { style: s.footer },
    React.createElement(
      View,
      null,
      React.createElement(Text, { style: s.footerBrand }, "BITUMAD"),
      React.createElement(Text, { style: s.footerVersion }, `Fiche Technique · Bitume ${grade} · Version 2025`)
    ),
    React.createElement(
      Text,
      { style: s.footerInfo },
      "Les informations contenues dans ce document sont fournies à titre indicatif.\nConfirmation des spécifications par certificat d'analyse lot par lot sur demande."
    )
  );

const FicheTechnique = ({ grade }: { grade: string }) => {
  const is3550 = grade === "35/50";
  const specRows = is3550 ? SPEC_ROWS_3550 : SPEC_ROWS;
  const descText = is3550
    ? "Le bitume de pénétration 35/50 est un liant hydrocarboné de grade plus dur, issu de la distillation du pétrole brut. Il se présente sous forme solide à température ambiante et devient fluide sous l'effet de la chaleur, permettant son application sur les chaussées.\n\n" +
      "La désignation 35/50 correspond à l'indice de pénétrabilité : une aiguille standard de 100 grammes pénètre entre 35 et 50 dixièmes de millimètre dans le bitume à 25 °C pendant 5 secondes. Ce grade plus dur offre une résistance accrue à l'orniérage sous forte chaleur, avec un point de ramollissement de 52 à 60 °C. Il est particulièrement adapté aux zones côtières malgaches — Toamasina, Mahajanga, Toliary — où les températures de surface peuvent dépasser 70 °C en plein ensoleillement."
    : "Le bitume de pénétration 60/70 est un liant hydrocarboné visqueux issu de la distillation du pétrole brut. Il se présente sous forme solide à température ambiante et devient fluide sous l'effet de la chaleur, permettant son application sur les chaussées.\n\n" +
      "La désignation 60/70 correspond à l'indice de pénétrabilité : une aiguille standard de 100 grammes pénètre entre 60 et 70 dixièmes de millimètre dans le bitume à 25 °C pendant 5 secondes. Ce grade est particulièrement adapté aux conditions climatiques tropicales de Madagascar : résistance aux hautes températures pour éviter les ornières, flexibilité adéquate lors des variations saisonnières pour prévenir la fissuration.";
  const applications = is3550
    ? [
        "Routes côtières à fort ensoleillement (couche de roulement anti-orniérage)",
        "Zones portuaires, quais et aires de manœuvre",
        "Voiries urbaines côtières (Toamasina, Mahajanga, Toliary, Nosy Be)",
        "Zones industrielles et logistiques en bord de mer",
        "Aéroports en zone tropicale à très forte chaleur de surface",
      ]
    : [
        "Routes nationales et régionales (couche de roulement, base)",
        "Voiries urbaines et axes à fort trafic",
        "Pistes d'aéroport et aires de trafic",
        "Parkings, zones logistiques et industrielles",
        "Enduits superficiels pour routes à faible trafic",
      ];

  return React.createElement(
    Document,
    {
      title: `Fiche Technique — Bitume de pénétration ${grade}`,
      author: "BITUMAD",
      subject: `Spécifications techniques ASTM — Bitume ${grade}`,
      keywords: `bitume, ${grade.replace("/", "-")}, ASTM, Madagascar, fiche technique`,
      creator: "BITUMAD",
    },

    // ════════════════════════════════
    // PAGE 1 — Header + Spécifications
    // ════════════════════════════════
    React.createElement(
      Page,
      { size: "A4", style: s.page },

      // ─── Header ───
      React.createElement(
        View,
        { style: s.header },
        React.createElement(
          View,
          { style: s.headerLeft },
          React.createElement(Text, { style: s.headerBrand }, "BITUMAD"),
          React.createElement(Text, { style: s.headerSub }, "Importation & Distribution de Bitume — Madagascar")
        ),
        React.createElement(
          View,
          { style: s.headerRight },
          React.createElement(Text, { style: s.headerDocType }, "Fiche technique"),
          React.createElement(Text, { style: s.headerDate }, "Version 2025 · FR")
        )
      ),

      // ─── Green banner ───
      React.createElement(
        View,
        { style: s.greenBanner },
        React.createElement(Text, { style: s.greenBannerTitle }, `BITUME DE PÉNÉTRATION ${grade}`),
        React.createElement(Text, { style: s.greenBannerGrade }, grade)
      ),

      // ─── Body page 1 ───
      React.createElement(
        View,
        { style: s.body },

        // Description
        React.createElement(
          View,
          { style: s.section },
          React.createElement(Text, { style: s.sectionTitle }, "Description du produit"),
          React.createElement(
            Text,
            { style: s.descText },
            descText
          )
        ),

        // Specs table
        React.createElement(
          View,
          { style: s.section },
          React.createElement(Text, { style: s.sectionTitle }, "Spécifications techniques ASTM"),
          React.createElement(
            View,
            { style: s.tableHeader },
            React.createElement(Text, { style: s.thLabel }, "Paramètre"),
            React.createElement(Text, { style: s.thMethod }, "Méthode"),
            React.createElement(Text, { style: s.thUnit }, "Unité"),
            React.createElement(Text, { style: s.thVal }, "Min."),
            React.createElement(Text, { style: s.thVal }, "Max.")
          ),
          ...specRows.map((row, i) =>
            React.createElement(
              View,
              { style: [s.tableRow, i % 2 === 1 ? s.tableRowAlt : {}], key: row.label },
              React.createElement(Text, { style: s.tdLabel }, row.label),
              React.createElement(Text, { style: s.tdMethod }, row.method),
              React.createElement(Text, { style: s.tdUnit }, row.unit),
              React.createElement(
                View,
                { style: s.badgeMin },
                row.min
                  ? React.createElement(View, { style: s.badgePillMin }, React.createElement(Text, { style: s.badgeTextMin }, row.min))
                  : React.createElement(Text, { style: s.dashText }, "—")
              ),
              React.createElement(
                View,
                { style: s.badgeMax },
                row.max
                  ? React.createElement(View, { style: s.badgePillMax }, React.createElement(Text, { style: s.badgeTextMax }, row.max))
                  : React.createElement(Text, { style: s.dashText }, "—")
              )
            )
          )
        )
      ),

      React.createElement(Footer, { grade })
    ),

    // ════════════════════════════════
    // PAGE 2 — Applications + Stockage
    // ════════════════════════════════
    React.createElement(
      Page,
      { size: "A4", style: s.page2 },

      React.createElement(
        View,
        { style: s.body },

        // Applications + Usage
        React.createElement(
          View,
          { style: [s.twoCol, s.section] },

          React.createElement(
            View,
            { style: s.col },
            React.createElement(Text, { style: s.sectionTitle }, "Domaines d'application"),
            ...applications.map((item, i) =>
              React.createElement(
                View,
                { style: s.bulletItem, key: i },
                React.createElement(Text, { style: s.bulletDot }, "›"),
                React.createElement(Text, { style: s.bulletText }, item)
              )
            )
          ),

          React.createElement(
            View,
            { style: s.col },
            React.createElement(Text, { style: s.sectionTitle }, "Processus de mise en œuvre"),
            ...[
              { num: "01", title: "Chauffage", desc: "Chauffer entre 150 et 180 °C pour atteindre la viscosité d'application." },
              { num: "02", title: "Enrobage", desc: "Enrober les agrégats au bitume chaud dans un malaxeur ou centrale d'enrobage." },
              { num: "03", title: "Répandage", desc: "Répandre l'enrobé sur la chaussée à l'aide d'un finisseur à la température optimale." },
              { num: "04", title: "Compactage", desc: "Densifier avec un compacteur à rouleau pour la planéité de surface finale." },
            ].map((step) =>
              React.createElement(
                View,
                { style: s.step, key: step.num },
                React.createElement(View, { style: s.stepNum }, React.createElement(Text, { style: s.stepNumText }, step.num)),
                React.createElement(
                  View,
                  { style: s.stepContent },
                  React.createElement(Text, { style: s.stepTitle }, step.title),
                  React.createElement(Text, { style: s.stepDesc }, step.desc)
                )
              )
            )
          )
        ),

        // Storage & Safety
        React.createElement(
          View,
          { style: [s.twoCol, s.section] },
          React.createElement(
            View,
            { style: s.col },
            React.createElement(Text, { style: s.sectionTitle }, "Stockage & Transport"),
            React.createElement(
              View,
              { style: s.infoBox },
              React.createElement(Text, { style: s.infoBoxTitle }, "Conditions de stockage"),
              React.createElement(Text, { style: s.infoBoxText },
                "• Température de stockage recommandée : 120–150 °C\n" +
                "• Conserver en citernes ou fûts hermétiques à l'abri de l'humidité\n" +
                "• Durée de conservation maximale : 12 mois à température contrôlée\n" +
                "• Ne pas dépasser 180 °C pour éviter l'oxydation prématurée"
              )
            ),
            React.createElement(
              View,
              { style: s.infoBox },
              React.createElement(Text, { style: s.infoBoxTitle }, "Transport"),
              React.createElement(Text, { style: s.infoBoxText },
                "Transporté en vrac dans des camions-citernes calorifugés ou en fûts métalliques étanches. Conforme aux réglementations de transport de matières dangereuses classe 3."
              )
            )
          ),
          React.createElement(
            View,
            { style: s.col },
            React.createElement(Text, { style: s.sectionTitle }, "Sécurité & Précautions"),
            React.createElement(
              View,
              { style: s.warningBox },
              React.createElement(Text, { style: s.warningBoxTitle }, "Précautions d'emploi"),
              React.createElement(Text, { style: s.infoBoxText },
                "• Point éclair ≥ 250 °C — risque d'inflammation au-delà de cette température\n" +
                "• Porter des équipements de protection individuelle (EPI) lors de la manipulation à chaud\n" +
                "• Éviter tout contact cutané avec le produit chaud\n" +
                "• Assurer une ventilation adéquate lors de l'application"
              )
            ),
            React.createElement(
              View,
              { style: s.infoBox },
              React.createElement(Text, { style: s.infoBoxTitle }, "Conditionnement"),
              React.createElement(Text, { style: s.infoBoxText },
                "Disponible en vrac (camion-citerne) et en fûts de 200 kg. Livraison sur site à Madagascar selon conditions contractuelles."
              )
            )
          )
        )
      ),

      React.createElement(Footer, { grade })
    )
  );
};

async function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Uint8Array> {
  const chunks: Uint8Array[] = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk as string));
  }
  const merged = Buffer.concat(chunks);
  return new Uint8Array(merged);
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const gradeParam = searchParams.get("grade") ?? "60-70";
    const grade = gradeParam === "35-50" ? "35/50" : "60/70";
    const filename = `Bitumad_Fiche-Technique_Bitume-${gradeParam}.pdf`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nodeStream = await pdf(React.createElement(FicheTechnique, { grade }) as any).toBuffer();
    const bytes = await streamToBuffer(nodeStream);

    return new NextResponse(bytes as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
