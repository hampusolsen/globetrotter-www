import React from "react";
import { useSearchParams } from "react-router-dom";
import { color } from "../../../../resources/style/variables.style";
import Button from "../../../common/ia/Button/Button.ia";

const Header: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("p") === "login" ? "signup" : "login";

  return (
    <header>
      <Button
        filled
        color={color.lightgreen}
        onClick={() => setSearchParams(`p=${page}`)}
      >
        {page}
      </Button>
      <section>
        <h1>Globetrotter</h1>
        <h2>Connect through travel</h2>
      </section>
      <hr />
    </header>
  );
};

export default Header;
