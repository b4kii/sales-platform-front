import { Rating } from "./Rating";
import { useNavigate } from "react-router-dom";

// TODO: Temp list items, refactors this later
export const ProductItem = ({
  id,
  name,
  price,
  rating,
  image,
  desc,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex w-full cursor-pointer flex-col items-center gap-4 justify-self-center rounded-xl p-4 hover:bg-purple-200"
      onClick={() => {navigate(`/product/${id}`)}}
    >
      <div>
        <img
          src={image}
          alt=""
          className="h-auto w-64 rounded-xl"
        />
      </div>
      <div>{desc}</div>
      <div>{name}</div>
      <div>{price}</div>
      <Rating
        rating={rating}
        starBackground={"gold"}
        starColor="gray"
        size={"1.5rem"}
      />
    </div>
  );
};
