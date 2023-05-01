import { Outlet, Navigate, useLocation } from "react-router-dom";
import useTest from "../hooks/useTest";

const RequireAuth = () => {
  const location = useLocation();
  const testStore = useTest();

  return testStore?.isLogged ? <Outlet /> : <Navigate to="/category/sport" />;
};

export default RequireAuth;
