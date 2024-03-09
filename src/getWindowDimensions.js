import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { width, height } = window.screen;
  return {
    width,
    height
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return windowDimensions;
};