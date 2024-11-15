import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

