import React from "react";
import DisplaySongs from "./DisplaySongs";

const Multiplayer = () => {
  let songs = [
    {
      name: "Adhi Dha Surprisu",
      path: "../../../public/Adhi Dha Surprisu.mp3",
    },
    {
      name: "Aaya Shar",
      path: "../../../public/lyrical--the-paradise--nani--anirudh-ravichander--srikanth-odela.mp3",
    },
  ];
  return (
    <div>
      <DisplaySongs songs={songs} />
    </div>
  );
};

export default Multiplayer;
