import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchInfo } from "../API/fetchMovieApi";
import { Loader } from "../components/Loader/Loader";
import { CastItem } from "../components/CastItem/CastItem";
import css from "../pages/Cast.module.css";
export const Cast = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    setLoader(true);
    const getReviews = async () => {
      try {
        const response = await fetchInfo(id, "credits");
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getReviews();
  }, [id]);
  console.log(cast);
  return (
    <>
      <ul className={css.list}>{cast.length > 0 && 
        cast.map((item) => {
          return (
            <li key={item.id}>
             <CastItem data={item} />
            </li>
          );
        })
      }</ul>
      {loader && <Loader />}
    </>
  );
};
