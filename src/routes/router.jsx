import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout";
import ProtectedRoute from "../components/ProtectedRoute";

// import {
//   Home,
//   Sport,
//   Automotive,
//   Electronic,
//   Fashion,
//   ProtectedRoute,
// } from "./pagesLazy";

import {
  Fashion,
  Sport,
  Automotive,
  Electronic,
  Home,
  Admin,
} from "../pages";

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
            element: <Sport />,
          },
          {
            path: "category/electronic",
            element: <Electronic />,
          },
          {
            path: "category/automotive",
            element: <Automotive />,
          },
          {
            path: "category/fashion",
            element: <Fashion />,
          },
        ],
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export { router };
