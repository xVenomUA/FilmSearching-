import { useParams } from "react-router-dom";
import css from  "./Reviews.module.css"
export const Reviews = () => { 
    const { id } = useParams();
    return (
        <h2 className={css.h}>Reviews: ${id}</h2>
    )
}