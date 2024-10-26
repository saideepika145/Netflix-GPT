import { createSlice } from "@reduxjs/toolkit";

const langSlice=createSlice({
    name:"lang",
    initialState:{
        selectedLang:"en"
    },
    reducers:{
        setSelectedLang:(state,action)=>{
            state.selectedLang=action.payload
        }
    }
});
export const {setSelectedLang}=langSlice.actions;
export default langSlice.reducer;