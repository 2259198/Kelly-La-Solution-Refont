import React from "react";
import './PhotosVideos.scss';
import Photos from "./Data/Photos";
import Videos from "./Data/Videos";
import { useTranslation } from "react-i18next";

export default function PhotosVideos() {
    const {t} = useTranslation();
    
    return (
        <div className="PhotosVideos">
            <div className="photos-section">
                <h2>{t("photos.title-photos")}</h2>
                <div className="photos-container">
                    {Photos.map((image, index) => (
                        <img key={index} src={image.element} alt={`Photo ${index + 1}`} />
                    ))}
                </div>
            </div>
            
            <div className="videos-section">
                <h2>{t("photos.title-videos")}</h2>
                <div className="videos-container">
                    {Videos.map((video, index) => (
                        <video key={index} src={video.element} controls />
                    ))}
                </div>
            </div>
        </div>
    );
}