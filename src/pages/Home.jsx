import { useEffect, useState } from "react";
import { MovieList } from "../components/MovieList/MovieList";
import { fetchTrendDay } from "../API/fetchMovieApi";
import { Loader } from "../components/Loader/Loader";
const Home = () => {
  const [movie, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
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
    <main>
      {movie.length > 0 && <MovieList dataMovie={movie} />}
      {loader && <Loader />}
    </main>
  );
};
export default Home;
