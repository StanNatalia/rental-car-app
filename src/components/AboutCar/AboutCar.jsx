import css from "./AboutCar.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../../redux/Cars/operation";
import BookingForm from "../BookingForm/BookingForm";
import DescriptionCar from "../DescriptionCar/DescriptionCar";

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
      <div className={css.wrapperForm}>
        <img
          className={css.img}
          src={car.img}
          alt={car.model}
          style={{ maxWidth: "640px" }}
        />
        <BookingForm />
      </div>

      <DescriptionCar car={car} />
    </div>
  );
};

export default AboutCar;
