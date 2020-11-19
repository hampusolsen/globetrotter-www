import React from "react";
import Input from "../../../common/ia/Input/Input.ia";

const FirstFormStep: React.FC = () => {
  return (
    <section>
      <Input name="title" />
      <Input name="description" type="textarea" multiple />
    </section>
  );
};

export default FirstFormStep;
