import React from "react";
import style from "../assets/css/VideoCard.module.css";

const VideoCard = ({ title, description, thumbnail, videoId }) => {
  return (
    <a
      className={style.container}
      href={`https://youtu.be/${videoId}`}
      target="_blank"
    >
      <div className={style.imageContainer}>
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className={style.description}>
        <div className={style.title}>{title}</div>
        <div className={style.textdes}>{description}</div>
      </div>
    </a>
  );
};

export default VideoCard;
