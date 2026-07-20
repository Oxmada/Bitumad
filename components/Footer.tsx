export default function Footer() {
  return (
    <footer>
      <a href="/" className="footer-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/uuiwf5lx/image/upload/v1784570915/Bitumad-logo-simple_white_cfpbuq.png"
          alt="Bitumad"
          className="footer-logo-img footer-logo-img--dark"
          style={{ height: "38px", width: "auto" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/uuiwf5lx/image/upload/v1784573110/bitumad_logo_rectangle_remove_zvajm2.webp"
          alt="Bitumad"
          className="footer-logo-img footer-logo-img--light"
          style={{ height: "38px", width: "auto" }}
        />
      </a>
      <span className="footer-copy">
        © 2025 BITUMAD &nbsp;·&nbsp; <a href="/mentions-legales" style={{ color: 'inherit', textDecoration: 'none' }}>Mentions légales</a>
        &nbsp;·&nbsp; Réalisé par{" "}
        <a href="https://oxmad-digital.mg" target="_blank" rel="nofollow noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
          Oxmad Digital
        </a>
      </span>
    </footer>
  );
}
