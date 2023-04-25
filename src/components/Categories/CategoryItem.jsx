import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const CategoryItem = ({ path, name, icon: Icon }) => {
  const location = useLocation();

  return (
    <div
      className={`relative flex h-16 w-32 cursor-pointer items-center rounded-t-lg ${
        location.pathname === path
          ? "text-purple-800 dark:text-white"
          : "text-gray-500"
      }`}
    >
      {location.pathname === path && (
        <motion.div
          layoutId="active-item"
          transition={{ duration: 0.3, type: "spring" }}
          className="absolute inset-0  h-16 w-32 rounded-t-lg bg-white shadow-sm shadow-slate-700 dark:bg-slate-600 dark:shadow-slate-950"
        />
      )}
      <Link
        to={path}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center text-xl"
      >
        {/* {icon} */}
        <Icon />
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default CategoryItem;
