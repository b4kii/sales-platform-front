import { Outlet, Link, useNavigate } from "react-router-dom";
import CategoryList from "../../components/Categories/CategoryList";
import { Suspense } from "react";

export const Home = () => {
  return (
    <div className="h-screen bg-white">
      <CategoryList />
      <div className="px-40 bg-white dark:bg-slate-600 h-screen">
        {/* TODO: Loading component */}
        <Suspense fallback={<div>loadnig...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
