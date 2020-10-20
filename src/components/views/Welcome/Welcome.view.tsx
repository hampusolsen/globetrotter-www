import React from "react";
import { Outlet } from "react-router-dom";
import { color } from "../../../resources/style/variables.style";
import Logo from "../../common/gfx/Logo.gfx";
import Mountains from "../../common/gfx/Mountains.gfx";
import Button from "../../common/ia/Button/Button.ia";
import WelcomeLayout from "./Welcome.style";

const WelcomeView: React.FC = () => {
  return (
    <WelcomeLayout>
      <header>
        <Button filled color={color.lightgreen}>
          SIGN UP
        </Button>
        <Mountains />
        <Logo />
      </header>
      <main>
        <Outlet />
      </main>
    </WelcomeLayout>
  );
};

export default WelcomeView;
