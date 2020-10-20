import React from "react";

interface Props {
  subtitle?: boolean;
}

const Heading: React.FC<Props> = ({ subtitle, children }) => {
  return subtitle ? <h2>{children}</h2> : <h1>{children}</h1>;
};

export default Heading;
