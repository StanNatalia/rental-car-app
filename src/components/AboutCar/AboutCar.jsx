import css from "./AboutCar.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../../redux/Cars/operation";

const AboutCar = ({ initialData }) => {
  const { type, mileage, year } = initialData;

  const { id } = useParams();

  const dispatch = useDispatch();

  const car = useSelector((state) => state.cars.car);
  const isLoading = useSelector((state) => state.cars.isLoading);
  const isError = useSelector((state) => state.cars.isError);

  useEffect(() => {
    dispatch(fetchCar(id));
  }, [dispatch, id]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading car details</p>;
  if (!car) return null;

  return (
    <div className={css.wrapper}>
      <h2>
        {car.brand} {car.model}
      </h2>
      <img src={car.img} alt={car.model} style={{ maxWidth: "640px" }} />
      <p>
        <strong>Price:</strong> ${car.rentalPrice}
      </p>
      <p>
        <strong>Type:</strong> {type || car.type}
      </p>
      <p>
        <strong>Year:</strong> {year || car.year}
      </p>
      <p>
        <strong>Mileage:</strong> {mileage || car.mileage} km
      </p>
      <p>
        <strong>Address:</strong> {car.address}
      </p>
    </div>
  );
};

export default AboutCar;
