import React, { useRef } from "react";

const FunctionRef = () => {
  let musicRef = useRef();

  let playMusic = () => {
    musicRef.current.play();
  };
  return (
    <div>
      <audio
        ref={musicRef}
        src="../../public/lyrical--the-paradise--nani--anirudh-ravichander--srikanth-odela.mp3"
      ></audio>

      <button onClick={playMusic}>Play</button>
    </div>
  );
};

export default FunctionRef;
