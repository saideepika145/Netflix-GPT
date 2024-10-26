import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackDrop = ({ movieId }) => {
  //get movie trailer and updates the trailer key in redux store
  useMovieTrailer(movieId);
  const trailerVideo=useSelector((store)=>store?.movies?.trailerVideo);
  console.log("trailer video form redux",trailerVideo)
  return (
    <div>
      <iframe
      className="w-screen aspect-video absolute"
        src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1`}
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackDrop;
