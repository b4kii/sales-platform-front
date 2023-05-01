import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const CategoryItem = ({ path, name, icon: Icon, id, index }) => {
  const location = useLocation();

  return (
    <div
      className={`relative flex h-16 w-32 cursor-pointer items-center rounded-t-lg ${
        location.pathname === path
          ? "text-purple-800 dark:text-white"
          : "text-gray-500"
      }`}
    >
      <AnimatePresence>
        {location.pathname === path && (
          <motion.div
            layoutId="active-item"
            initial={{ y: "50%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, type: "spring" }}
            className="absolute h-24 w-32 rounded-t-lg bg-white shadow-sm shadow-slate-700 dark:bg-slate-600 dark:shadow-slate-950"
          />
        )}
      </AnimatePresence>
      <Link
        to={path}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center text-sm lg:text-xl"
      >
        <Icon />
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default CategoryItem;
