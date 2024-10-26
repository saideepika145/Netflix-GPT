import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"moviesSlice",
    initialState:{
        nowPlaying:null,
        trailerVideo:null,
        popularMovies:null,
        upComing:null
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload
        },
        addMovieTrailer:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addUpComingMovies:(state,action)=>{
            state.upComing=action.payload
        },
    }
});
export const {addNowPlaying,addMovieTrailer,addPopularMovies,addUpComingMovies}=moviesSlice.actions
export default moviesSlice.reducer;