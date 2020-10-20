import { Field } from "formik";
import React from "react";
import StyledTextField from "./TextField.style";

const TextField: React.FC = (props) => {
  return <Field {...props} as={StyledTextField} />;
};

export default TextField;
