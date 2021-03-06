import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as yup from "yup";
import API from "../../../../api/api.client";
import RoutePaths from "../../../../config/router.config";
import Button from "../../../common/ia/Button/Button.ia";
import EmailIcon from "../../../common/icons/Email.icon";
import KeyIcon from "../../../common/icons/Key.icon";

interface LoginFormValues {
  email: string;
  password: string;
}

const initialValues: LoginFormValues = {
  email: "",
  password: ""
};

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required.")
    .email("Invalid email address."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "At least 8 characters.")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
      "Must include uppercase, lowercase and digits."
    )
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();

  async function handleSubmit(
    credentials: LoginFormValues,
    _actions: FormikHelpers<LoginFormValues>
  ) {
    const { status } = await API.authenticateLocally(credentials);

    if (status === 204) navigate(RoutePaths.MY);
    /**
     * @TODO Should show error message in a notification.
     */
  }

  return (
    <>
      <button type="button" onClick={() => setSearchParams("p=signup")}>
        <h3>New user?</h3>
        <small>CREATE A FREE ACOUNT</small>
      </button>
      <h2>SIGN IN WITH EMAIL</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
        validateOnChange
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <label
              htmlFor="email"
              className={errors.email && touched.email ? "error" : ""}
            >
              <EmailIcon />
              <Field name="email" id="email" placeholder="your@email.com" />
              {errors.email && touched.email && <span>{errors.email}</span>}
            </label>
            <label
              htmlFor="password"
              className={errors.password && touched.password ? "error" : ""}
            >
              <KeyIcon />
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                autoComplete="true"
              />
              {errors.password && touched.password && (
                <span>{errors.password}</span>
              )}
            </label>
            <Button type="submit" outlined disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
