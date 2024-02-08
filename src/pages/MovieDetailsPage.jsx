import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchByID } from "../API/fetchMovieApi";
import { Loader } from "../components/Loader/Loader";
import { FaArrowLeft } from "react-icons/fa";
import { MovieDetailsTitle } from "../components/MovieDetailsTitle/MovieDetailsTitle";
import css from "../pages/MovieDetailsPage.module.css";
import clsx from "clsx";
const MovieDetailsPage = () => {
  const { id } = useParams();
  const [dataById, setDataByID] = useState({});
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const backInLocation = location.state?.from ?? "/";
  const styleMovieDetails = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  useEffect(() => {
    if (!id) return;
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
      <Link to={backInLocation} className={css.linkArrow}>
        <FaArrowLeft className={css.icon} />
      </Link>
      {dataById && <MovieDetailsTitle data={dataById} />}
      <div className={css.linkDiv}>
        <NavLink
          to={"cast"}
          className={styleMovieDetails}
          state={{ from: location.state?.from }}
        >
          Cast
        </NavLink>
        <NavLink
          to={"reviews"}
          className={styleMovieDetails}
          state={{ from: location.state?.from }}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
      {loader && <Loader />}
    </main>
  );
};

export default MovieDetailsPage;
