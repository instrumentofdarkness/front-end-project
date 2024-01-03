import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "../types/type";

type ProductProp = {
  favProducts: Product[];
  setFavProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  products: Product[];
};

export default function ProductList({
  products,
  setFavProducts,
  favProducts,
}: ProductProp) {
  return (
    <div>
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            setFavProducts={setFavProducts}
            favProducts={favProducts}
          />
        );
      })}
    </div>
  );
}
