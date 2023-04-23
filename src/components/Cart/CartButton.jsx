import { BsCart3 } from "react-icons/bs";

const CartButton = () => {
  // TODO: Create cart logic

  return (
    <button
      className="
        flex
        p-2.5
        lg:p-3
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-white
        text-purple-800
        shadow-sm
        shadow-slate-700
        dark:bg-slate-600
        dark:text-white
        dark:shadow-slate-950
        hover:bg-gray-100
        dark:hover:bg-slate-900
        transition-[background-color]
        duration-300
      "
    >
      <BsCart3
        className="
          text-xl 
        text-purple-800 
        dark:text-white
        "
      />
      <span
        className="
          inline-block
          font-semibold 
          text-purple-800 
          dark:text-white
        "
      >
        My cart
      </span>
    </button>
  );
};

export default CartButton;
