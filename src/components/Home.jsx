import React from "react";
import "./Home.scss";

export default function Home() {
    return (
        <div className="Home">
            <div className="home-separator">
                <h1> QUAND DEVRIEZ-VOUS COMMUNIQUER AVEC NOUS ? </h1>

                <h2> FOSSE SEPTIQUE </h2>

                <ul className="septic-field-list">

                    <li>Champ d'épuration</li>
                    <li>Besoin de changer la fosse septique peu importe la grandeur, en plastique ou en ciment ...</li>
                    <li>Couvercle (réparation ou achat)</li>
                    <li>Rehaussement du couvercle (cheminée)</li>
                    <li>Préfiltre</li>

                </ul>

                <h2> DÉCOMPACTION PAR INJECTION D'AIR </h2>

                <ul className="air-injection-list">
                    <li>Terrain sportif (baseball, soccer, football, volleyball ...)</li>
                    <li>Parc à chiens, vignoble, espace vert ... etc.</li>
                </ul>


                <h2> LOCALISATION </h2>

                <ul className="location-list">
                    <li>Agrandissement de la propriété</li>
                    <li>Installation piscine, cabanon</li>
                </ul>


                <h2> DRAIN FRANÇAIS </h2>

                <ul className="french-drain-list">
                    <li> Nettoyage des drains français </li>
                    <li> Installation d'un regard pour facilité l'accès et le nettoyage des drains français </li>
                    <li> Passer la mini-caméra (avec rapport sur DVD) </li>
                </ul>

                <h2> NOTRE SOLUTION EST À LA FOIS </h2>

                <ul className="solution-list">
                    <li> Rapide </li>
                    <li> Économique </li>
                    <li> Garantie </li>
                </ul>

            </div>

            <div className="history-section">
                <h1> HISTORIQUE </h1>

                <p>Fondée à l’Île Perrot (ouest de l’Île de Montréal) en 2003, par Monsieur Mark Kelly qui compte à son actif plus de 50 années d’expériences dans le domaine des fosses septiques. Kelly La Solution Inc. offre différents services : nettoyage de drain français, inspection par mini-caméra,       vente et service de préfiltre, installation de nouveau système, excavation et réparations mais est reconnu     principalement pour leur procédé unique au Québec qui consiste à effectuer le décompactage du sol (champ d’épuration, terrain sportif : football, baseball, soccer, parc à chien ... bref tous les types de sol). Notre technique s'effectue simplement et rapidement par injection d’air, sans endommager la surface du terrain. Dès sa fondation, Kelly La Solution Inc. a connue un succès immédiat. Deux ans plus tard, soit en 2005 une franchise naissait à Val-Bélair, permettant ainsi aux gens de la grande région de Québec de pouvoir goûter à la qualité de nos services unique. </p>

                {/* Pour joindre Kelly La Solution de Québec 418 842-3636 */}
            </div>

            <div className="clients-section">
                <h1> Nous travaillons pour les particuliers, les villes, municipalités ... </h1>
                <ul className="companies-list">
                    <li>Premier Tech Aqua</li>
                    <li>Municipalité de la Baie James</li>
                    <li>Ville de L'Île Perrot </li>
                    <li>Hydro-Québec</li>
                    <li>Commission scolaire de la Rivière du Nord</li>
                    <li>Parc Jean Drapeau de Montréal</li>
                    <li>Municipalité de Pointe-Calumet</li>
                    <li>Ville de Montréal</li>
                    <li>Ville de Montréal Arrondissement de Pierrefonds-Roxboro</li>
                    <li>Ville de Cookshire-Eaton</li>
                </ul>
            </div>

        </div>
    );
}