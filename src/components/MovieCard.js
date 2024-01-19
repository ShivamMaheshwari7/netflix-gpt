import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="w-40 m-2">
      <img
        src={IMG_CDN_URL + posterPath}
        alt={title + " Poster"}
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
