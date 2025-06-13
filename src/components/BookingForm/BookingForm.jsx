import css from "./BookingForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd({
      id: crypto.randomUUID(),
      name: values.name,
      email: values.email,
      bookingDate: values.bookingDate,
      comment: values.comment,
    });
    console.log(values);
    actions.resetForm();
  };

  const onlyLetter = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
  const onlySigns = /^\d+$/;

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required("this field is required")
      .min(2, "at least 2 letters")
      .max(20, "maximum 20 letters")
      .matches(onlyLetter, "Only letters"),
    email: Yup.string()
      .required("this field is required")
      .min(7, "at least 7 signs")
      .matches(onlySigns, "Only signs"),
    bookingDate: Yup.string()
      .required("this field is required")
      .min(7, "at least 7 signs")
      .matches(onlySigns, "Only signs"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={applySchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.form}>
            <div className={css.formText}>
              <h4 className={css.formTitle}>Book your car now</h4>
              <p className={css.formText}>
                Stay connected! We are always ready to help you.
              </p>
            </div>

            <div className={css.formWrapper}>
              <div className={css.fieldWrapper}>
                <Field
                  name="name"
                  id="name"
                  className={css.field}
                  placeholder="Name*"
                ></Field>
                <ErrorMessage className={css.error} name="name" component="p" />
              </div>

              <div className={css.fieldWrapper}>
                <Field
                  name="email"
                  id="email"
                  className={css.field}
                  placeholder="Email*"
                ></Field>
                <ErrorMessage
                  className={css.error}
                  name="email"
                  component="p"
                />
              </div>

              <Field name="bookingDate">
                {({ field, form }) => (
                  <DatePicker
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) => form.setFieldValue("bookingDate", date)}
                    dateFormat="dd.MM.yyyy"
                    placeholderText="Select date"
                    className={css.field}
                    showPopperArrow={false}
                  />
                )}
              </Field>

              <Field
                as="textarea"
                name="comment"
                id="comment"
                className={css.field}
                placeholder="Comment"
              ></Field>
            </div>

            <button type="submit" className={css.btn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
