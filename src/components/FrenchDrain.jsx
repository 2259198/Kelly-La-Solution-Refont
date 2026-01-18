import React from "react";
import './FrenchDrain.scss';
import photo1 from "../components/Photos/Installation-regard-dacces-Kelly-la-Solution.jpeg";
import photo2 from "../components/Photos/Kelly-la-Solution-Installation-dune-station-de-pompage-exterieure.JPG";

export default function FrenchDrain() {
    return (
        <div className="FrenchDrain">
            <h1>NETTOYAGE ET INSTALLATION</h1>

            <p>Problème d'ocre ferreux ?  Nous réglons les problèmes d'ocre ferreux, matière visqueuse communément appelé bactérie mangeuse de fer.  Parfois, cette boue orangée se développe dans la drain de fondation, ce qui peut l'obstruer causant ainsi des dommages à la pompe.  Expert en nettoyage et inspection par caméra des drains français nous procédons également à l'installation de cheminées d'accès et de station de pompage.</p>
            <div className="photos">
                <img src={photo1} alt="This is an installation regard image" />
                <img src={photo2} alt="This is an another installation image" />
            </div>
        </div>
    )
}