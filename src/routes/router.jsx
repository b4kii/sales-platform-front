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
  NotFound,
  Product,
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
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
