import { Field, Form, Formik, FormikHelpers } from "formik";
import { useAtom } from "jotai";
import React from "react";
// import { useMutation } from 'react-query';
import * as yup from "yup";
import { color } from "../../../../resources/style/variables.style";
import profileState from "../../../../store/profile.state";
import Button from "../../../common/ia/Button/Button.ia";

const validationSchema = yup.object().shape({
  displayName: yup
    .string()
    .required("Display name is required.")
    .matches(/\w+/g, "May not include special characters."),
  profilePicture: yup.mixed().test("type", "Incorrect file type.", (file) => {
    if (!file) return true;

    return ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(
      file.type
    );
  })
});

interface FormValues {
  profilePicture: File | null;
  displayName: string;
}

const ProfileEdit: React.FC = () => {
  const [profile, setProfile] = useAtom(profileState);
  // const [mutate] = useMutation();

  async function handleSubmit(
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) {
    // eslint-disable-next-line no-console
    console.log(values);
  }

  const initialFormValues: FormValues = {
    profilePicture: null,
    displayName: profile.displayName
  };

  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isSubmitting, setFieldValue }) => (
          <Form>
            <label htmlFor="displayName">
              Display Name
              <Field
                name="displayName"
                id="displayName"
                placeholder="Username"
              />
              {errors.displayName && touched.displayName && (
                <span>{errors.displayName}</span>
              )}
            </label>
            <label htmlFor="profilePicture">
              <input
                name="profilePicture"
                id="profilePicture"
                type="file"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.currentTarget.files) {
                    setFieldValue(
                      "profilePicture",
                      event.currentTarget.files[0],
                      true
                    );
                  }
                }}
              />
              {errors.profilePicture && touched.profilePicture && (
                <span>{errors.profilePicture}</span>
              )}
            </label>
            <Button filled color={color.blue} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileEdit;
