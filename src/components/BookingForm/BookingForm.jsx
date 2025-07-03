import css from "./BookingForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { CustomDateInput } from "../CustomDateInput/CustomDateInput";

const BookingForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    email: "",
    bookingDateRange: { startDate: null, endDate: null },
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    const { startDate, endDate } = values.bookingDateRange;

    const formattedStart = startDate
      ? new Date(startDate).toLocaleDateString("uk-UA")
      : "";
    const formattedEnd = endDate
      ? new Date(endDate).toLocaleDateString("uk-UA")
      : "";

    onAdd({
      id: crypto.randomUUID(),
      name: values.name,
      email: values.email,
      bookingDateRange: values.bookingDateRange,
      comment: values.comment,
    });
    toast.success(
      endDate
        ? `Booking confirmed from ${formattedStart} to ${formattedEnd}`
        : `Booking confirmed on ${formattedStart}`
    );
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

    bookingDateRange: Yup.object().shape({
      startDate: Yup.date()
        .required("Start date is required")
        .typeError("Invalid start date"),
      endDate: Yup.date().nullable().typeError("Invalid end date"),
    }),
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
                          if (!dates[1]) {
                            form.setFieldValue("bookingDateRange", {
                              startDate: dates[0],
                              endDate: null,
                            });
                          } else {
                            form.setFieldValue("bookingDateRange", {
                              startDate: dates[0],
                              endDate: dates[1],
                            });
                          }
                        }}
                        dateFormat="dd.MM.yyyy"
                        className={`${css.field} ${css.inputDatePicker}`}
                        showPopperArrow={false}
                        minDate={new Date()}
                        value={
                          startDate
                            ? endDate
                              ? `${new Date(startDate).toLocaleDateString(
                                  "uk-UA"
                                )} – ${new Date(endDate).toLocaleDateString(
                                  "uk-UA"
                                )}`
                              : `${new Date(startDate).toLocaleDateString(
                                  "uk-UA"
                                )}`
                            : ""
                        }
                        customInput={<CustomDateInput />}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  className={css.error}
                  name="bookingDateRange.startDate"
                  component="p"
                />
              </div>

              <Field
                as="textarea"
                name="comment"
                id="comment"
                className={`${css.field} ${css.textarea}`}
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
