import { useState } from "react";
import { fetchTrendDay } from "../../API/fetchMovieApi";
import { useEffect } from "react";
import { MovieItem } from "../MovieItem/Movietem";
import css from "./MovieList.module.css";
import { Loader } from "../Loader/Loader";
import { Link, useLocation } from "react-router-dom";
export const MovieList = () => {
  const [movie, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const getTrendDay = async () => {
      try {
        setLoader(true);
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
  return (
    <>
      {loader && <Loader />}
      <ul className={css.list}>
        {movie.length > 0 &&
          movie.map((item) => {
            return (
              <Link
                to={`/movies/${item.id}`}
                key={item.id}
                state={{ from: location }}
              >
                <MovieItem data={item} />
              </Link>
            );
          })}
      </ul>
    </>
  );
};
