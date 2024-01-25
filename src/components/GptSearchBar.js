import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      /* TODO: Write Error Handling*/
    }

    const gptMovies = gptResults?.choices?.[0]?.message?.content?.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieResults: tmdbResults, movieNames: gptMovies })
    );
  };

  return (
    <div className="pt-[45%] md:pt-[8%] flex justify-center">
      <form
        className="bg-black w-full m-3 md:m-0 md:w-1/2 grid grid-cols-12 rounded-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-3 md:p-4 m-3 mr-2 md:m-4 col-span-9 rounded-lg md:text-xl text-sm"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="m-3 md:m-4 bg-red-600 text-white rounded-lg col-span-3 md:text-xl text-sm"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
