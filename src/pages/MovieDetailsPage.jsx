import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchByID } from "../API/fetchMovieApi";
import { Loader } from "../components/Loader/Loader";
import { FaArrowLeft } from "react-icons/fa";
import { MovieDetailsTitle } from "../components/MovieDetailsTitle/MovieDetailsTitle";
import css from "../pages/MovieDetailsPage.module.css";
const MovieDetailsPage = () => {
  const { id } = useParams();
  const [dataById, setDataByID] = useState({});
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const backInLocation = location.state?.from ?? "/";
  useEffect(() => {
    const fetchDataById = async () => {
      try {
        setLoader(true);
        const data = await fetchByID(id);
        setDataByID(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchDataById();
  }, [id]);
  return (
    <main>
      {loader && <Loader/>}
      <Link to={backInLocation} className={css.link}>
          <FaArrowLeft className={css.icon} />
      </Link>
      {dataById && <MovieDetailsTitle data={dataById} />}
    </main>
  );
};

export default MovieDetailsPage;
