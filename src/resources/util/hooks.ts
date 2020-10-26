import { useEffect, useState } from "react";
import { useLocation } from "react-router";

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
 *
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
    const handleResize = () => {
      setViewportSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewportSize;
};
