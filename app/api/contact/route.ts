import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const LOGO_URL =
  "https://res.cloudinary.com/uuiwf5lx/image/upload/q_auto/f_auto/v1779650741/bitumad_logo_cercle_remove_v2_zcpvnc.webp";

function escapeHtml(value: unknown): string {
  const str = value === null || value === undefined || value === "" ? "—" : String(value);
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br/>");
}

function renderRow(label: string, value: unknown) {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #2a2a27;vertical-align:top;width:180px;">
        <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#25c490;text-transform:uppercase;letter-spacing:.04em;">${label}</span>
      </td>
      <td style="padding:12px 0;border-bottom:1px solid #2a2a27;vertical-align:top;">
        <span style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#f5f2eb;">${escapeHtml(value)}</span>
      </td>
    </tr>`;
}

function renderEmailTemplate(heading: string, tag: string, rows: string) {
  return `
  <div style="background-color:#0c0c0b;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background-color:#161614;border-radius:12px;overflow:hidden;border:1px solid #2a2a27;">
      <tr>
        <td style="background-color:#1D9E75;padding:24px 28px;text-align:left;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="vertical-align:middle;">
                <img src="${LOGO_URL}" alt="Bitumad" width="40" height="40" style="display:block;border-radius:50%;background:#0c0c0b;" />
              </td>
              <td style="vertical-align:middle;padding-left:12px;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;color:#0c0c0b;">Bitumad</span><br/>
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#0c0c0b;letter-spacing:.06em;text-transform:uppercase;">${tag}</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:28px;">
          <h2 style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:20px;color:#f5f2eb;">${heading}</h2>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${rows}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 28px;background-color:#0c0c0b;">
          <span style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#8a8a86;">Notification automatique — bitumad.mg</span>
        </td>
      </tr>
    </table>
  </div>`;
}

export async function POST(req: Request) {
  const body = await req.json();
  const { type } = body;

  let subject = "";
  let html = "";

  if (type === "devis") {
    const { nom, org, tel, email, typeProjet, quantite, region, message } = body;
    subject = `Demande de devis — ${nom}${org ? ` (${org})` : ""}`;
    html = renderEmailTemplate(
      "Nouvelle demande de devis",
      "Formulaire devis",
      renderRow("Nom", nom) +
        renderRow("Organisation", org) +
        renderRow("Téléphone", tel) +
        renderRow("Email", email) +
        renderRow("Type de projet", typeProjet) +
        renderRow("Quantité estimée", quantite) +
        renderRow("Région de livraison", region) +
        renderRow("Détails du chantier", message)
    );
  } else if (type === "message") {
    const { nom, email, sujet, message } = body;
    subject = `Message — ${sujet || "Sans sujet"} (${nom})`;
    html = renderEmailTemplate(
      "Nouveau message de contact",
      "Formulaire contact",
      renderRow("Nom", nom) +
        renderRow("Email", email) +
        renderRow("Sujet", sujet) +
        renderRow("Message", message)
    );
  } else if (type === "partenariat") {
    const { nom, poste, org, email, naturePartenariat, message } = body;
    subject = `Proposition de partenariat — ${org || nom}`;
    html = renderEmailTemplate(
      "Nouvelle proposition de partenariat",
      "Formulaire partenariat",
      renderRow("Nom", nom) +
        renderRow("Poste", poste) +
        renderRow("Organisation", org) +
        renderRow("Email", email) +
        renderRow("Nature du partenariat", naturePartenariat) +
        renderRow("Proposition", message)
    );
  } else {
    return NextResponse.json({ error: "Type invalide" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Bitumad <info@bitumad.mg>",
      to: "info@bitumad.mg",
      subject,
      html,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}
