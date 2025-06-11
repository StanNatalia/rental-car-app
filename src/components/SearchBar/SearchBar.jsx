import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import Select from "react-select";

const SearchBar = () => {
  return (
    <Formik
      initialValues={{
        brand: "",
        price: "",
        minMileage: "",
        maxMileage: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label className={css.label} name="brand">
            Car brand
          </label>
          <Select
            name="brand"
            type="select"
            placeholder="Choose a brand"
            className={css.input}
          />
        </div>

        <div className={css.wrapper}>
          <label className={css.label} name="price">
            Price/ 1 hour
          </label>
          <Select
            name="price"
            type="select"
            placeholder="Choose a price"
            className={css.input}
          />
        </div>

        <div className={css.wrapper}>
          <label className={css.label} name="mileage">
            Сar mileage / km
          </label>
          <Field
            name="mileage"
            type="text"
            placeholder="Comment"
            className={css.input}
          />
        </div>
        <button className={css.btn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
