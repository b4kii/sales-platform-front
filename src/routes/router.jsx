import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";

import Home from "../pages/Home/Home";
import Temp from "../pages/Temp/Temp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/temp",
        element: <Temp />
      }
    ]
  }
])

export {router} ;