import React, { useRef } from "react";

const SingleVideo = ({ name, path, UpdateSingleVideo }) => {
  let videoRef = useRef();

  let playVideo = () => {
    videoRef.current.src = path;
    videoRef.current.play();
  };
  let pauseVideo = () => {
    videoRef.current.pause();
  };
  return (
    <div
      onClick={() => {
        UpdateSingleVideo(path);
      }}
    >
      <p>Video Name :{name}</p>
      <video
        src={path}
        ref={videoRef}
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
        muted
      ></video>
    </div>
  );
};

export default SingleVideo;
