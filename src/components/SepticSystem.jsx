import React from "react";
import './SepticSystem.scss';
import photo1 from "../components/Photos/Kelly-la-Solution-Inc.-aeration-dun-champ-depuration-colmate_2.jpg";
import photo2 from "../components/Photos/Kely-La-Solution-Inc.-Machine-a-pression-pour-nettoyer-les-conduits.jpg";
import photo3 from "../components/Photos/prefiltre-Kelly-la-solution_1.jpg";
import photo4 from "../components/Photos/mini-excavation-Kelly-la-Solution_1.jpg";

export default function SepticSystem() {
    return (
        <div className="SepticSystem">
            <h1>PROBLEMS OF DRAINAGE (SEPTIC FIELD)</h1>
            <div className="leach-field">
                <h1>LEACH FIELD</h1>
                <p>Specialist in the aeration and defragmentation of the soil by an innovative technology in the restoration of septic fields.  Our technoclogy is : economic, efficient, respectful of the environment and unique.</p>
                <h1> THE PROBLEM </h1>
                <p>Your septic system does not seem to work properly anymore Sewage water on the surface of the grass; often and especially during washings The water of the toilet goes up or down very slowly "gargoyle" in the bathroom sink</p>
            </div>
            <ul className="symptoms-drainage-list">
                <li> Smells outside </li>
                <li> Following heavy rain or snow melt the ground remains spongy (like a sponge) </li>
                <li> The water level in the septic tank is higher than normal sometimes overflowed by the lids </li>
                <li> When emptying the septic tank there is water backing up from the septic field </li>
                <li> The ground is soaked so much that you can not mow the lawn  </li>
            </ul>
            <div className="solution-drainage">
                <h1>THE SOLUTION</h1>
                <p>Kelly La Solution Inc. owns the restoration technique to solve many soil problems including compaction and saturation of septic field. To rejuvenate quickly years can be added to yousystem without destroying your landscaping.</p>
            </div>
            <div className="how-it-works">
                <h1>HOW IT WORKS</h1>
                <h4>Aeration of the leaching field</h4>
                <p>Kelly La Solution Inc. will first locate the field then insert a 3 cm probe into the ground using a pneumatic hammer at a depth between 1 to 2 meters depending on the depth of the pipes in the field. Using a high-pressure compressor, the air is injected as a shot of dynamite which at the same time decolour the stone under the pipes and the earth walls, on each side of the field. The surface of the ground will move about 3 meters in diameter without damaging the ground. The air goes into all the cracks of the earth which will produce a vertical and horizontal passage to water and air. This solution is repeated every 1.5m according to the soil condition.</p>
            </div>
            <div className="high-pressure-pipe">
                <h4> High pressure pipe cleaning </h4>
                <img src={photo1} alt="Aeration image" />
                <img src={photo2} alt="Machine image" />
            </div>

            <div className="prefilter">
                <h1>PREFILTER</h1>
                <p>Pre-filters prevent clogging in the septic field.  IMPORTANT regular maintenance or cleaning should be done regularly.</p>
                <img src={photo3} alt="Prefilter image" />
                <p>The prefilter improves the quality of the effluent from the septic tank. Suspended solids and grease are retained by the prefilter, which delays clogging and increases its life. Depending on the daily flow, it's possible to use more than one prefilter in the same installation. We offer the cleaning service according to YOUR needs: every month, 3 months, 6 months, 12 months etc ...</p>
            </div>

            <div className="excation-repair">
                <h1> EXCAVATION ET REPAIR </h1>
                <h4> No matter the repair we have THE solution </h4>

                <h4> Mini-Excavation- To avoid digging the lids we install liner risers (chimneys) </h4>
                <ul className="repair-list">
                    <li>Obstruction in the pipes = pressure cleaning</li>
                    <li>Roots, tree nearby = we dig, replace pipe, cut the roots ...</li>
                    <li>Diagnose the problem (bad drainage, breakage ...) = camera</li>
                    <li>Pipe crushed or damaged = replace the pipes</li>
                    <li>Cracked or damaged cover = we replace it</li>
                    <li>Smell problem = smoke test</li>
                </ul>

                <img src={photo4} alt="Excavation image" />
            </div>

            <div className="location-septic-system">
                <h1> LOCATION </h1>

                <p>Whether if you need a permit for the installation of a swimming pool, a project to expand your property, the construction of a garage, a shed ... we can help you and your project can be realized quickly. Keep in mind taht the first thing your city, town, village ... will ask you in order to process your request for a permit is to provide them the location of your septic system. No matter the age of the system we are able to locate the septic system.</p>

            </div>

        </div>
    )
}