import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return;

  return (
    <div className="w-28 md:w-40 m-2">
      <img
        src={IMG_CDN_URL + posterPath}
        alt={title + " Poster"}
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
