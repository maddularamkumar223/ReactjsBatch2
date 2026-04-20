import React, { useRef, useState } from "react";

const SingleVideoPlayer = ({ singleVideo }) => {
  let [play, setPlay] = useState(false);
  let videoRef = useRef();

  let playVideo = () => {
    videoRef.current.src = singleVideo;
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  };
  return (
    <aside>
      <video src={singleVideo} ref={videoRef} onClick={playVideo}></video>
    </aside>
  );
};

export default SingleVideoPlayer;
