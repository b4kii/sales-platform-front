import React, { forwardRef, useCallback } from "react";
import { BsTypeH1 } from "react-icons/bs";

const Button = forwardRef(
  ({ label, secondary, onClick, className }, ref) => {
    return (
      <button
        ref={ref}
        className={`
        whitespace-nowrap
        rounded-xl
        p-3.5
        text-lg
        font-semibold
        ${
          secondary
            ? "border-purple-800 dark:border-white"
            : "border-none"
        }
        ${
          secondary
            ? "text-purple-800 dark:text-white"
            : "text-white dark:text-slate-950"
        }
        ${
          secondary ? "bg-transparent" : "bg-purple-800 dark:bg-white"
        }
        ${secondary ? "" : "shadow-gray-400 dark:shadow-slate-950"}
        ${
          secondary
            ? "hover:bg-gray-100 dark:hover:bg-slate-900"
            : "hover:bg-purple-500 dark:hover:bg-slate-300"
        }
        transition-[background-color]
        duration-300
        ${className}
      `}
        // onClick={() => { onClick && onClick(); }}
        onClick={onClick}
      >
        {label}
      </button> //
    );
  }
);

export default Button;
