import { Link } from "react-router-dom";
import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div>
      <div className={css.container}>
        <h1 className={css.title}>404</h1>
        <p className={css.message}>
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className={css.homeLink}>
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
