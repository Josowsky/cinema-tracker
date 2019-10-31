import React, { createContext, useState, useEffect, FunctionComponent } from 'react';
import throttle from 'lodash.throttle';

import { SM_MAX_WIDTH, MD_MIN_WIDTH, LG_MIN_WIDTH, XL_MIN_WIDTH } from 'shared/constants/constants.viewport';

export const ViewportContext = createContext<ViewportContextData>({
  isSmUp: false,
  isMdUp: false,
  isLgUp: false,
  isXlUp: false,
});

export interface ViewportContextData {
  isSmUp: boolean;
  isMdUp: boolean;
  isLgUp: boolean;
  isXlUp: boolean;
}

const updateViewportContext = (setState: (contextValue: ViewportContextData) => void, throttleTime = 150) =>
  throttle(() => {
    const viewportWidth = window.innerWidth;

    setState({
      isSmUp: viewportWidth <= SM_MAX_WIDTH,
      isMdUp: viewportWidth >= MD_MIN_WIDTH,
      isLgUp: viewportWidth >= LG_MIN_WIDTH,
      isXlUp: viewportWidth >= XL_MIN_WIDTH,
    });
  }, throttleTime);

export const ViewportContextProvider: FunctionComponent = ({ children }) => {
  const [viewportData, setViewportData] = useState<ViewportContextData>({
    isSmUp: false,
    isMdUp: false,
    isLgUp: false,
    isXlUp: false,
  });

  useEffect(() => {
    window.addEventListener('resize', updateViewportContext(setViewportData));
    updateViewportContext(setViewportData, 0)();

    return () => window.removeEventListener('resize', (updateViewportContext as unknown) as EventListener);
  }, []);

  return <ViewportContext.Provider value={viewportData}>{children}</ViewportContext.Provider>;
};
