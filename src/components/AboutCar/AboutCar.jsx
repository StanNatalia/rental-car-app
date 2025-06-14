import css from "./AboutCar.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../../redux/Cars/operation";
import BookingForm from "../BookingForm/BookingForm";
import DescriptionCar from "../DescriptionCar/DescriptionCar";
import Loader from "../Loader/Loader";

const AboutCar = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const car = useSelector((state) => state.cars.car);
  const isLoading = useSelector((state) => state.cars.isLoading);
  const isError = useSelector((state) => state.cars.isError);

  useEffect(() => {
    dispatch(fetchCar(id));
  }, [dispatch, id]);

  if (isError) return <p>Error loading car details</p>;
  if (isLoading) return <Loader />;
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
        <BookingForm onAdd={(data) => console.log("Booked car:", data)} />
      </div>

      <DescriptionCar car={car} />
    </div>
  );
};

export default AboutCar;
