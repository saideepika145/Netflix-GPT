import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import { bg_img } from "../utils/constant";

const GPTSearch = () => {
  return (
    <>
      <div className="absolute w-full -z-10 ">
        <img src={bg_img} alt="background image not found" className="w-full h-screen object-cover" />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
