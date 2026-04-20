import React, { useState } from "react";
import SingleVideoPlayer from "./SingleVideoPlayer";
import ListOfVideos from "./ListOfVideos";
import Style from "./videoPlayer.module.css";

const VideoPlayer = () => {
  let [singleVideo, setSingleVideo] = useState(null);

  let UpdateSingleVideo = (path) => {
    setSingleVideo(path);
  };
  console.log(singleVideo);
  return (
    <section className={Style.videoPlayer}>
      <article>
        <SingleVideoPlayer singleVideo={singleVideo} value={true} />
      </article>
      <article>
        <ListOfVideos
          UpdateSingleVideo={UpdateSingleVideo}
          singleVideo={singleVideo}
        />
      </article>
    </section>
  );
};

export default VideoPlayer;
