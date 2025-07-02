import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import css from "./Item.module.css";
import { toggleFavorite } from "../../redux/Cars/slice";
import { capitalize } from "../../utils/utils";
import { formattedMileage } from "../../utils/utils";

const getCityAndCountry = (address) => {
  const parts = address.split(",").map((part) => part.trim());
  const city = parts[parts.length - 2];
  const country = parts[parts.length - 1];
  return `${city} | ${country}`;
};

const Item = ({
  id,
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.cars.favorites);
  const isFavorite = favorites.includes(id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  const handleClick = () => {
    navigate(`/car/${id}`);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.itemWrapper}>
        <div className={css.imageWrapper}>
          <img src={img} alt={`${brand} ${model}`} className={css.img} />
          <button onClick={handleToggleFavorite}>
            <svg width="16" height="15" className={css.icon}>
              <use
                href={
                  isFavorite
                    ? "/icons.svg#icon-blue-like"
                    : "/icons.svg#icon-like"
                }
              ></use>
            </svg>
          </button>
        </div>
        <div className={css.wrapperName}>
          <h3 className={css.name}>
            {brand} <span className={css.span}>{model}</span>, {year}
          </h3>
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
      <button className={css.btn} onClick={handleClick}>
        Read More
      </button>
    </div>
  );
};

export default Item;
