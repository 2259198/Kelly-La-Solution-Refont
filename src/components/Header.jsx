import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [systemsOpen, setSystemsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
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
        <a href="/" onClick={closeMenu}>{t("nav.home")}</a>
        <a href="/Photos" onClick={closeMenu}>{t("nav.photos")}</a>
        
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleSystems}>
            {t("nav.systems")}
            <span className={`arrow ${systemsOpen ? "open" : ""}`}>▼</span>
          </button>
          <div className={`dropdown-menu ${systemsOpen ? "active" : ""}`}>
            <a href="/systems/septic" onClick={closeMenu}>
              {t("nav.septicSystem") || "Septic System"}
            </a>
            <a href="/systems/spiral-rake" onClick={closeMenu}>
              {t("nav.spiralRake") || "Spiral Rake"}
            </a>
            <a href="/systems/french-drain" onClick={closeMenu}>
              {t("nav.frenchDrain") || "French Drain"}
            </a>
            <a href="/systems/sport-field" onClick={closeMenu}>
              {t("nav.sportField") || "Sport Field"}
            </a>
          </div>
        </div>
        
        <a href="/FAQ" onClick={closeMenu}>{t("nav.faq")}</a>
        <a href="/Contact" onClick={closeMenu}>{t("nav.contact")}</a>
        
        <button className="lang-btn" onClick={toggleLanguage}>
          {i18n.language === "fr" ? "EN" : "FR"}
        </button>
      </nav>
    </header>
  );
}