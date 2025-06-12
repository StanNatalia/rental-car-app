import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import Select, { components } from "react-select";
import { CustomSelectStyles } from "./СustomSelectStyle.js";

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

const CustomSingleValue = ({ data, ...props }) => (
  <components.SingleValue {...props}>To ${data.label}</components.SingleValue>
);

const customComponents = {
  DropdownIndicator: CustomDropdownIndicator,
  IndicatorSeparator: () => null,
  SingleValue: CustomSingleValue,
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
  return (
    <Formik
      initialValues={{
        brand: "",
        price: null,
        from: "",
        to: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.wrapper}>
            <label className={css.label} htmlFor="brand">
              Car brand
            </label>
            <Select
              name="brand"
              placeholder="Choose a brand"
              styles={stylesBrandSelector}
              components={customComponents}
            />
          </div>

          <div className={css.wrapper}>
            <label className={css.label} htmlFor="price">
              Price/ 1 hour
            </label>
            <Select
              name="price"
              placeholder="Choose a price"
              styles={stylesPriceSelector}
              components={customComponents}
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

          <div className={css.wrapper}>
            <label className={css.label} name="from">
              Сar mileage / km
            </label>
            <div className={css.rangeInputGroup}>
              <div className={css.inputWrapper}>
                <span className={css.inputLabel}>From</span>
                <input type="number" name="from" className={css.rangeInput} />
              </div>
              <span className={css.separator}></span>
              <div className={css.inputWrapper}>
                <span className={css.inputLabel}>To</span>
                <input type="number" name="to" className={css.rangeInput} />
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
