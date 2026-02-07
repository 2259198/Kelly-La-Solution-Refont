import React from "react";
import './SpiralRake.scss';
import photo1 from "../components/Photos/Spiral_Rake.JPG";
import { useTranslation } from "react-i18next";

export default function SpiralRake() {

    const { t } = useTranslation();

    return (
        <div className="SpiralRake">
            <h1> {t("spiral-rake.spiral-rake-title")} </h1>
            <h3> {t("spiral-rake.ideal-for-title")} </h3>
            <ul className="spiral-rake-list">
                {t("spiral-rake.ideal-for-list", { returnObjects: true }).map((item, index) => (
                    <li key={index}> {item} </li>
                ))}
            </ul>
            <h3> {t("spiral-rake.available-title")} </h3>
            <ul className="locations-list">

                {/* In the future, put the real locations when clicked on */}

                {t("spiral-rake.available-list", { returnObjects: true }).map((item, index) => (
                    <li key={index}> {item} </li>
                ))}
            </ul>
            <img src={photo1} alt="" />
        </div>
    )
}