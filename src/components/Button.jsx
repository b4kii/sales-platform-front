import React, { useCallback } from "react";

const Button = ({ label, secondary, outline, onClick, className }) => {
  return (
    <button
      className={`
        rounded-xl
        p-3.5
        font-semibold
        ${secondary ? "border-purple-400 dark:border-white" : "border-none"}
        ${
          secondary
            ? "text-purple-400 dark:text-white"
            : "text-white dark:text-slate-950"
        }
        ${secondary ? "bg-transparent" : "bg-purple-400 dark:bg-white"}
        ${secondary ? "" : "shadow-gray-400 dark:shadow-slate-950"}
        ${
          secondary
            ? "hover:bg-gray-100 dark:hover:bg-slate-900"
            : "hover:bg-purple-500 dark:hover:bg-slate-300"
        }
        transition-[background-color]
        duration-300
      `}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {label}
    </button>
  );
};

export default Button;
