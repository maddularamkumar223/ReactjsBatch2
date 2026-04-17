import React, { useRef, useState } from "react";

const DisplaySongs = ({ songs }) => {
  let [play, setPlay] = useState(true);
  let [musicSrc, setSrc] = useState(null);
  console.log(musicSrc);
  let musicRef = useRef();
  let playMusic = (path) => {
    musicRef.current.src = path;
    if (path === musicSrc) {
      if (play) {
        musicRef.current.pause();
        setPlay(false);
      } else {
        musicRef.current.play();
        setPlay(true);
      }
    } else {
      musicRef.current.play();
      setPlay(true);
    }
  };
  return (
    <>
      {songs.map((song) => {
        return (
          <article>
            <p>{song.name}</p>
            <audio ref={musicRef}></audio>
            <button
              onClick={() => {
                playMusic(song.path);
                setSrc(song.path);
              }}
            >
              Play
            </button>
          </article>
        );
      })}
    </>
  );
};

export default DisplaySongs;
