import React, { createContext, useState, useEffect, useContext } from 'react';

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WindowContext.Provider value={windowDimensions}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowDimensions = () => {
  return useContext(WindowContext);
};
