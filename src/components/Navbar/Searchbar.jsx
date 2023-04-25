import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Searchbar = () => {
  // TODO: handle fetch data and display result
  return (
    <div
      className="
        group 
        mr-auto 
        flex 
        h-12
        w-64
        items-center
        gap-4
        rounded-3xl 
        bg-white 
        shadow-sm
        shadow-slate-700
        outline-none
        outline-offset-0
        transition-[outline-color]
        duration-300
        focus-within:outline
        focus-within:outline-4
        focus-within:outline-purple-800
        dark:bg-slate-600
        dark:shadow-slate-950
        dark:focus-within:outline-white
        md:w-80
        lg:w-[30rem]
      "
    >
      <div
        className="
          flex
          h-full
          w-12
          items-center
          justify-center
          rounded-l-3xl
          bg-slate-200
          dark:bg-slate-800 
        "
      >
        <BiSearchAlt2
          className="
            text-2xl
          text-purple-800
          dark:text-white
          "
        />
      </div>
      <input
        className="
          h-full 
          w-full 
          bg-transparent 
          focus:border-none 
          focus:outline-none 
          dark:text-white
          text-lg
        "
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Searchbar;
