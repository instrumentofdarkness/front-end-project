import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products, setFavProducts, favProducts }) {
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
