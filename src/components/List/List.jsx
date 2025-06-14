import { useSelector } from "react-redux";
import Item from "../Item/Item";
import css from "./List.module.css";
import { motion } from "framer-motion";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

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

  return (
    <motion.ul
      className={css.list}
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      {filteredCars.map((item) => (
        <motion.li key={item.id} variants={itemVariants}>
          <Item {...item} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default List;
