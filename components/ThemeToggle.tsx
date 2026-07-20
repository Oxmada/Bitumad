"use client";
import { useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    buttonRef.current?.setAttribute("aria-pressed", String(isLight));
  }, []);

  function toggle() {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const next = !isLight;
    if (next) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    }
    buttonRef.current?.setAttribute("aria-pressed", String(next));
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Changer de thème clair/sombre"
    >
      <Sun size={18} className="theme-toggle-icon theme-toggle-icon--sun" />
      <Moon size={18} className="theme-toggle-icon theme-toggle-icon--moon" />
    </button>
  );
}
