/* eslint-disable no-console */
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import * as yup from "yup";
import API from "../../../../api/api.client";
import RoutePaths from "../../../../config/router.config";
import Button from "../../../common/ia/Button/Button.ia";
import ConfirmPasswordIcon from "../../../common/icons/ConfirmPassword.icon";
import EmailIcon from "../../../common/icons/Email.icon";
import KeyIcon from "../../../common/icons/Key.icon";

interface SignupFormValues {
  email: string;
  password: string;
  repassword: string;
}

const initialValues: SignupFormValues = {
  email: "",
  password: "",
  repassword: ""
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
    ),
  repassword: yup
    .string()
    .required()
    .equals([yup.ref("password")], "Passwords must match.")
});

const Signup: React.FC = () => {
  const navigate = useNavigate();

  async function handleSubmit(
    { email, password }: SignupFormValues,
    _actions: FormikHelpers<SignupFormValues>
  ) {
    const { status } = await API.registerLocally({ email, password });

    if (status === 204) navigate(RoutePaths.ROOT);
    /**
     * @TODO Should show error message in notification.
     */
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
            <label
              htmlFor="repassword"
              className={errors.repassword && touched.repassword ? "error" : ""}
            >
              <ConfirmPasswordIcon />
              <Field
                type="password"
                name="repassword"
                id="repassword"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              />
              {errors.repassword && touched.repassword && (
                <span>{errors.repassword}</span>
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
