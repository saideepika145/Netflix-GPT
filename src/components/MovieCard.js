import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({poster_path}) => {
  return (
    <div className='flex-shrink-0 md:w-[13%] md:h-[13%] w-[25%] h-[25%] pr-4 '>
        <img alt='image-not-found' src={IMG_CDN+poster_path}/>
    </div>
  )
}

export default MovieCard