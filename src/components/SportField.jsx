import React from "react";
import "./SportField.scss";
import photo1 from "../components/Photos/terrain-de-balle-problematique-Kelly-la-Solution.jpg";
import photo2 from "../components/Photos/tondeuse.jpg";
import { useTranslation } from "react-i18next";

const SECTIONS = [
    { titleKey: "sport-field.the-problem-title", textKey: "sport-field.the-problem-text", photo: null },
    { titleKey: "sport-field.symptoms-title",    textKey: "sport-field.symptoms-text",    photo: photo1 },
    { titleKey: "sport-field.solution-title",    textKey: "sport-field.solution-text",    photo: null },
    { titleKey: "sport-field.operation-title",   textKey: "sport-field.operation-text",   photo: photo2 },
];

export default function SportField() {
    const { t } = useTranslation();

    return (
        <div className="SportField">
            <div className="problem-section">
                <h1>{t("sport-field.sport-field-title")}</h1>
                {SECTIONS.map(({ titleKey, textKey, photo }) => (
                    <React.Fragment key={titleKey}>
                        <h3>{t(titleKey)}</h3>
                        <p>{t(textKey)}</p>
                        {photo && (
                            <img
                                src={photo}
                                alt={t(titleKey)}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
