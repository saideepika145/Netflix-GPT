import React, { useRef } from "react";
import { lang } from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGPTMovieResults } from "../utils/gptSlice";
const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store?.lang?.selectedLang);
  // console.log("see",selectedLang,lang[selectedLang]["PlaceHolder"],lang[selectedLang]["search"])
  const searchText = useRef(null);
  const searchMovieInTmdb = async (movie) => {
    const movieResults = fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await movieResults.json();
    return json.results;
  };
  const handleGPTSearch = async () => {
    console.log("gpt results", searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log("gpt results", gptResults);
    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promises = gptMovies.map((movie) => searchMovieInTmdb(movie));
    const tmdvResults = await Promise.all(promises);
    dispatch(
      addGPTMovieResults({ movieNames: gptMovies, movieResults: tmdvResults })
    );
  };
  return (
    <div className="pt-[35%] md:pt-[12%] flex justify-center text-sm md:text-base">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 px-2 py-2 m-2"
          type="text"
          placeholder={lang[selectedLang]["PlaceHolder"]}
        />
        <button
          className=" col-span-3 bg-red-500 m-2 text-black px-2 py-2 rounded-lg"
          onClick={handleGPTSearch}
        >
          {lang[selectedLang]["search"]}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
