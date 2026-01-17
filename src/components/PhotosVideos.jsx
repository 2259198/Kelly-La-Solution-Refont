import React from "react";
import './PhotosVideos.scss';
import Photos from "./Data/Photos";
import Videos from "./Data/Videos";

export default function PhotosVideos() {
    return (
        <div className="PhotosVideos">
            <h1>Photos</h1>
            {Photos.map((image, index) => (
                <div className="photos-section" key={index}>
                    <img src={image.element} alt="" />
                </div>
            ))}


            <h1>Videos</h1>

            {Videos.map((video, index) => (
                <div className="videos-section" key={index}>
                    <video src={video.element}>
                        <source src={video.element}/>
                    </video>
                </div>
            ))}
        </div>
    )
}