import React from 'react';
import useResponsive from "../hooks/use-responsive";

const ResizeContext = React.createContext('');

export const ResizeContextProvider = (props) => {
  const mode = useResponsive();
  return <ResizeContext.Provider value={mode}>{props.children}</ResizeContext.Provider>
};

export default ResizeContext;