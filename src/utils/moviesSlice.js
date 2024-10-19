import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"moviesSlice",
    initialState:{
        nowPlaying:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload
        },
        addMovieTrailer:(state,action)=>{
            state.trailerVideo=action.payload
        },
    }
});
export const {addNowPlaying,addMovieTrailer}=moviesSlice.actions
export default moviesSlice.reducer;