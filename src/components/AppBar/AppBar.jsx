import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import { clsx } from "clsx";
const styleBar = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export const AppBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={styleBar}>
          Home
        </NavLink>
        <NavLink to="/movies" className={styleBar}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
