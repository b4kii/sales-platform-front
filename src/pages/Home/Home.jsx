import { Outlet, Link, useNavigate } from "react-router-dom";
import CategoryList from "../../components/Categories/CategoryList";

const Home = () => {
  return (
    <div className="h-screen bg-white">
      <CategoryList />
      <div className="px-40 bg-white dark:bg-slate-600 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
