import css from "./AboutCar.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../../redux/Cars/operation";
import BookingForm from "../BookingForm/BookingForm";
import DescriptionCar from "../DescriptionCar/DescriptionCar";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  selectCar,
  selectError,
  selectIsLoading,
} from "../../redux/Cars/selectors";

const AboutCar = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const car = useSelector(selectCar);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    if (isError) {
      toast.error("Ooooops, something went wrong. Please, try again later");
    }
  }, [isError]);

  useEffect(() => {
    dispatch(fetchCar(id));
  }, [dispatch, id]);

  if (isError) return <p>Error loading car details</p>;
  if (isLoading) return <Loader />;
  if (!car) return null;

  return (
    <div className={css.wrapper}>
      <div className={css.wrapperForm}>
        <div className={css.imgWrapper}>
          <motion.img
            className={css.img}
            src={car.img}
            alt={car.model}
            initial={{ opacity: 0, scale: 0.97, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        <BookingForm onAdd={() => {}} />
      </div>

      <DescriptionCar car={car} />
    </div>
  );
};

export default AboutCar;
