import React from "react";
import "./Contact.scss";

function Contact() {
    return (
        <div className="Contact">
            <div className="contact-container">
                <h1>Nos coordonnées pour nous rejoindre</h1>
                <h3>Nous offrons nos services partout dans la province du Québec</h3>

                <p> Notre adresse : 711 Route Harwood Suite 110 Vaudreuil-Dorion (Québec) J7V 8P2</p>
                <p> MONTRÉAL ET LES ENVIRONS</p>
                <p> Notre numéro de téléphone : 514 425-3535 | Sans frais 1 877 858-3535 | 418 842-3636</p>
                <p> Notre site web : www.kellylasolution.ca </p>
                <p> Notre adresse courriel : info@kellylasolution.ca</p>
                
            </div>

            <div className="members">
                <h2> Our members </h2>
                <img src="" alt="This is an image of Mark Kelly" />
                <p> Président </p>
                <a href="mark@kellylasolution.ca"> mark@kellylasolution.ca </a>
                
                
                <img src="" alt="This is an image of Geneviève Kelly" />
                <p> Adjointe administrative </p>
                <a href="genevieve@kellylasolution.ca "> genevieve@kellylasolution.ca  </a>


            </div>
        </div>
    )
}

export default Contact;