import React from "react";
import './SepticSystem.scss';
import photo1 from "../components/Photos/Kelly-la-Solution-Inc.-aeration-dun-champ-depuration-colmate_2.jpg";
import photo2 from "../components/Photos/Kely-La-Solution-Inc.-Machine-a-pression-pour-nettoyer-les-conduits.jpg";
import photo3 from "../components/Photos/prefiltre-Kelly-la-solution_1.jpg";
import photo4 from "../components/Photos/mini-excavation-Kelly-la-Solution_1.jpg";
import { useTranslation } from "react-i18next";

export default function SepticSystem() {

    const { t } = useTranslation();

    return (
        <div className="SepticSystem">
            <h1>{t("septic-system.problems-drainage-title")}</h1>
            <div className="leach-field">
                <h1> {t("septic-system.leach-field-title")}</h1>
                <p> {t("septic-system.leach-field-text")}</p>
                <h1> {t("septic-system.problem-title")}</h1>
                <p> {t("septic-system.problem-text")}</p>
                <ul className="symptoms-drainage-list">
                    {t("septic-system.problem-list", { returnObjects: true }).map((item, index) =>
                    (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="solution-drainage">
                <h1> {t("septic-system.solution-title")} </h1>
                <p> {t("septic-system.solution-text")} </p>
            </div>
            <div className="how-it-works">
                <h1> {t("septic-system.how-it-works-title")} </h1>
                <p> {t("septic-system.how-it-works-text")} </p>
            </div>

            <div className="prefilter">
                <h1>{t("septic-system.prefilter-title")}</h1>
                <div className="prefilter-content">
                    <div className="prefilter-text">
                        <p>{t("septic-system.prefilter-text")}</p>
                        <p>{t("septic-system.prefilter-text-under-pic")}</p>
                    </div>
                    <img src={photo3} alt="Prefilter image" />
                </div>
            </div>

            <div className="excation-repair">
                <h1> {t("septic-system.excavation-title")} </h1>

                <h4> {t("septic-system.excavation-subtitle")} </h4>
                <ul className="repair-list">
                    {t("septic-system.excavation-list", { returnObjects: true }).map((item, index) => (
                        <li key={index}> {item} </li>
                    ))}
                </ul>

                <img src={photo4} alt="Excavation image" />
            </div>

            <div className="location-septic-system">
                <h1> {t("septic-system.location-title")} </h1>

                <p> {t("septic-system.location-text")} </p>

            </div>

        </div>
    )
}