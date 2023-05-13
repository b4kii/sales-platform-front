import { ProductRating } from "./ProductRating";
import { Link } from "react-router-dom";

// TODO: Temp list items, refactors this later
export const ProductItem = ({
  id,
  name,
  price,
  rating,
  image,
  desc,
}) => {
  return (
    <Link
      to={`/product/${id}`}
      className="flex w-full cursor-pointer flex-col items-center gap-4 justify-self-center rounded-xl p-4 hover:bg-purple-200"
    >
      <div>
        <img
          src={image}
          alt=""
          className="h-auto w-64 rounded-xl"
        />
      </div>
      <div className="lg:text-lg font-semibold">{name}</div>
      <div className="lg:text-lg font-semibold">${price}</div>
      <div className="text-sm text-slate-400">{desc}</div>
      <div className="flex w-full flex-col justify-between lg:flex-row">
        <ProductRating
          rating={rating}
          starBackground={"gold"}
          starColor="gray"
          size={"1.5rem"}
        />
        <button>AC</button>
      </div>
    </Link>
  );
};
