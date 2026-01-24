import React from "react";
import "./Contact.scss";
import members from "./Data/Members";

export default function Contact() {
    return (
        <div className="Contact">
            <div className="contact-container">
                <h1>Nos coordonnées pour nous rejoindre</h1>
                <h3>Nous offrons nos services partout dans la province du Québec</h3>

                <p> Notre adresse : 711 Route Harwood Suite 110 Vaudreuil-Dorion (Québec) J7V 8P2</p>
                <p> MONTRÉAL ET LES ENVIRONS</p>
                <p> Notre numéro de téléphone : 514 425-3535 | Sans frais 1 877 858-3535 | 418 842-3636</p>
                <p> Notre adresse courriel : info@kellylasolution.ca</p>

            </div>

            <div className="members-section">
                <h2> Our members </h2>
                {
                    members.map((member) => {
                        return (
                            <div className="members">
                                <img src={member.image} alt={member.imageDescription} />
                                <h4>{member.name}</h4>
                                <p>{member.role}</p>
                                <a href="mark@kellylasolution.ca">{member.email}</a>

                            </div>
                        );
                    })
                }
            </div>

        </div>
    )
}