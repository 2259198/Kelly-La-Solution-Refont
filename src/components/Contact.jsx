import React, { useTransition } from "react";
import "./Contact.scss";
import members from "./Data/Members";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhone, faEnvelope, faE } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";


export default function Contact() {

    const {t} = useTranslation();

    return (
        <div className="Contact">
            <div className="contact-container">
                <h1>{t("contact.title")}</h1>
                {/* <h3>Nous offrons nos services partout dans la province du Québec</h3> */}
                <div className="company-info">
                    <p> <FontAwesomeIcon icon={faHouse} /> 711 Route Harwood Suite 110 Vaudreuil-Dorion (Québec) J7V 8P2</p>
                    <p> <FontAwesomeIcon icon={faPhone} /> 514 425-3535 | Sans frais 1 877 858-3535 | 418 842-3636</p>
                    <p> <FontAwesomeIcon icon={faEnvelope} /> info@kellylasolution.ca</p>
                </div>

            </div>

            <div className="members-section">
                <h2> {t("contact.members")}</h2>
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