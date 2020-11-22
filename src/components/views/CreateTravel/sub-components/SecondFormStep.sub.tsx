import React from "react";
import Input from "../../../common/ia/Input/Input.ia";

const SecondFormStep: React.FC = () => {
  return (
    <section>
      <Input type="date" name="from_date" label="From" />
      <Input type="date" name="to_date" label="To" />
    </section>
  );
};

export default SecondFormStep;
