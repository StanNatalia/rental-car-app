import css from "./DescriptionCar.module.css";

const getCityAndCountry = (address) => {
  if (!address) return "";
  const parts = address.split(",").map((part) => part.trim());
  const city = parts[parts.length - 2] || "";
  const country = parts[parts.length - 1] || "";
  return `${city}, ${country}`;
};

const formattedMileage = (mileage) => {
  return mileage.toLocaleString("uk-UA");
};

const DescriptionCar = ({ car }) => {
  if (!car) return null;

  return (
    <div className={css.infoWrapper}>
      <div className={css.mainInfo}>
        <p className={css.brand}>
          {car.brand} {car.model}, {car.year}
        </p>
        <div className={css.addressWrapper}>
          <svg width="12" height="15">
            <use href="/icons.svg#icon-location"></use>
          </svg>
          <p className={css.text}>{getCityAndCountry(car.address)}</p>
          <p className={css.text}>
            Mileage:
            {formattedMileage(car.mileage)} km
          </p>
        </div>
        <p className={css.rentPrice}>${car.rentalPrice}</p>
      </div>

      <p className={css.description}>{car.description}</p>

      <div className={css.conditionWrapper}>
        <div className={css.condition}>
          <h4 className={css.title}>Rental conditions:</h4>
          <ul>
            <li>
              {car.rentalConditions.find((cond) =>
                cond.includes("Minimum age")
              )}
            </li>
            <li>
              {car.rentalConditions.find((cond) =>
                cond.includes("Security deposit")
              )}
            </li>
            <li>
              {car.rentalConditions.find((cond) =>
                cond.toLowerCase().includes("license")
              )}
            </li>
          </ul>
        </div>

        <div className={css.conditions}>
          <h4 className={css.title}>Car Specifications:</h4>
          <p>Year: {car.year}</p>
          <p>Type: {car.type}</p>
          <p>FuelConsumption: {car.fuelConsumption}</p>
          <p>Engine Size: {car.engineSize}</p>
        </div>

        <div className={css.conditions}>
          <h4 className={css.title}>Accessories and functionalities:</h4>
          <ul>
            {car.accessories.map((acc, index) => (
              <li key={index}>{acc}</li>
            ))}
          </ul>
          <ul>
            {car.functionalities.map((fun, index) => (
              <li key={index}>{fun}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCar;
