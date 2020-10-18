import React from "react";
import Button from "../components/ui/ia/Button";
import { color } from "../resources/style/variables.style";
import { dispatch, select } from "../store";
import { testError, testHelloWorld } from "../store/tst/tst.thunks";

const Router: React.FC = () => {
  const { status, data, errors } = select((state) => state.test);

  return (
    <div>
      Test Request Status: {status} <br />
      Server says hello to: {data.hello}
      <br />
      Error message: {errors.length > 0 && errors[0].message}
      <br />
      <Button filled onClick={() => dispatch(testHelloWorld())}>
        Filled
      </Button>
      <Button outlined color={color.blue} onClick={() => dispatch(testError())}>
        Outlined
      </Button>
      <Button text>Text</Button>
    </div>
  );
};

export default Router;
