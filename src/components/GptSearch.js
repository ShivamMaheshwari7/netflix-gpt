import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-full"
          src={BG_URL}
          alt="background"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
        {/* 
        GptSearchBar
        GptMovieSuggestions
     */}
      </div>
    </>
  );
};

export default GptSearch;
