import { connect } from "formik";
import React from "react";
import Input from "../../../common/ia/Input/Input.ia";

const FirstSection = () => {
  return (
    <section>
      <Input name="title" />
      <Input name="description" type="textarea" multiple />
    </section>
  );
};

export default connect(FirstSection);
