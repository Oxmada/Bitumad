export default function Footer() {
  return (
    <footer>
      <a href="/" className="footer-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://res.cloudinary.com/uuiwf5lx/image/upload/q_auto/f_auto/v1779650741/Bitumad-logo-simple_nal1lr.webp" alt="Bitumad" style={{ height: "38px", width: "auto" }} />
      </a>
      <ul className="footer-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/a-propos">À propos</a></li>
        <li><a href="/notre-bitume">Notre bitume</a></li>
        <li><a href="/#commander">Commander</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <span className="footer-copy">© 2025 BITUMAD</span>
    </footer>
  );
}
