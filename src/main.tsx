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


ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

