import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies()
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
    <div  className=" bg-black">
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      
    </div>
  );
};

export default Browse;
