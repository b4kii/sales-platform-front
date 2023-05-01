import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Sport = lazy(() => import("../pages/Sport"));
const Automotive = lazy(() => import("../pages/Category/Automotive"));
const Electronic = lazy(() => import("../pages/Electronic"));
const Fashion = lazy(() => import("../pages/Fashion"));
const ProtectedRoute = lazy(() =>
  import("../components/ProtectedRoute")
);

export {
  Home,
  Sport,
  Automotive,
  Electronic,
  Fashion,
  ProtectedRoute,
};
