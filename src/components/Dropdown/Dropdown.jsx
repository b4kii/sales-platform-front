import { forwardRef } from "react";
import { motion } from "framer-motion";

const Dropdown = forwardRef(
  ({ className, children, isOpen }, ref) => {
    return (
      <motion.div
        onClick={(event) => {
          event.stopPropagation()
        }}
        ref={ref}
        initial={{ height: 0 }}
        animate={{
          height: isOpen ? "max-content" : 0,
        }}
        transition={{ duration: 0.1 }}
        className={`${className} absolute max-h-[1000px] w-48 overflow-hidden rounded-lg bg-white shadow-sm shadow-gray-400 dark:bg-slate-600 dark:shadow-slate-950`}
      >
        <div className="flex h-full flex-col items-center gap-4 px-4 pb-4 pt-8">
          {children}
        </div>
      </motion.div>
    );
  }
);

export default Dropdown;
