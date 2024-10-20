import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
const useUpComingMovies=()=>{
    const dispatch = useDispatch();
  useEffect(() => {
    fetchNowPlaying();
  }, []);
  const fetchNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("addUpComingMovies API res", json.results);
    dispatch(addUpComingMovies(json.results));
  };
}
export default useUpComingMovies;