import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='mt-8 w-full'>
        <h1 className='py-2 font-bold text-white'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide w-full'>
        {/* Add "whitespace-nowrap" to prevent wrapping and enable scrolling */}
        <div className='flex whitespace-nowrap'>
          {movies && movies.map(movie => (
            <MovieCard key={movie?.id} poster_path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList