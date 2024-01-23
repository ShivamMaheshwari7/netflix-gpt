import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 rounded-xl">
        <input
          className="p-4 m-4 col-span-9 rounded-lg text-xl"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="m-4 bg-red-600 text-white rounded-lg col-span-3 text-xl">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
