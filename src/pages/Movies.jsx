import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { fetchByQuery } from "../API/fetchMovieApi";
import { MovieList } from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const setQueryFromParams = searchQuery.get("query");
  const handleSubmit = async (query) => {
    setMovies([]);
    setSearchQuery({ query: query });
  };

  useEffect(() => {
    if (!setQueryFromParams) return;
    const fetchData = async () => {
      try {
        const response = await fetchByQuery(setQueryFromParams);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setQueryFromParams]);
  return (
    <main>
      <SearchBar handleSubmit={handleSubmit} />
      {movies.length > 0 && <MovieList dataMovie={movies} />}
    </main>
  );
};
export default Movies;
