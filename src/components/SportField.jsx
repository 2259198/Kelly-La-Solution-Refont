import React from "react";
import './SportField.scss';
import photo1 from "../components/Photos/terrain-de-balle-problematique-Kelly-la-Solution.jpg";
import photo2 from "../components/Photos/tondeuse.jpg";
import { useTranslation } from "react-i18next";

export default function SportField() {

    const {t} = useTranslation();

    return (
        <div className="SportField">
            <div className="problem-section">
                <h1> {t("sport-field.sport-field-title")} </h1>

                <h3> {t("sport-field.the-problem-title")} </h3>

                <p> {t("sport-field.the-problem-text")} </p>

                <img src={photo1} alt="This is an image of the problem of a sports' field" />

                <h3> {t("sport-field.symptoms-title")} </h3>

                <p> {t("sport-field.symptoms-title")} </p>

                <h3> {t("sport-field.solution-title")} </h3>

                <p> {t("sport-field.solution-text")} </p>

                <img src={photo2} alt="This is an image of the lawn-mower" />

                <h3> {t("sport-field.operation-title")} </h3>

                <p> {t("sport-field.operation-text")} </p>

            </div>

            
        </div>
    )
}