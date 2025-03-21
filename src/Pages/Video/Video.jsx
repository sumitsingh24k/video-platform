import React from "react";
import "./Video.css";
import Playvideo from "../../Components/Playvideo/Playvideo";
import Recomended from "../../Components/Recomended/Recomended";
import { useParams } from "react-router-dom";

const Video = () => {
    const { categoryId, videoId } = useParams();

    return (
        <div className="playcontainer">
            <Playvideo videoId={videoId} />
            <Recomended categoryId={categoryId} />
        </div>
    );
};

export default Video;
