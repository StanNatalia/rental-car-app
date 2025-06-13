import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <NavLink to="/" className={css.logoLink}>
          <svg width="104" height="16">
            <use href="/icons.svg#icon-logo"></use>
          </svg>
        </NavLink>
        <nav className={css.nav}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={buildLinkClass} to="/catalog">
            Catalog
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
