import { FormikErrors, FormikValues } from "formik";

export function hasErrors(errors: FormikErrors<FormikValues>): boolean {
  return !!Object.keys(errors).length;
}
