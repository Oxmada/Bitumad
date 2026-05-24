import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { type } = body;

  let subject = "";
  let html = "";

  if (type === "devis") {
    const { nom, org, tel, email, typeProjet, quantite, region, message } = body;
    subject = `Demande de devis — ${nom}${org ? ` (${org})` : ""}`;
    html = `
      <h2>Nouvelle demande de devis</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Organisation :</strong> ${org || "—"}</p>
      <p><strong>Téléphone :</strong> ${tel}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Type de projet :</strong> ${typeProjet}</p>
      <p><strong>Quantité estimée :</strong> ${quantite || "—"}</p>
      <p><strong>Région de livraison :</strong> ${region || "—"}</p>
      <p><strong>Détails du chantier :</strong><br/>${message || "—"}</p>
    `;
  } else if (type === "message") {
    const { nom, email, sujet, message } = body;
    subject = `Message — ${sujet || "Sans sujet"} (${nom})`;
    html = `
      <h2>Nouveau message</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Sujet :</strong> ${sujet || "—"}</p>
      <p><strong>Message :</strong><br/>${message}</p>
    `;
  } else if (type === "partenariat") {
    const { nom, poste, org, email, naturePartenariat, message } = body;
    subject = `Proposition de partenariat — ${org || nom}`;
    html = `
      <h2>Nouvelle proposition de partenariat</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Poste :</strong> ${poste || "—"}</p>
      <p><strong>Organisation :</strong> ${org || "—"}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Nature du partenariat :</strong> ${naturePartenariat}</p>
      <p><strong>Proposition :</strong><br/>${message || "—"}</p>
    `;
  } else {
    return NextResponse.json({ error: "Type invalide" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "contact@bitumad.mg",
      to: "contact@bitumad.mg",
      subject,
      html,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}
