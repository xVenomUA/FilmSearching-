import { useState } from "react";
import { fetchTrendDay } from "../../API/fetchMovieApi";
import { useEffect } from "react";
import { MovieItem } from "../MovieItem/Movietem";
import css from "./MovieList.module.css";
import { Loader } from "../Loader/Loader";
export const MovieList = () => {
  const [movie, setMovies] = useState({});
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const getTrendDay = async () => {
      setLoader(true);
      try {
        const data = await fetchTrendDay();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getTrendDay();
  }, []);
  console.log(movie);
  return (
    <>
      {loader && <Loader />}
      <ul className={css.list}>
        {movie.length > 0 &&
          movie.map((item) => {
            return <MovieItem key={item.id} data={item} />;
          })}
      </ul>
    </>
  );
};
