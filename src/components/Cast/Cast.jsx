import { useParams } from "react-router-dom";
import css from "./Cast.module.css"
export const Cast = () => {
    const { id } = useParams();
    return <h2 className={css.id}>Cast: {id}</h2>;
    }