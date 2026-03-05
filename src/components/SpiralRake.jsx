import React from "react";
import './SpiralRake.scss';
import photo1 from "../components/Photos/Spiral_Rake.JPG";
import { useTranslation } from "react-i18next";

export default function SpiralRake() {
    const { t } = useTranslation();
    return (
        <div className="SpiralRake">
            <h1>{t("spiral-rake.spiral-rake-title")}</h1>

            <div className="rake-info">
                <div className="rake-content">
                    <div className="ideal-for">
                        <h2>{t("spiral-rake.ideal-for-title")}</h2>
                        <ul className="spiral-rake-list">
                            {t("spiral-rake.ideal-for-list", { returnObjects: true }).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <img src={photo1} alt="Spiral Rake" />
                </div>
            </div>

            <div className="locations">
                <h2>{t("spiral-rake.available-title")}</h2>
                <ul className="locations-list">
                    {t("spiral-rake.available-list", { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}