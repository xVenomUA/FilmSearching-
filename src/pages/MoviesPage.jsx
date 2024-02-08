import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { fetchByQuery } from "../API/fetchMovieApi";
import { MovieList } from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../components/Loader/Loader";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const setQueryFromParams = searchQuery.get("query");
  const handleSubmit = async (query) => {
    setMovies([]);
    setSearchQuery({ query: query });
  };

  useEffect(() => {
    setError(false);
    if (!setQueryFromParams) return;
    setLoader(true);
    const fetchData = async () => {
      try {
        const response = await fetchByQuery(setQueryFromParams);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally { 
        setLoader(false);
      }
    };
    fetchData();
  }, [setQueryFromParams]);
  return (
    <main>
      <SearchBar handleSubmit={handleSubmit} />
      {movies.length > 0 && <MovieList dataMovie={movies} />}
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </main>
  );
};
export default MoviesPage;
