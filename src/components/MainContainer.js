import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackDrop from './VideoBackDrop';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies=useSelector((store)=>store?.movies?.nowPlaying);
    // console.log("movs",movies)
    if(!movies) return
    const mainMovie=movies[0];
    console.log("main moview",mainMovie)
    const {title,overview,id}=mainMovie
    // console.log("main moview",title,overview)
  return (
    <div className=''>
        <VideoBackDrop movieId={id}/>
        <VideoTitle title={title} overview={overview}/>
    </div>
    
  )
}

export default MainContainer