import React from "react";
import Video1 from "../../public/aditya-roy-kapur-shraddha-kapoor---sunn-raha-hai-na-tu-aashiqui-2-full-hd-song.mp4";
import Video2 from "../../public/Arjuna-Phalguna-x5fgd-2022.mp4";
import Video3 from "../../public/Kantara-A-Legend-Chapter-1-Telugu-dru7t-2025.mp4";
import Video4 from "../../public/meesaya-murukku--music-video--hiphop-tamizha---sundar-c--avni---enna-nadanthalum.mp4";
import Video5 from "../../public/peddi--ram-charan--janhvi--buchi-babu-sana--ar-rahmanmohit-chauhan---chikiri-chikiri-video-song.mp4";
import SingleVideo from "./SingleVideo";

const ListOfVideos = ({ UpdateSingleVideo, singleVideo }) => {
  let videosList = [
    {
      name: "sunn-raha-hai-na-tu-aashiqui-2",
      path: Video1,
    },
    {
      name: "Arjuna-Phalguna",
      path: Video2,
    },
    {
      name: "Kantara-A-Legend-Chapter-1",
      path: Video3,
    },
    {
      name: "enna-nadanthalum",
      path: Video4,
    },
    {
      name: "chikiri-chikiri",
      path: Video5,
    },
  ];

  let filterVideos = () => {
    if (singleVideo === null) {
      return videosList;
    } else {
      return videosList.filter((video) => video.path !== singleVideo);
    }
  };
  return (
    <div>
      {filterVideos().map((video) => {
        return (
          <SingleVideo
            name={video.name}
            path={video.path}
            UpdateSingleVideo={UpdateSingleVideo}
          />
        );
      })}
    </div>
  );
};

export default ListOfVideos;
