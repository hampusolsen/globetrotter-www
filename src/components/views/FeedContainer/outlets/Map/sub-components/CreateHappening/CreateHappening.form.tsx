import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { ALLOWED_IMAGE_TYPES } from "../../../../../../../config/constants.config";
import { travelAtom } from "../../../../../../../store/global.state";
import { Travel } from "../../../../../../../store/types.state";
import Input from "../../../../../../common/ia/Input/Input.ia";
import CameraIcon from "../../../../../../common/icons/Camera.icon";
import Text from "../../../../../../common/Text";

const firstStepValidationSchema = Yup.object({
  travelId: Yup.string().label("Travel").required()
});

const TravelItem = styled.li`
  &:first-child {
    margin-top: 12px;
  }
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

function byDateAsc(a: Travel, b: Travel): number {
  if (a.createdAt && b.createdAt) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  }

  return 0;
}

const FirstStep: React.FC = () => {
  const [travels] = useAtom(travelAtom);

  return (
    <>
      <Text title>Choose Travel</Text>
      <ul style={{ flex: 1, overflowY: "scroll" }}>
        {travels.sort(byDateAsc).map((travel) => (
          <TravelItem key={travel.id}>
            <Input
              type="radio"
              name="travelId"
              value={travel.id}
              label={travel.title}
            />
          </TravelItem>
        ))}
      </ul>
    </>
  );
};

const secondStepValidationSchema = Yup.object({
  title: Yup.string().label("Title").required().min(3).max(40),
  date: Yup.date().label("Date"),
  description: Yup.string().label("Title").min(3).max(200)
});

const SecondStep: React.FC = () => {
  return (
    <div style={{ flex: 1, overflowY: "scroll" }}>
      <Input name="title" />
      <Input type="date" name="date" />
      <Input type="textarea" name="description" />
    </div>
  );
};

const fourthStepValidationSchema = Yup.object({
  images: Yup.mixed().test("is-valid-type", "Invalid file type.", (value) => {
    const files: File[] = value;

    if (!files.length) return false;

    return files.every(({ type }) => ALLOWED_IMAGE_TYPES.includes(type));
  })
});

const FourthStep: React.FC = () => {
  return <Input name="images" type="file" multiple Icon={CameraIcon} />;
};

const FormCompleted: React.FC = () => {
  return <div>Form Completed</div>;
};

export const happeningFormStepValidations = [
  firstStepValidationSchema,
  secondStepValidationSchema,
  fourthStepValidationSchema
];

export function renderStep(step: number): JSX.Element | null {
  switch (step) {
    case 0:
      return <FirstStep />;
    case 1:
      return <SecondStep />;
    case 3:
      return <FourthStep />;
    default:
      return <FormCompleted />;
  }
}
