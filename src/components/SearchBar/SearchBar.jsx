import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import Select, { components } from "react-select";
import { CustomSelectStyles } from "./СustomSelectStyle.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrand, fetchData } from "../../redux/Cars/operation.js";
import { useEffect } from "react";
import { resetCars, setFilters } from "../../redux/Cars/slice.js";

const CustomDropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="16"
        height="16"
        style={{
          transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.4s ease",
        }}
      >
        <use xlinkHref="/icons.svg#icon-down" />
      </svg>
    </components.DropdownIndicator>
  );
};

const PriceSingleValue = ({ data, ...props }) => (
  <components.SingleValue {...props}>To ${data.label}</components.SingleValue>
);

const BrandComponents = {
  DropdownIndicator: CustomDropdownIndicator,
  IndicatorSeparator: () => null,
};

const PriceComponents = {
  DropdownIndicator: CustomDropdownIndicator,
  IndicatorSeparator: () => null,
  SingleValue: PriceSingleValue,
};

const stylesBrandSelector = {
  ...CustomSelectStyles,
  menuList: (base) => ({ ...base, maxHeight: 272 }),
};

const stylesPriceSelector = {
  ...CustomSelectStyles,
  menuList: (base) => ({ ...base, maxHeight: 188 }),
};

const SearchBar = () => {
  const brandList = useSelector((state) => state.cars.brand);
  const filters = useSelector((state) => state.cars.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCars());
    dispatch(fetchData({ page: 1, limit: 16, filters }));
  }, [dispatch, filters]);

  useEffect(() => {
    dispatch(fetchBrand());
  }, [dispatch]);

  const brandOptions = brandList.map((brand) => ({
    value: brand,
    label: brand,
  }));

  return (
    <Formik
      initialValues={{
        brand: "",
        price: null,
        from: "",
        to: "",
      }}
      onSubmit={(values, { resetForm }) => {
        dispatch(setFilters(values));
        resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.wrapper}>
            <label className={css.label} htmlFor="brand">
              Car brand
            </label>
            <div className={css.selectWrapper}>
              <Select
                name="brand"
                options={brandOptions}
                placeholder="Choose a brand"
                styles={stylesBrandSelector}
                components={BrandComponents}
                value={
                  brandOptions.find(
                    (option) => option.value === values.brand
                  ) || null
                }
                onChange={(selectedOption) =>
                  setFieldValue("brand", selectedOption.value)
                }
              />
            </div>
          </div>

          <div className={css.wrapper}>
            <label className={css.label} htmlFor="price">
              Price/ 1 hour
            </label>
            <div className={css.selectWrapper}>
              <Select
                name="price"
                placeholder="Choose a price"
                styles={stylesPriceSelector}
                components={PriceComponents}
                options={[
                  { value: 30, label: "30" },
                  { value: 40, label: "40" },
                  { value: 50, label: "50" },
                  { value: 60, label: "60" },
                  { value: 70, label: "70" },
                  { value: 80, label: "80" },
                  { value: 90, label: "90" },
                  { value: 100, label: "100" },
                  { value: 110, label: "110" },
                  { value: 120, label: "120" },
                ]}
                value={values.price}
                onChange={(selectedOption) =>
                  setFieldValue("price", selectedOption)
                }
                formatValueLabel={(e) => `To $${e.label}`}
                isSearchable={false}
              />
            </div>
          </div>

          <div className={css.wrapper}>
            <label className={css.label} name="from">
              Сar mileage / km
            </label>
            <div className={css.rangeInputGroup}>
              <div className={css.inputWrapper}>
                <span className={css.inputLabel}>From</span>
                <input
                  type="number"
                  name="from"
                  onChange={(e) => setFieldValue("from", e.target.value)}
                  className={css.rangeInput}
                />
              </div>
              <span className={css.separator}></span>
              <div className={css.inputWrapper}>
                <span className={css.inputLabel}>To</span>
                <input
                  type="number"
                  name="to"
                  onChange={(e) => setFieldValue("to", e.target.value)}
                  className={css.rangeInput}
                />
              </div>
            </div>
          </div>
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
