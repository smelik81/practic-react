import { Field, Formik, Form } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Registration on Your App</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationInputSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div className={css.inputFormRegistration}>
              <label htmlFor={nameId} className={css.labelRegistr}>
                Name:{" "}
              </label>
              <Field
                type="text"
                name="name"
                id={nameId}
                autoComplete="name"
                className={css.input}
              />
              {touched.name && errors.name ? (
                <div className={`${css.message} ${css.error}`}>
                  {errors.name}
                </div>
              ) : (
                touched.name && (
                  <div className={`${css.message} ${css.required}`}>
                    Required
                  </div>
                )
              )}
            </div>
            <div className={css.inputFormRegistration}>
              <label htmlFor={emailId} className={css.labelRegistr}>
                Email:{" "}
              </label>
              <Field
                type="email"
                name="email"
                id={emailId}
                autoComplete="email"
                className={css.input}
              />
              {touched.email && errors.email ? (
                <div className={`${css.message} ${css.error}`}>
                  {errors.email}
                </div>
              ) : (
                touched.email && (
                  <div className={`${css.message} ${css.required}`}>
                    Required
                  </div>
                )
              )}
            </div>
            <div className={css.inputFormRegistration}>
              <label htmlFor={passwordId} className={css.labelRegistr}>
                Password:{" "}
              </label>
              <Field
                type="password"
                name="password"
                id={passwordId}
                autoComplete="password"
                className={css.input}
              />
              {touched.password && errors.password ? (
                <div className={`${css.message} ${css.error}`}>
                  {errors.password}
                </div>
              ) : (
                touched.password && (
                  <div className={`${css.message} ${css.required}`}>
                    Required
                  </div>
                )
              )}
            </div>
            <div className={css.inputFormRegistration}>
              <label htmlFor={confirmPasswordId} className={css.labelRegistr}>
                Confirm Password:{" "}
              </label>
              <Field
                type="password"
                name="confirmPassword"
                id={confirmPasswordId}
                autoComplete="new-password"
                className={css.input}
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <div className={`${css.message} ${css.error}`}>
                  {errors.confirmPassword}
                </div>
              ) : (
                touched.confirmPassword && (
                  <div className={`${css.message} ${css.required}`}>
                    Required
                  </div>
                )
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={css.btnRegistr}
            >
              {isSubmitting ? "Submiting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
