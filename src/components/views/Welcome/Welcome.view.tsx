import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useViewportSize } from "../../../resources/util/hooks";
import AuthSection from "./sub-components/AuthSection";
import Header from "./sub-components/Header";
import WelcomeViewLayout from "./Welcome.style";

const WelcomeView: React.FC = () => {
  const viewport = useViewportSize();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams("p=login");
  }, [setSearchParams]);

  return (
    <WelcomeViewLayout viewport={viewport}>
      <Header />
      <main>
        <AuthSection />
      </main>
    </WelcomeViewLayout>
  );
};

export default WelcomeView;
