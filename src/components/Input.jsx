import { forwardRef } from "react";
import { useState } from "react";

const Input = forwardRef((props, ref) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  }

  const {
    type,
    placeholder,
    value,
    onChange,
    disabled,
    required,
    pattern,
    className,
    ...restProps
  } = props;

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      pattern={pattern}
      onBlur={handleFocus}
      data-focused={focused.toString()}
      {...restProps}
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
          focus-within:outline-2
          focus-within:outline-purple-800
          dark:bg-slate-600
          dark:text-white
          dark:shadow-slate-950 
          dark:focus-within:outline-white 
          invalid:data-[focused='true']:outline-red-400
          invalid:data-[focused='true']:focus-within:outline-red-400
          ${className}
          peer
        `}
    />
// peer-invalid-[focused='true']:top-12
  );
});

export default Input;
