import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
const usePopularMovies=()=>{
    const dispatch = useDispatch();
  useEffect(() => {
    fetchNowPlaying();
  }, []);
  const fetchNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("addPopularMovies API res", json.results);
    dispatch(addPopularMovies(json.results));
  };
}
export default usePopularMovies;