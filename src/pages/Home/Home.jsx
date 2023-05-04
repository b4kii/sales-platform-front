import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  CategoryList,
  CategoryContainer,
  CategorySidebar
} from "../../components/Category";
import { Suspense } from "react";

export const Home = () => {
  return (
    <div className="bg-white">
      <CategoryList />
      <CategoryContainer>
        <CategorySidebar />
        {/* TODO: Loading component */}
        <Suspense fallback={<div>loadnig...</div>}>
          {/* Categories outlet */}
          <Outlet />
        </Suspense>
      </CategoryContainer>
    </div>
  );
};
