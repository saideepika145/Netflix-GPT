import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/moviesSlice";

//get movie trailer and updates the trailer key in redux store
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailerId =
      json?.results?.find((ele) => ele.type === "Trailer") ||
      json?.results?.[0];
    console.log("json", json);
    console.log("trailerId", trailerId);
    dispatch(addMovieTrailer(trailerId?.key));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
