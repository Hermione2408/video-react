import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList =
    videos.length > 0 && //condition to check if videos is empty
    videos.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      ); //here video object is from youtube API
    });
  console.log(videos);
  return <div className="ui relaxed divided list">{renderedList} </div>;
};
export default VideoList;
