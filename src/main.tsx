import { StrictMode, useEffect } from 'react'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import PrefectureApp from './Client/Prefecturepage/PrefectureApp.tsx';
import FoodApp from './Client/Foodpage/FoodApp.tsx';
import LandmarkApp from './Client/Landmarkpage/LandmarkApp.tsx';
import { useState, createContext } from 'react';
import { useLayoutEffect } from 'react';

import { useLocation } from 'react-router-dom';

export const screenWidthBreakpointsContext = createContext<{ [key: string]: boolean }>({
  less576px: false,
  more576px: true,
  more768px: true,
  more992px: true,
  more1200px: true,
  more1400px: true,
  more1920px: true
});

function ScrollToTop() {
  const location = useLocation();

  // useLayoutEffect runs synchronously before the browser paints
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Prefecture/:CurrentPrefecture",
    element: (
      <>
        <ScrollToTop />
        <PrefectureApp />
      </>)
  },
  {
    path: "/Food/:CurrentFood",
    element: (
      <>
        <ScrollToTop />
        <FoodApp />
      </>)
  },
  {
    path: "/Landmark/:CurrentLandmark",
    element: (
      <>
        <ScrollToTop />
        <LandmarkApp />
      </>)
  },
]);

function ContextWrapper() {
  const [screenWidthBreakpoints, setScreenWidthBreakpoints] = useState<{ [key: string]: boolean }>({
    less576px: false,
    more576px: false,
    more768px: false,
    more992px: false,
    more1200px: false,
    more1400px: false,
    more1920px: false
  });

  const handleScreenResize = () => {
    const newScreenWidthBreakpoints = {
      less576px: window.innerWidth < 576,
      more576px: window.innerWidth >= 576,
      more768px: window.innerWidth >= 768,
      more992px: window.innerWidth >= 992,
      more1200px: window.innerWidth >= 1200,
      more1400px: window.innerWidth >= 1400,
      more1920px: window.innerWidth >= 1920
    };

    // Only update state if the breakpoints have changed
    setScreenWidthBreakpoints((prevState) => {
      // Compare current breakpoints with the previous ones to avoid unnecessary updates
      if (
        prevState.less576px !== newScreenWidthBreakpoints.less576px ||
        prevState.more576px !== newScreenWidthBreakpoints.more576px ||
        prevState.more768px !== newScreenWidthBreakpoints.more768px ||
        prevState.more992px !== newScreenWidthBreakpoints.more992px ||
        prevState.more1200px !== newScreenWidthBreakpoints.more1200px ||
        prevState.more1400px !== newScreenWidthBreakpoints.more1400px ||
        prevState.more1920px !== newScreenWidthBreakpoints.more1920px
      ) {
        return newScreenWidthBreakpoints;
      }
      return prevState; // Return the previous state if no change
    });
  };

  useEffect(() => {
    handleScreenResize(); // Set initial st ate based on current window size
    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);

  return (
    <screenWidthBreakpointsContext.Provider value={screenWidthBreakpoints}>
      <RouterProvider router={router} />
    </screenWidthBreakpointsContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextWrapper />
  </StrictMode>
);

