"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import React from "react";

interface VideoData {
  id: number;
  videoId: string;
  title: string;
}

const YoutubePlayer = (props: VideoData) => {
  const { videoId, title } = props;
  return (
    <div className="w-full h-full">
      <LiteYouTubeEmbed id={videoId} title={title} params="rel=0" />
    </div>
  );
};

export default YoutubePlayer;
