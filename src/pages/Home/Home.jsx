import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  CategoryList,
} from "../../components/Category";
import { Container } from "../../components/Container";
import { ProductsSidebar } from "../../components/Products";
import { Suspense } from "react";

export const Home = () => {
  return (
    // <div className="bg-white">
    <>
      <CategoryList />
      <Container>
        <ProductsSidebar />
        {/* TODO: Loading component */}
        <Suspense fallback={<div>loadnig...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    {/* </div> */}
    </>
  );
};
