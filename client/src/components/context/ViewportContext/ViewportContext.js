import React, { createContext, useState, useEffect } from "react";
import throttle from "lodash.throttle";

import {
  SM_MAX_WIDTH,
  MD_MIN_WIDTH,
  LG_MIN_WIDTH,
  XL_MIN_WIDTH
} from "../../../shared/constants/constants.viewport";

export const ViewportContext = createContext({});

const updateViewportContext = (setState, throttleTime = 150) =>
  throttle(() => {
    const viewportWidth = window.innerWidth;

    setState({
      isSmUp: viewportWidth <= SM_MAX_WIDTH,
      isMdUp: viewportWidth >= MD_MIN_WIDTH,
      isLgUp: viewportWidth >= LG_MIN_WIDTH,
      isXlUp: viewportWidth >= XL_MIN_WIDTH
    });
  }, throttleTime);

export const ViewportContextProvider = ({ children }) => {
  const [viewportData, setViewportData] = useState({
    isSmUp: false,
    isMdUp: false,
    isLgUp: false,
    isXlUp: false
  });

  useEffect(() => {
    window.addEventListener("resize", updateViewportContext(setViewportData));
    updateViewportContext(setViewportData, 0)();

    return () => window.removeEventListener("resize", updateViewportContext);
  }, []);

  return (
    <ViewportContext.Provider value={viewportData}>
      {children}
    </ViewportContext.Provider>
  );
};
