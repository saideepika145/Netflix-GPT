import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/moviesSlice";

//get movie trailer and updates the trailer key in redux store
const useMovieTrailer = (movieId) => {
  const movieTrailer=useSelector((store)=>store?.movies?.trailerVideo);
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
    !movieTrailer && getMovieVideos();
  }, []);
};
export default useMovieTrailer;
