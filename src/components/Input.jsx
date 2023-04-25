import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      type,
      placeholder,
      value,
      onChange,
      disabled,
      icon: Icon,
      error,
      success,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          h-12 
          w-full
          rounded-3xl 
          border-none 
          bg-white 
          pl-4 
          text-lg 
          shadow-sm 
          shadow-slate-700 
          outline-none
          outline-offset-0 
          transition-[outline-color] 
          duration-300
          focus-within:outline-4
          focus-within:outline-purple-800
          dark:bg-slate-600
          dark:text-white
          dark:shadow-slate-950 
          dark:focus-within:outline-white 
          ${error && "focus-within:outline-red-600"}
          ${success && "focus-within:outline-green-600"}
        }`}
      />
    );
  }
);

export default Input;
