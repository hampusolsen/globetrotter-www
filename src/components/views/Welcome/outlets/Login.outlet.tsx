import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useSearchParams } from "react-router-dom";
import * as yup from "yup";
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

const signupValidationSchema = yup.object().shape({
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
  const [, setSearchParams] = useSearchParams();

  async function handleSubmit(
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) {
    actions.setSubmitting(true);
    // eslint-disable-next-line no-console
    console.log(values);
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
        validationSchema={signupValidationSchema}
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
