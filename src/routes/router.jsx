import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";

import Home from "../pages/Home/Home";
import Temp from "../pages/Temp/Temp";
import Sport from "../pages/Sport";
import Electronic from "../pages/Electronic";
import Automotive from "../pages/Automotive";
import Fashion from "../pages/Fashion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "category/sport",
            element: <Sport />
          },
          {
            path: "category/electronic",
            element: <Electronic />
          },
          {
            path: "category/automotive",
            element: <Automotive />
          },
          {
            path: "category/fashion",
            element: <Fashion />
          }
        ]
      },
      {
        path: "/temp",
        element: <Temp />
      }
    ]
  }
])

export {router} ;