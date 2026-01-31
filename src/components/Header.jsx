import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
  };

  return (
    <header className="Header">
      <button className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <a href="/">{t("nav.home")}</a>
        <a href="/Photos">{t("nav.photos")}</a>
        <a href="/Systems">{t("nav.systems")}</a>
        <a href="/FAQ">{t("nav.faq")}</a>
        <a href="/Contact">{t("nav.contact")}</a>

        <button className="lang-btn" onClick={toggleLanguage}>
          {i18n.language === "fr" ? "EN" : "FR"}
        </button>
      </nav>
    </header>
  );
}
