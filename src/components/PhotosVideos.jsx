import React from "react";
import './PhotosVideos.scss';
import photo1 from "../components/Photos/Photos-Videos-section/Aeration_Champ_Epuration.jpg";
import photo2 from "../components/Photos/Photos-Videos-section/Aeration_Parc_Jean_Drapeau.jpg";
import photo3 from "../components/Photos/Photos-Videos-section/Bionest_Installation.jpg";
import photo4 from "../components/Photos/Photos-Videos-section/Bionest.jpg";
import photo5 from "../components/Photos/Photos-Videos-section/Ecoulement_Ocre_Ferreux.jpg";
import photo6 from "../components/Photos/Photos-Videos-section/Equipement_Installation.jpg";
import photo7 from "../components/Photos/Photos-Videos-section/Equipement_Sur_Chenille.jpg";
import photo8 from "../components/Photos/Photos-Videos-section/Escape_Vert.jpg";
import photo9 from "../components/Photos/Photos-Videos-section/Etat_Pompe.jpg";
import photo10 from "../components/Photos/Photos-Videos-section/Injection_Air_2.jpg";
import photo11 from "../components/Photos/Photos-Videos-section/Injection_Air.jpg";
import photo12 from "../components/Photos/Photos-Videos-section/Injection_Champ.jpg";
import photo13 from "../components/Photos/Photos-Videos-section/Injection_Pelle.jpg";
import photo14 from "../components/Photos/Photos-Videos-section/Installation_Bionest.jpg";
import photo15 from "../components/Photos/Photos-Videos-section/Installation_Pompe_Exterieure.jpg";
import photo16 from "../components/Photos/Photos-Videos-section/Les_Vehicules.jpg";
import photo17 from "../components/Photos/Photos-Videos-section/Machine_Pression_Utilisee.jpg";
import photo18 from "../components/Photos/Photos-Videos-section/Machine_Pression.jpg";
import photo19 from "../components/Photos/Photos-Videos-section/Mini_Excavation.jpg";
import photo20 from "../components/Photos/Photos-Videos-section/Nos_Equipements.jpg";
import photo21 from "../components/Photos/Photos-Videos-section/Ocre_Ferreux.jpg";
import photo22 from "../components/Photos/Photos-Videos-section/Terrain_De_Balle_Problematique.jpg";
import photo23 from "../components/Photos/Photos-Videos-section/Terrain_Sportif.jpg";
import photo24 from "../components/Photos/Photos-Videos-section/Travaux_Hydroexcavation.jpg";


import video1 from "../components/Videos/West_Point_Golf.mp4";
import video2 from "../components/Videos/AIR_2G2.mp4";
import video3 from "../components/Videos/Morton_Groundsman.mp4";

export default function PhotosVideos() {
    return (
        <div className="PhotosVideos">
            <h1>Photos</h1>
            <div className="photos-section">
                <img src={photo1} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo2} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo3} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo4} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo5} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo6} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo7} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo8} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo9} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo10} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo11} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo12} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo13} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo14} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo15} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo16} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo17} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo18} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo19} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo20} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo21} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo22} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo23} alt="This is an image of an aération du champ d'épuration" />
                <img src={photo24} alt="This is an image of an aération du champ d'épuration" />
            </div>

            <h1>Videos</h1>

            <div className="videos-section">
                <video src={video1}>
                    <source src={video1} type="video/mp4" />
                </video>
                <video src={video2}>
                    <source src={video2} type="video/mp4" />
                </video>
                <video src={video3}>
                    <source src={video3} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}