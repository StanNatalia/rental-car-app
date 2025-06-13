import css from "./DescriptionCar.module.css";

const number = (img) => img.split("/").pop().split("-")[0];

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

const capitalize = (type) => {
  if (!type) return "";
  return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
};

const CheckIcon = () => (
  <svg width="16" height="16">
    <use href="/icons.svg#icon-check-circle"></use>
  </svg>
);

const DescriptionCar = ({ car }) => {
  if (!car) return null;

  return (
    <div className={css.infoWrapper}>
      <div className={css.mainInfo}>
        <p className={css.brand}>
          {car.brand} {car.model}, {car.year}{" "}
          <span className={css.span}>Id: {number(car.img)}</span>
        </p>
        <div className={css.addressWrapper}>
          <div className={css.wrapperSvg}>
            <svg width="12" height="15">
              <use href="/icons.svg#icon-lacation"></use>
            </svg>
            <p className={`${css.text} ${css.address}`}>
              {getCityAndCountry(car.address)}
            </p>
          </div>

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
          <ul className={css.itemWrapper}>
            {car.rentalConditions.map((cond, index) => (
              <li key={index} className={css.item}>
                <div className={css.wrapperSvg}>
                  <CheckIcon />
                  {cond}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={css.conditions}>
          <h4 className={css.title}>Car Specifications:</h4>
          <div className={css.itemWrapper}>
            <div className={css.wrapperSvg}>
              <svg width="12" height="15">
                <use href="/icons.svg#icon-calendar"></use>
              </svg>
              <p>Year: {car.year}</p>
            </div>
            <div className={css.wrapperSvg}>
              <svg width="12" height="15">
                <use href="/icons.svg#icon-car"></use>
              </svg>
              <p>Type: {capitalize(car.type)}</p>
            </div>

            <div className={css.wrapperSvg}>
              <svg width="12" height="15">
                <use href="/icons.svg#icon-fuel"></use>
              </svg>
              <p>FuelConsumption: {car.fuelConsumption}</p>
            </div>
            <div className={css.wrapperSvg}>
              <svg width="12" height="15">
                <use href="/icons.svg#icon-gear"></use>
              </svg>
              <p>Engine Size: {car.engineSize}</p>
            </div>
          </div>
        </div>

        <div className={css.conditions}>
          <h4 className={css.title}>Accessories and functionalities:</h4>
          <ul className={`${css.itemWrapper} ${css.acc}`}>
            {car.accessories.map((acc, index) => (
              <li key={index}>
                <div className={css.wrapperSvg}>
                  <CheckIcon />
                  {acc}
                </div>
              </li>
            ))}
          </ul>
          <ul className={css.itemWrapper}>
            {car.functionalities.map((fun, index) => (
              <li key={index}>
                <div className={css.wrapperSvg}>
                  <CheckIcon />
                  {fun}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCar;
