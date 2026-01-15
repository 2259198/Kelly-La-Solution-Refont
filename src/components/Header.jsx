import React from "react";
import "./Header.scss";


export default function Header()
{
    return(
        <div className="Header">
            <nav className="nav-menu">
                <li>Accueil</li>
                <li>Photos</li>
                <li>Systèmes</li>
                <li>F.A.Q</li>
                <li>Nous joindre</li>
            </nav>
        </div>
    )
}
