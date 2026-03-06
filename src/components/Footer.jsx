import React from "react";
import "./Footer.scss";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="elements">
                <ul>
                    <div className="company-information">
                        <li>711, Route Harwood, Suite 100, Vaudreuil-Dorion, Québec, J7V 8P2</li>
                        <li>RBQ 5773-3701-01</li>
                    </div>

                    <li>® {new Date().getFullYear()} Kelly La Solution Inc. Tous droits réservés</li>
                </ul>
            </div>
        </footer>
    )
}
