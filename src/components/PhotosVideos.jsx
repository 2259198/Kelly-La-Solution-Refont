import React from "react";
import './PhotosVideos.scss';
import Photos from "./Data/Photos";
import Videos from "./Data/Videos";
import { useTranslation } from "react-i18next";

export default function PhotosVideos() {

    const {t} = useTranslation();

    return (
        <div className="PhotosVideos">
            <h1>{t("photos.title-photos")}</h1>
            {Photos.map((image, index) => (
                <div className="photos-section" key={index}>
                    <img src={image.element} alt="" />
                </div>
            ))}


            <h1>{t("photos.title-videos")}</h1>

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