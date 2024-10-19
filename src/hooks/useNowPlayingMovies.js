import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
  useEffect(() => {
    fetchNowPlaying();
  }, []);
  const fetchNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("fetchNowPlaying API res", json.results);
    dispatch(addNowPlaying(json.results));
  };
}
export default useNowPlayingMovies;