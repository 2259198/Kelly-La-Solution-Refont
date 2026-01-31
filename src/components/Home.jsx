import React from "react";
import "./Home.scss";
import clients from "./Data/Clients";
import { useTranslation } from "react-i18next";

export default function Home() {

    const { t } = useTranslation();

    return (
        <div className="Home">

            <div className="history-section">
                <h1 className="title"> {t("home.history-title")} </h1>

                <p>{t("home.history-text")}</p>

            </div>
            <div className="home-separator">
                <h1 className="title"> {t("home.when-title")} </h1>

                <h2> {t("home.skeptic-title")} </h2>

                <ul className="septic-field-list">

                    <li>Champ d'épuration</li>
                    <li>Besoin de changer la fosse septique peu importe la grandeur, en plastique ou en ciment ...</li>
                    <li>Couvercle (réparation ou achat)</li>
                    <li>Rehaussement du couvercle (cheminée)</li>
                    <li>Préfiltre</li>

                </ul>

                <h2> {t("home.air-injection-title")} </h2>

                <ul className="air-injection-list">
                    <li>Terrain sportif (baseball, soccer, football, volleyball ...)</li>
                    <li>Parc à chiens, vignoble, espace vert ... etc.</li>
                </ul>


                <h2> {t("home.localisation-title")} </h2>

                <ul className="location-list">
                    <li>Agrandissement de la propriété</li>
                    <li>Installation piscine, cabanon</li>
                </ul>


                <h2> {t("home.french-drain-title")} </h2>

                <ul className="french-drain-list">
                    <li> Nettoyage des drains français </li>
                    <li> Installation d'un regard pour facilité l'accès et le nettoyage des drains français </li>
                    <li> Passer la mini-caméra (avec rapport sur DVD) </li>
                </ul>

                <h2> {t("home.solution-title")} </h2>

                <ul className="solution-list">
                    <li> Rapide </li>
                    <li> Économique </li>
                    <li> Garantie </li>
                </ul>

            </div>



            <div className="clients-section">
                <h1 className="title"> {t("home.companies-title")} </h1>

                <ul className="companies-list">
                    {
                        // Add icons next to the name
                        clients.map((client, id) => (
                            <li key={id}>{client.name}</li>
                        ))

                    }

                </ul>
            </div>

        </div>
    );
}