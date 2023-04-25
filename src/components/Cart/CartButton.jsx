import { BsCart3 } from "react-icons/bs";

const CartButton = () => {
  // TODO: Create cart logic

  return (
    <button
      className="
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-white
        p-2.5
        text-xl
        text-purple-800
        shadow-sm
        shadow-slate-700
        transition-[background-color]
        duration-300
        hover:bg-gray-100
        dark:bg-slate-600
        dark:text-white
        dark:shadow-slate-950
        dark:hover:bg-slate-900
        lg:p-3 
      "
    >
      <BsCart3
        size={20}
        className="
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
