import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import debounceFunction from "./helpers";

export const useTrailingSlug = (): string => {
  const [trailingSlug, setTrailingSlug] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    const newSlug = pathname.split("/").pop();
    setTrailingSlug(newSlug || "");
  }, [pathname]);

  return trailingSlug;
};

/**
 * Let's you use current viewport sizes after window has been resized.
 *
 * @returns object. { height: number, width: number }
 */
export const useViewportSize = (): {
  height: number;
  width: number;
} => {
  const [viewportSize, setViewportSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    const handleResize = debounceFunction(() => {
      setViewportSize({
        height: window.innerHeight,
        width: window.innerWidth
      });

      // eslint-disable-next-line no-console
      console.log("fires");
    }, 150);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewportSize;
};
