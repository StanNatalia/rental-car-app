import { useDispatch, useSelector } from "react-redux";
import List from "../List/List";
import SearchBar from "../SearchBar/SearchBar";
import css from "./ListSection.module.css";
import { fetchData } from "../../redux/Cars/operation";
import { incrementPage, resetCars, resetFilters } from "../../redux/Cars/slice";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  selectCars,
  selectError,
  selectFilters,
} from "../../redux/Cars/selectors";

const ListSection = () => {
  const dispatch = useDispatch();
  const { items, page, limit, isLoading, total } = useSelector(selectCars);
  const filters = useSelector(selectFilters);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(incrementPage());
    dispatch(fetchData({ page: nextPage, limit, filters }));
  };

  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(resetFilters());
    dispatch(resetCars());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error("Ooooops, something went wrong. Please, try again later");
    }
  }, [isError]);

  return (
    <div className={css.wrapper}>
      <SearchBar />
      <List cars={items} />
      {isLoading && <Loader />}
      {items.length < total && !isLoading && (
        <button
          className={css.btn}
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default ListSection;
