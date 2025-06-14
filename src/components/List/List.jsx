import { useSelector } from "react-redux";
import Item from "../Item/Item";
import css from "./List.module.css";

const List = () => {
  const cars = useSelector((state) => state.cars.items);

  if (!Array.isArray(cars) || cars.length === 0) {
    return <p>No cars available...</p>;
  }

  return (
    <ul className={css.list}>
      {cars.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  );
};

export default List;
