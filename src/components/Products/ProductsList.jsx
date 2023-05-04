import { ProductItem } from "./ProductItem";
import { products } from "../../utils/tempProducts";

// px-10

export const ProductsList = () => {
  return (
    <div className="grid px-6 pt-8 pb-4 gap-4 grid-cols-fluid lg:grid-cols-4 ">
      {products.map(product => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          rating={product.rating}
          image={product.image}
          desc={product.desc}
        />
      ))}
    </div>
  );
};
