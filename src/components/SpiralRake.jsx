import React from "react";
import './SpiralRake.scss';
import photo1 from "../components/Photos/Spiral_Rake.JPG";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faLocationDot, faPhone, faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function SpiralRake() {
    const { t } = useTranslation();

    const locations = t("spiral-rake.available-list", { returnObjects: true }).map((item) => {
        const parts = item.split(" - ");
        return {
            name: parts[0] || "",
            address: parts[1] || "",
            phone: parts[2] || "",
        };
    });

    return (
        <div className="SpiralRake">
            <h1>{t("spiral-rake.spiral-rake-title")}</h1>

            <div className="rake-info">
                <div className="rake-content">
                    <div className="ideal-for">
                        <h2>{t("spiral-rake.ideal-for-title")}</h2>
                        <ul className="spiral-rake-list">
                            {t("spiral-rake.ideal-for-list", { returnObjects: true }).map((item, index) => (
                                <li key={index}>
                                    <FontAwesomeIcon icon={faLeaf} className="list-icon" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <img src={photo1} alt="Spiral Rake" />
                </div>
            </div>

            <div className="locations">
                <h2>{t("spiral-rake.available-title")}</h2>
                <div className="locations-grid">
                    {locations.map((loc, index) => (
                        <div className="location-card" key={index}>
                            <div className="location-name">
                                <FontAwesomeIcon icon={faStore} className="loc-icon" />
                                <span>{loc.name}</span>
                            </div>
                            <div className="location-address">
                                <FontAwesomeIcon icon={faLocationDot} className="loc-icon" />
                                <span>{loc.address}</span>
                            </div>
                            <div className="location-phone">
                                <FontAwesomeIcon icon={faPhone} className="loc-icon" />
                                <span>{loc.phone}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}