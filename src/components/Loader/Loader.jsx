import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  const isLoading = useSelector((state) => state.cars.isLoading);

  return (
    <div className={css.loaderWrapper}>
      <PulseLoader
        color="#3470ff"
        loading={isLoading}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
