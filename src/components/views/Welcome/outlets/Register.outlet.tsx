import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import * as yup from "yup";
import Button from "../../../common/ia/Button/Button.ia";
import EmailIcon from "../../../common/icons/Email.icon";
import KeyIcon from "../../../common/icons/Key.icon";

interface SignupFormValues {
  email: string;
  password: string;
}

const initialValues: SignupFormValues = {
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

const Signup: React.FC = () => {
  async function handleSubmit(
    values: SignupFormValues,
    actions: FormikHelpers<SignupFormValues>
  ) {
    actions.setSubmitting(true);
    // eslint-disable-next-line no-console
    console.log(values);
  }

  return (
    <>
      <h2>CREATE ACCOUNT</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signupValidationSchema}
        validateOnChange
      >
        {({ errors, touched }) => (
          <Form>
            <label
              htmlFor="email"
              className={errors.email && touched.email ? "error" : ""}
            >
              <EmailIcon />
              <Field
                name="email"
                id="email"
                placeholder={!errors.email && "your@email.com"}
              />
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
            <Button type="submit" outlined>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Signup;
