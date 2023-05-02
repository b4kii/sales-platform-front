import { BiFootball } from "react-icons/bi";
import { BsFillCarFrontFill, BsLightningFill } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
// import { CategoryItem } from "./CategoryItem";
import { CategoryItem } from "./CategoryItem";

// TODO: Make mobile version i.e. slider
export const CategoryList = () => {
  const categories = [
    {
      id: 1,
      path: "/category/electronic",
      name: "Electronic",
      icon: BsLightningFill,
    },
    {
      id: 2,
      path: "/category/sport",
      name: "Sport",
      icon: BiFootball,
    },
    {
      id: 3,
      path: "/category/automotive",
      name: "Automotive",
      icon: BsFillCarFrontFill,
    },
    {
      id: 4,
      path: "/category/fashion",
      name: "Fashion",
      icon: GiClothes,
    },
  ];

  return (
    <div className="flex h-24 w-full items-end justify-center gap-4 overflow-x-auto overflow-y-hidden bg-slate-200 px-20 dark:bg-slate-700 lg:px-40">
      {categories.map(category => {
        return (
          <CategoryItem
            key={category.id}
            {...category}
            icon={category.icon}
          />
        );
      })}
    </div>
  );
};
