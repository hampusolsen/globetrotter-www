import React from "react";
import MinifiedUser from "../sub-components/MinifiedUser.sub";

const Following: React.FC = () => {
  return (
    <ul>
      <MinifiedUser name="Emma Stanley" id="12345" amicable />
    </ul>
  );
};

export default Following;
