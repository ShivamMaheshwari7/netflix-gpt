import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="md:-mt-64 relative z-20 md:pl-4">
        <MovieList
          title="Now Playing Movies"
          movies={movies.nowPlayingMovies}
        />
        <MovieList title="Popular Movies" movies={movies.popularMovies} />
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
