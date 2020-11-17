import { FormikProps, FormikValues } from "formik";
import React from "react";
import Input from "../../../common/ia/Input/Input.ia";

const FirstSection: React.FC<FormikProps<FormikValues>> = (props) => {
  return (
    <section>
      <Input name="title" {...props} />
      <Input name="description" type="textarea" multiple {...props} />
    </section>
  );
};

export default FirstSection;
