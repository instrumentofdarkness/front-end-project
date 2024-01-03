import React from "react";
import { Product } from "../types/type";

type ProductProp = {
  favProducts: Product[];
  setFavProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  product: Product;
};

export default function ProductItem({
  product,
  setFavProducts,
  favProducts,
}: ProductProp) {
  function handleFavClick() {
    setFavProducts([...favProducts, product]);
  }
  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <h4>{product.price}</h4>
      <button onClick={handleFavClick}>Add to favourites</button>
      
    </div>
  );
}
