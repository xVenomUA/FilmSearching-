import { useParams } from "react-router-dom";
import css from "../pages/Reviews.module.css";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader/Loader";
import { fetchInfo } from "../API/fetchMovieApi";
import { ReviewItem } from "../components/ReviewItem/ReviewItem";
export const Reviews = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setLoader(true);
    const getReviews = async () => {
      try {
        const response = await fetchInfo(id, "reviews");
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getReviews();
  }, [id]);
  return (
    <>
      <ul className={css.list}>
        {reviews.length > 0 &&
          reviews.map((item) => {
            return (
              <li key={item.id}>
                <ReviewItem data={item} />
              </li>
            );
          })}
      </ul>
      {loader && <Loader />}
    </>
  );
};
