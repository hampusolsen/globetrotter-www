import React from "react";
import Input from "../../../common/ia/Input/Input.ia";

const SecondFormStep: React.FC = () => {
  return (
    <section>
      <Input type="date" name="fromDate" label="From" />
      <Input type="date" name="toDate" label="To" />
    </section>
  );
};

export default SecondFormStep;
