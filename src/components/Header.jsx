import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [systemsOpen, setSystemsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const toggleSystems = () => {
    setSystemsOpen(!systemsOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSystemsOpen(false);
  };

  return (
    <header className="Header">
      <button
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>{t("nav.home")}</Link>
        <Link to="/Photos" onClick={closeMenu}>{t("nav.photos")}</Link>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleSystems}>
            {t("nav.systems")}
            <span className={`arrow ${systemsOpen ? "open" : ""}`}>▼</span>
          </button>
          <div className={`dropdown-menu ${systemsOpen ? "active" : ""}`}>
            <Link to="/systems/septic" onClick={closeMenu}>
              {t("nav.septicSystem") || "Septic System"}
            </Link>
            <Link to="/systems/spiral-rake" onClick={closeMenu}>
              {t("nav.spiralRake") || "Spiral Rake"}
            </Link>
            <Link to="/systems/french-drain" onClick={closeMenu}>
              {t("nav.frenchDrain") || "French Drain"}
            </Link>
            <Link to="/systems/sport-field" onClick={closeMenu}>
              {t("nav.sportField") || "Sport Field"}
            </Link>
          </div>
        </div>
        <Link to="/FAQ" onClick={closeMenu}>{t("nav.faq")}</Link>
        <Link to="/Contact" onClick={closeMenu}>{t("nav.contact")}</Link>
        <button className="lang-btn" onClick={toggleLanguage}>
          {i18n.language === "fr" ? "EN" : "FR"}
        </button>
      </nav>
    </header>
  );
}