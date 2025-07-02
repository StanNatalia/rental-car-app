import css from "./BookingForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const BookingForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    const formattedDate = values.bookingDate.toLocaleDateString("uk-UA");

    onAdd({
      id: crypto.randomUUID(),
      name: values.name,
      email: values.email,
      bookingDateRange: { startDate: null, endDate: null },
      comment: values.comment,
    });
    toast.success(`Booking confirmed for ${values.name} on ${formattedDate}`);
    actions.resetForm();
  };

  const onlyLetter = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required("This field is required")
      .min(2, "At least 2 letters")
      .max(20, "Maximum 20 letters")
      .matches(onlyLetter, "Only letters"),

    email: Yup.string()
      .required("This field is required")
      .email("Invalid email"),

    bookingDate: Yup.date()
      .required("This field is required")
      .typeError("Invalid date"),
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

              <div className={css.fieldWrapper}>
                <Field name="bookingDateRange">
                  {({ field, form }) => {
                    const { startDate, endDate } = field.value || {};
                    return (
                      <DatePicker
                        selectsRange
                        startDate={startDate ? new Date(startDate) : null}
                        endDate={endDate ? new Date(endDate) : null}
                        onChange={(dates) => {
                          form.setFieldValue("bookingDateRange", {
                            startDate: dates[0],
                            endDate: dates[1],
                          });
                        }}
                        dateFormat="dd.MM.yyyy"
                        placeholderText="Select date range"
                        className={`${css.field} ${css.inputDatePicker}`}
                        showPopperArrow={false}
                        minDate={new Date()}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  className={css.error}
                  name="bookingDate"
                  component="p"
                />
              </div>

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
