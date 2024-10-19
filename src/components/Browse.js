import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies()
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
      <MainContainer/>
      <SecondaryContainer/>
      
    </div>
  );
};

export default Browse;
