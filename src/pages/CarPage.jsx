import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AboutCar from "../components/AboutCar/AboutCar";

const CarPage = () => {
  const { carId } = useParams();
  const cars = useSelector((state) => state.cars.items);

  console.log("carId:", carId);
  console.log("cars:", cars);

  const car = cars.find((item) => String(item.id) === String(carId));

  console.log("found car:", car);

  return (
    <div>
      <AboutCar car={car} />
    </div>
  );
};

export default CarPage;
