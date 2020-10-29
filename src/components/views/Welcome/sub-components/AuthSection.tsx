import React from "react";
import { useSearchParams } from "react-router-dom";
import FacebookIcon from "../../../common/icons/Facebook.icon";
import GooglePlusIcon from "../../../common/icons/GooglePlus.icon";
import Login from "../outlets/Login.outlet";
import Signup from "../outlets/Register.outlet";
import StyledAuthSection from "./AuthSection.style";

const AuthSection: React.FC = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("p");

  return (
    <StyledAuthSection>
      <div>{page === "login" ? <Login /> : <Signup />}</div>
      <div>
        <a href="http://localhost:3008/api/security/google">
          <span>
            <GooglePlusIcon />
          </span>
          <span>SIGN IN WITH GOOGLE</span>
        </a>
        <a href="http://localhost:3008/api/security/facebook">
          <span>
            <FacebookIcon />
          </span>
          <span>SIGN IN WITH FACEBOOK</span>
        </a>
      </div>
    </StyledAuthSection>
  );
};

export default AuthSection;
