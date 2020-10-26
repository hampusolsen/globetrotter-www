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
        <button type="button">
          <span>
            <GooglePlusIcon />
          </span>
          <span>SIGN IN WITH GOOGLE</span>
        </button>
        <button type="button">
          <span>
            <FacebookIcon />
          </span>
          <span>SIGN IN WITH FACEBOOK</span>
        </button>
      </div>
    </StyledAuthSection>
  );
};

export default AuthSection;
