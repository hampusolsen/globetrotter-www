import React, { useEffect } from "react";
import { dispatch, select } from "../store";
import { testHelloWorld } from "../store/tst/tst.thunks";

const Router: React.FC = () => {
  const status = select((state) => state.test.status);

  useEffect(() => {
    dispatch(testHelloWorld());
  }, []);

  return (
    <div>
      Test Request Status:
      {status}
    </div>
  );
};

export default Router;
