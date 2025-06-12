import { useLocation } from "react-router-dom";
import AboutCar from "./../components/AboutCar/AboutCar";

const CarPage = () => {
  const location = useLocation();
  const state = location.state || {};

  return (
    <div>
      <AboutCar initialData={state} />
    </div>
  );
};

export default CarPage;
