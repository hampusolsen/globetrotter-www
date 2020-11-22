import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import API from "../../../../api/api.client";
import { ALLOWED_IMAGE_TYPES } from "../../../../config/constants.config";
import profileState from "../../../../store/profile.state";
import Button from "../../../common/ia/Button/Button.ia";
import Input from "../../../common/ia/Input/Input.ia";
import UploadIcon from "../../../common/icons/Upload.icon";

const validationSchema = yup.object().shape({
  displayName: yup
    .string()
    .required("Field is required.")
    .min(5, "Minimum five (5) characters.")
    .max(32, "Maximum 32 characters.")
    .matches(/^[\w\d ]+$/g, "May not include special characters."),
  profilePicture: yup
    .mixed()
    .notRequired()
    .test("type", "Incorrect file type.", (file) => {
      if (!file) return true;

      return ALLOWED_IMAGE_TYPES.includes(file.type);
    })
});

export type EditProfileFormValues = {
  profilePicture: File | undefined;
  displayName: string;
};

const EditProfile: React.FC = () => {
  const [profile, setProfile] = useAtom(profileState);

  const initialFormValues: EditProfileFormValues = {
    profilePicture: undefined,
    displayName: profile.display_name
  };

  async function handleSubmit(
    values: EditProfileFormValues,
    _actions: FormikHelpers<EditProfileFormValues>
  ) {
    const profileUpdates = await API.updateUserProfile(values);
    setProfile((current) => ({ ...current, ...profileUpdates }));
  }

  const Wrapper = styled.div`
    padding: 24px 32px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
  `;

  return (
    <Wrapper>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(props: FormikProps<Record<string, unknown>>) => (
          <Form>
            <Input name="displayName" label="Display Name" {...props} />
            <Input
              name="profilePicture"
              type="file"
              label={
                (props.values as EditProfileFormValues).profilePicture?.name
              }
              Icon={UploadIcon}
              {...props}
            />
            <Button filled type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default EditProfile;
