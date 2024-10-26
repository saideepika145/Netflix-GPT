import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store?.movies)
  /**
   MovieList -  popular
   MovieList -  Horror
   MovieList -  Comedy
   */
  return (
    <div>
      <div className='-mt-[10%] relative pl-6 bg-black'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlaying}/>
      <MovieList title={"Popular"} movies={movies?.popularMovies}/>
      <MovieList title={"Up Coming"} movies={movies?.upComing}/>
      <MovieList title={"Comedy"} movies={movies?.nowPlaying}/>
      <MovieList title={"Thriller"} movies={movies?.upComing}/>
      {/* <MovieCard/> */}
      </div>
    </div>
  )
}

export default SecondaryContainer