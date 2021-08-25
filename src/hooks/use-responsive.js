import { useState, useEffect } from "react";

export const MODES = ['SMALL', 'MEDIUM', 'LARGE'];

export const determineMode = (width) => {
  if(width <= 960) return MODES[0];
  if(width <= 1280) return MODES[1];
  return MODES[2];
};

const useResponsive = () => {
  const [mode, setMode] = useState(determineMode(window.innerWidth));
  useEffect(() => {
    const resizeHandler = () => {
      setMode(determineMode(window.innerWidth));
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return mode;
};

export default useResponsive;