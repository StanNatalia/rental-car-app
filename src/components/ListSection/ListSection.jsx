import { useDispatch, useSelector } from "react-redux";
import List from "../List/List";
import SearchBar from "../SearchBar/SearchBar";
import css from "./ListSection.module.css";
import { useEffect } from "react";
import { fetchData } from "../../redux/Cars/operation";
import { incrementPage, resetCars } from "../../redux/Cars/slice";

const ListSection = () => {
  const dispatch = useDispatch();
  const { items, page, limit, isLoading, total } = useSelector(
    (state) => state.cars
  );

  useEffect(() => {
    dispatch(resetCars());
    dispatch(fetchData({ page: 1, limit }));
  }, [dispatch, limit]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(incrementPage());
    dispatch(fetchData({ page: nextPage, limit }));
  };

  return (
    <div className={css.wrapper}>
      <SearchBar />
      <List cars={items} />
      {items.length < total && (
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
