import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { debounce } from "./helpers";

export const useTrailingSlug = (): string => {
  const { pathname } = useLocation();
  const [trailingSlug, setTrailingSlug] = useState(
    pathname.split("/").pop() || ""
  );

  useEffect(() => {
    const newSlug = pathname.split("/").pop();
    setTrailingSlug(newSlug || "");
  }, [pathname]);

  return trailingSlug;
};

/**
 * Let's you use current viewport sizes after window has been resized.
 *
 * @returns object
 * @property height number
 * @property width number
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
    const handleResize = debounce(() => {
      setViewportSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 150);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewportSize;
};
