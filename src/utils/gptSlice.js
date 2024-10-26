import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearch: false,
    gptMovieNames: null,
    gptMovieResults: null,
  },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovieNames = movieNames;
      state.gptMovieResults = movieResults;
    },
  },
});
export const { toggleGPTSearch, addGPTMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
