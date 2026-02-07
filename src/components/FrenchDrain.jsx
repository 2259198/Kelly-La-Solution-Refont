import React from "react";
import './FrenchDrain.scss';
import photo1 from "../components/Photos/Installation-regard-dacces-Kelly-la-Solution.jpeg";
import photo2 from "../components/Photos/Kelly-la-Solution-Installation-dune-station-de-pompage-exterieure.JPG";
import { useTranslation } from "react-i18next";

export default function FrenchDrain() {

    const {t} = useTranslation();

    return (
        <div className="FrenchDrain">
            <h1> {t("french-drain.french-drain-title")} </h1>

            <p> {t("french-drain.french-drain-text")} </p>
            <div className="photos">
                <img src={photo1} alt="This is an installation regard image" />
                <img src={photo2} alt="This is an another installation image" />
            </div>
        </div>
    )
}