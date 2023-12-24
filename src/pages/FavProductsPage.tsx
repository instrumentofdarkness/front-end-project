import React from "react";
import { Product } from "../types/type";

type FavProductsProp = {favProducts: Product []}

export default function FavProductsPage({ favProducts } : FavProductsProp) {
  return (
    <div>
      <ul>
        {favProducts.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}
