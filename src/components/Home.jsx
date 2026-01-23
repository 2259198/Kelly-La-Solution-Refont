import React from "react";
import "./Home.scss";
import clients from "./Data/Clients";

export default function Home() {
    return (
        <div className="Home">

            <div className="history-section">
                <h1 className="title"> HISTORIQUE </h1>

                <p>Fondée en 2003 à l’Île Perrot, Kelly La Solution Inc. s’appuie sur plus de 50 ans d’expertise dans le domaine des fosses septiques. L’entreprise offre une gamme complète de services, dont le nettoyage de drains français, l’inspection par mini-caméra, l’installation et la réparation de systèmes, l’excavation ainsi que la vente et l’entretien de préfiltres. <br></br>Kelly La Solution se distingue surtout par son procédé exclusif au Québec de décompactage du sol, réalisé par injection d’air. Cette technique rapide et non invasive permet d’améliorer efficacement tous types de terrains, sans endommager la surface. <br></br> Face à son succès rapide, une franchise a vu le jour à Val-Bélair en 2005, permettant d’offrir ces services uniques à la grande région de Québec.</p>

                {/* Pour joindre Kelly La Solution de Québec 418 842-3636 */}
            </div>
            <div className="home-separator">
                <h1 className="title"> QUAND DEVRIEZ-VOUS COMMUNIQUER AVEC NOUS ? </h1>

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



            <div className="clients-section">
                <h1 className="title"> Nous travaillons pour les particuliers, les villes, municipalités ... </h1>

                <ul className="companies-list">
                    {

                        // Add icons next to the name

                        clients.map((client, id) => (
                            <li key={id}>{client.name}</li>
                        ))

                    }

                </ul>
            </div>

        </div>
    );
}