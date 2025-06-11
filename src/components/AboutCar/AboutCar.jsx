import css from "./AboutCar.module.css";

const AboutCar = ({ car }) => {
  if (!car) {
    return <div className={css.error}>Car not found...</div>;
  }

  const {
    brand,
    model,
    year,
    img,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
    type,
  } = car;
  return (
    <div className={css.wrapper}>
      <div className={css.itemWrapper}>
        <div className={css.imageWrapper}>
          <img src={img} alt={`${brand} ${model}`} className={css.img} />
        </div>
        <div className={css.wrapperName}>
          <p className={css.name}>
            {brand} <span className={css.span}>{model}</span>, {year}
          </p>
          <p className={css.name}>${rentalPrice}</p>
        </div>
        <div className={css.wrapperInfo}>
          <p>{address}</p>
          <span className={css.divider}>|</span>
          <p>{rentalCompany}</p>
        </div>
        <div className={css.wrapperInfo}>
          <p>{type}</p>
          <span className={css.divider}>|</span>
          <p>{mileage} km</p>
        </div>
      </div>
      <button className={css.btn}>Read More</button>
    </div>
  );
};

export default AboutCar;
