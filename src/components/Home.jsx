import React from "react";
import "./Home.scss";
import clients from "./Data/Clients";
import { useTranslation } from "react-i18next";

export default function Home() {

    const { t } = useTranslation();

    return (
        <div className="Home">

            <div className="history-section">
                <h1> {t("home.history-title")} </h1>

                <p>{t("home.history-text")}</p>

            </div>

            <div className="home-separator">
                <h3> {t("home.when-title")} </h3>

                <h4> {t("home.skeptic-title")} </h4>

                <ul className="septic-field-list">

                    {t("home.skeptic-list", { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}

                </ul>

                <h4> {t("home.air-injection-title")} </h4>

                <ul className="air-injection-list">
                    {t("home.air-injection-list", { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>


                <h4> {t("home.localisation-title")} </h4>

                <ul className="location-list">
                    {t("home.locatisation-list", { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>


                <h4> {t("home.french-drain-title")} </h4>

                <ul className="french-drain-list">
                    {t("home.french-drain-list", { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h4> {t("home.solution-title")} </h4>

                <ul className="solution-list">
                    {t("home.solutions", { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>


            </div>

            <div className="clients-section">
                <h3> {t("home.companies-title")} </h3>

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