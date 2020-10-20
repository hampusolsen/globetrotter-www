import React from "react";

interface Props {
  google?: boolean;
  facebook?: boolean;
}

const OAuthButton: React.FC<Props> = () => {
  return <button type="button">oauth</button>;
};

export default OAuthButton;
