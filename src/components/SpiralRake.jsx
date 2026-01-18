import React from "react";
import './SpiralRake.scss';
import photo1 from "../components/Photos/Spiral_Rake.JPG"

export default function SpiralRake() {
    return (
        <div className="SpiralRake">
            <h1>SPIRAL RAKE </h1>
            <h3>Ideal for : </h3>
            <ul className="spiral-rake-list">
                <li>Earth</li>
                <li>Ground leveling</li>
                <li>Dust stone for paving stones</li>
                <li>Stone</li>
                <li>Mulch</li>
                <li>White grubs</li>
            </ul>
            <h3>Available at the following stores :</h3>
            <ul className="locations-list">
                <li>Kelly La Solution Inc. 198-B, rue Valois Vaudreuil-Dorion (Québec) J7V 1T4 514.425.3535</li>
                <li>RONA Pincourt 1200 boulevard du Traversier Pincourt (Québec) J7W 0K8 514.453.3337</li>
                <li>Pépinière Cité des Jeunes 580 Cité des Jeunes Saint-Lazare (Québec) J7T 2A7 450.424.4300</li>
                <li>Joe Mécanique 20-A, Besner Vaudreuil-Dorion (Québec) J7V 2W7 450.424.6148</li>
                <li>RONA Lachine Ltée 650, Notre-Dame Lachine (Québec) H8S 2B3 514.637.3767</li>
                <li>Pépinière du Québec 1560, Chemin Gascon Terrebonne (Québec) J6X 3A2 450.471.7583</li>
            </ul>
            <img src={photo1} alt="" />
        </div>
    )
}