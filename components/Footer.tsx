export default function Footer() {
  return (
    <footer>
      <a href="/" className="footer-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://res.cloudinary.com/uuiwf5lx/image/upload/q_auto/f_auto/v1779650741/Bitumad-logo-simple_nal1lr.webp" alt="Bitumad" style={{ height: "38px", width: "auto" }} />
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
