import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const CategoryItem = ({
  path,
  name,
  icon
}) => {
  const location = useLocation();

  return (
    <div
      className={`flex h-16 w-32 items-center rounded-t-lg cursor-pointer relative ${location.pathname === path ? "text-purple-800 dark:text-white" : "text-gray-500"}`}
    >
      {location.pathname === path && (
        <motion.div
          layoutId="active-item"
          transition={{ duration: .3, type: "spring" }}
          className="absolute inset-0  bg-white dark:bg-slate-600 rounded-t-lg shadow-sm shadow-slate-700 dark:shadow-slate-950 h-16 w-32"
        />
      )}
      <Link
        to={path}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center text-xl"
      >
        {icon}
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default CategoryItem;
