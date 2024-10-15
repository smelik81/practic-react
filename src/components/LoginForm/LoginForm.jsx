/* const LoginForm = ({ onLogin }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { login, password } = form.elements; // Деструктуризуємо елементи форми
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="login" placeholder="Enter name" />
      </label>
      <label>
        Password:
        <input type="password" name="password" placeholder="enter password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm; */

import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const emeilId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Login in App</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <div>
              <div className={css.inputForm}>
                <label htmlFor={emeilId}>Email: </label>
                <Field
                  type="email"
                  name="email"
                  id={emeilId}
                  autoComplete="email"
                  className={css.input}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.errorMessage}
                />
              </div>
              <div className={css.inputForm}>
                <label htmlFor={passwordId}>Password: </label>
                <Field
                  type="password"
                  name="password"
                  id={passwordId}
                  autoComplete="password"
                  className={css.input}
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.errorMessage}
                />
              </div>
              <button
                type="submit"
                className={css.btn}
                disabled={isSubmitting || !isValid || !dirty}
              >
                {isSubmitting ? "Loading ..." : "Log in"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
