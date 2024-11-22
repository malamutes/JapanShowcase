import { StrictMode, useEffect } from 'react'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PrefectureApp from './Client/Prefecturepage/PrefectureApp.tsx';
import FoodApp from './Client/Foodpage/FoodApp.tsx';
import LandmarkApp from './Client/Landmarkpage/LandmarkApp.tsx';
import { useState, createContext } from 'react';

export const screenWidthBreakpointsContext = createContext<{ [key: string]: boolean }>({
  less576px: false,
  more576px: true,
  more768px: true,
  more992px: true,
  more1200px: true,
  more1400px: true,
  more1920px: true
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Prefecture/:CurrentPrefecture",
    element: <PrefectureApp />
  },
  {
    path: "/Food/:CurrentFood",
    element: <FoodApp />
  },
  {
    path: "/Landmark/:CurrentLandmark",
    element: <LandmarkApp />
  },
]);

function ContextWrapper() {
  const [screenWidthBreakpoints, setScreenWidthBreakpoints] = useState<{ [key: string]: boolean }>(
    {
      less576px: false,
      more576px: false,
      more768px: false,
      more992px: false,
      more1200px: false,
      more1400px: false,
      more1920px: false
    }
  );

  useEffect(() => {
    const handleScreenResize = () => {
      if (window.innerWidth < 576) {
        setScreenWidthBreakpoints(
          {
            less576px: true,
            more576px: false,
            more768px: false,
            more992px: false,
            more1200px: false,
            more1400px: false,
            more1920px: false
          }
        )
      }
      else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        setScreenWidthBreakpoints(
          {
            less576px: false,
            more576px: true,
            more768px: false,
            more992px: false,
            more1200px: false,
            more1400px: false,
            more1920px: false
          }
        )
      }
      else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        setScreenWidthBreakpoints(
          {
            less576px: false,
            more576px: true,
            more768px: true,
            more992px: false,
            more1200px: false,
            more1400px: false,
            more1920px: false
          }
        )
      }
      else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
        setScreenWidthBreakpoints(
          {
            less576px: false,
            more576px: true,
            more768px: true,
            more992px: true,
            more1200px: false,
            more1400px: false,
            more1920px: false
          }
        )
      }
      else if (window.innerWidth >= 1200 && window.innerWidth < 1400) {
        setScreenWidthBreakpoints(
          {
            less576px: false,
            more576px: true,
            more768px: true,
            more992px: true,
            more1200px: true,
            more1400px: false,
            more1920px: false
          }
        )
      }
      else if (window.innerWidth >= 1400 && window.innerWidth < 1920) {
        setScreenWidthBreakpoints(
          {
            less576px: false,
            more576px: true,
            more768px: true,
            more992px: true,
            more1200px: true,
            more1400px: true,
            more1920px: false
          }
        )
      }
      else if (window.innerWidth >= 1920) {
        setScreenWidthBreakpoints(
          {
            less576px: false,
            more576px: true,
            more768px: true,
            more992px: true,
            more1200px: true,
            more1400px: true,
            more1920px: true
          }
        )
      }
    }

    handleScreenResize();


    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    }
  }, []);

  return (
    <screenWidthBreakpointsContext.Provider value={screenWidthBreakpoints}>
      <RouterProvider router={router} />
    </screenWidthBreakpointsContext.Provider>
  )
}

export function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextWrapper />
  </StrictMode>
);

