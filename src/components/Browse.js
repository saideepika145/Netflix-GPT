import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();

  const showGPTSearch = useSelector((store) => store?.gpt?.showGPTSearch);
  console.log("show",showGPTSearch)
  /*
      *
        - Main Container
          - Video back drop 
          - movie title
        - secondary Container
          - list of movies
          - list of cards*n
       */
  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <div className="bg-black h-screen">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
