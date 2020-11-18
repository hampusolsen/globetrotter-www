import { FormikErrors, FormikHelpers } from "formik";
import React from "react";
import * as yup from "yup";
import { ALLOWED_IMAGE_TYPES } from "../../../config/constants.config";
import { TravelFormValues } from "./CreateTravel.view";
import FirstSection from "./sub-components/FirstSection.sub";
import SecondSection from "./sub-components/SecondSection.sub";
import ThirdSection from "./sub-components/ThirdSection.sub";

export const firstStepValidation = {
  fieldNames: ["title", "description"],
  schema: yup.object({
    title: yup.string().required().min(3).max(32).label("Title"),
    description: yup.string().notRequired().max(400).label("Description")
  })
};

export const secondStepValidation = {
  fieldNames: ["to_date", "from_date"],
  schema: yup.object({
    from_date: yup.date().required(),
    to_date: yup
      .date()
      .required()
      .test(
        "later than from",
        "Date must be after start date.",
        function compareDates(toDate) {
          if (!toDate) return true;

          const fromDate = this.resolve(yup.ref("from_date")) as Date;
          if (toDate < fromDate) return true;

          return false;
        }
      )
  })
};

export const thirdStepValidation = {
  fieldNames: ["images"],
  schema: yup.object({
    images: yup
      .mixed()
      .notRequired()
      .test("images", "Images must be of png or jpeg.", (files) => {
        if (!files) return true;

        return files.every((file: File) =>
          ALLOWED_IMAGE_TYPES.includes(file.type)
        );
      })
  })
};

export const stepValidations = [
  firstStepValidation,
  secondStepValidation,
  thirdStepValidation
];

export async function handleSubmit(
  values: TravelFormValues,
  _actions: FormikHelpers<TravelFormValues>
): Promise<void> {
  // eslint-disable-next-line no-console
  console.log(values);
}

export function hasErrors(errors: FormikErrors<TravelFormValues>): boolean {
  return !!Object.keys(errors).length;
}

export function renderStep(step: number): React.ReactElement | null {
  switch (step) {
    case 0:
      return <FirstSection />;
    case 1:
      return <SecondSection />;
    case 2:
      return <ThirdSection />;
    default:
      return null;
  }
}
