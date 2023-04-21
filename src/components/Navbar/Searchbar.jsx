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
        shadow-md
        shadow-gray-400
        outline-none
        outline-offset-0
        focus-within:outline
        focus-within:outline-2
        focus-within:outline-purple-400
        dark:bg-slate-700
        dark:shadow-slate-950
        dark:focus-within:outline-white
        md:w-80
        lg:w-96
        transition-[outline-color]
        duration-300
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
          text-purple-400
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
        "
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Searchbar;
