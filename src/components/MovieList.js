import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies &&
    movies.length && (
      <div className="px-6 py-2">
        <h1 className="font-semibold py-1 mx-2 text-lg md:text-2xl text-white">
          {title}
        </h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies?.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  posterPath={movie.poster_path}
                />
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
