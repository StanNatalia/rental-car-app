import { useSelector } from "react-redux";
import Item from "../Item/Item";
import css from "./List.module.css";

const List = () => {
  const cars = useSelector((state) => state.cars.items);
  const filters = useSelector((state) => state.cars.filters);

  const filteredCars = cars.filter((car) => {
    const matchBrand = filters.brand
      ? car.brand.toLowerCase() === filters.brand.toLowerCase()
      : true;

    const matchPrice = filters.price
      ? parseFloat(car.rentalPrice.replace("$", "")) <= filters.price.value
      : true;

    const matchFrom = filters.from ? car.mileage >= Number(filters.from) : true;
    const matchTo = filters.to ? car.mileage <= Number(filters.to) : true;

    return matchBrand && matchPrice && matchFrom && matchTo;
  });

  if (!Array.isArray(cars) || cars.length === 0) {
    return <p>No cars available...</p>;
  }

  console.log("cars:", cars);

  return (
    <ul className={css.list}>
      {filteredCars.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  );
};

export default List;
