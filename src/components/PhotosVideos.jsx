import React from "react";
import './PhotosVideos.scss'
import video1 from "../components/Videos/West_Point_Golf.mp4";
import video2 from "../components/Videos/AIR_2G2.mp4";
import video3 from "../components/Videos/Morton_Groundsman.mp4";

export default function PhotosVideos()
{
    return(
        <div className="PhotosVideos">
            <div className="videos-section">
                <video src={video1}>
                    <source src={video1} type="video/mp4"/>
                </video>
                <video src={video2}>
                    <source src={video2} type="video/mp4"/>
                </video>
                <video src={video3}>
                    <source src={video3} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}