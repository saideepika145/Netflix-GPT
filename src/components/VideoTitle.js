import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-60 px-12 bg-gradient-to-r from-black text-white' >
      <h1 className='text-3xl'>{title}</h1>
      <p className='px-4 w-1/3 text-sm py-4'>{overview}</p>
      <button className='bg-white text-black  border border-gray-400 px-6 py-2 m-2 rounded-lg hover:bg-opacity-90'>Play</button>
      <button className='bg-gray-300 text-black border border-gray-400 px-6 py-2 m-2 rounded-lg bg-opacity-80'>More info</button>
      </div>
  )
}

export default VideoTitle