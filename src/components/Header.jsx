import React, { useState } from "react";
import "./Header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="Header">
      {/* Burger button (mobile) */}
      <button className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <a href="#">Accueil</a>
        <a href="#">Photos</a>
        <a href="#">Systèmes</a>
        <a href="#">F.A.Q</a>
        <a href="#">Nous joindre</a>
      </nav>
    </header>
  );
}
