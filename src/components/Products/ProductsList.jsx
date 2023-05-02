import { ProductItem } from "./ProductItem";
import { products } from "../../utils/tempProducts";

export const ProductsList = () => {
  return (

    <div className="grid px-4 pt-8 gap-4 grid-cols-fluid lg:grid-cols-4 ">
      {products.map(product => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          stars={product.stars}
        />
      ))}
    </div>
  );
};
