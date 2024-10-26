import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video relative pt-[25%] md:pt-[23%] px-6 md:px-12 bg-gradient-to-r from-black text-white text-sm md:text-base' >
      <div>
      <h1 className='text-lg md:text-3xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block px-2 md:px-4 w-3/4 md:w-2/4 text-sm py-4'>{overview}</p>
      </div>
      <button className='bg-white text-black  border border-gray-400 px-2 md:px-6 py-1 md:py-2 m-2 rounded-lg hover:bg-opacity-90'>Play</button>
      <button className='bg-gray-300 text-black border border-gray-400 px-2 md:px-6 py-1 md:py-2 m-2 rounded-lg bg-opacity-80'>More info</button>
      </div>
  )
}

export default VideoTitle