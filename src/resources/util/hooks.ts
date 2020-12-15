import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { DEFAULT_CENTER_COORDINATES } from "../../config/constants.config";
import { Coordinates } from "../types/common";
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

const options: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 5000
};

export const useGeolocation = (): Coordinates | undefined => {
  const [coordinates, setCoordinates] = useState<Coordinates>();

  function success({ coords }: Position) {
    setCoordinates({
      lat: coords.latitude,
      lng: coords.longitude
    });
  }

  function error() {
    setCoordinates(DEFAULT_CENTER_COORDINATES);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return coordinates;
};

export const useThrottle = <T>(value: T, ms = 200): T => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= ms) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, ms - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, ms]);

  return throttledValue;
};
