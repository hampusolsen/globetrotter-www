import React from "react";

interface Props {
  message: string;
  stack: string;
}

const ErrorView: React.FC<Props> = () => {
  return <div>Error page</div>;
};

export default ErrorView;
