import { useState } from "react";
import css from "./Item.module.css";

const getCityAndCountry = (address) => {
  const parts = address.split(",").map((part) => part.trim());
  const city = parts[parts.length - 2];
  const country = parts[parts.length - 1];
  return `${city} | ${country}`;
};

const capitalize = (type) => {
  if (!type) return "";
  return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
};

const formattedMileage = (mileage) => {
  return mileage.toLocaleString("uk-UA");
};

const Item = ({
  brand,
  model,
  year,
  img,
  rentalPrice,
  address,
  rentalCompany,
  mileage,
  type,
}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((like) => !like);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.itemWrapper}>
        <div className={css.imageWrapper}>
          <img src={img} alt={`${brand} ${model}`} className={css.img} />
          <svg width="16" height="15" className={css.icon} onClick={toggleLike}>
            <use
              href={
                liked ? "/icons.svg#icon-blue-like" : "/icons.svg#icon-like"
              }
            ></use>
          </svg>
        </div>
        <div className={css.wrapperName}>
          <p className={css.name}>
            {brand} <span className={css.span}>{model}</span>, {year}
          </p>
          <p className={css.name}>${rentalPrice}</p>
        </div>
        <div className={css.wrapperInfo}>
          <p>{getCityAndCountry(address)}</p>
          <span className={css.divider}>|</span>
          <p>{rentalCompany}</p>
        </div>
        <div className={css.wrapperInfo}>
          <p>{capitalize(type)}</p>
          <span className={css.divider}>|</span>
          <p>{formattedMileage(mileage)} km</p>
        </div>
      </div>
      <button className={css.btn}>Read More</button>
    </div>
  );
};

export default Item;
