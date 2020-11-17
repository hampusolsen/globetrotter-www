import { FormikProps } from "formik";
import React from "react";
import Text from "../../Text";

interface TextareaProps {
  name: string;
  label?: string;
}

type Props = TextareaProps & FormikProps<Record<string, unknown>>;

const Textarea: React.FC<Props> = ({ name, label }) => {
  return (
    <label htmlFor={name}>
      <Text>{label || name}</Text>
      <textarea name={name} id={name} />
    </label>
  );
};

export default Textarea;
