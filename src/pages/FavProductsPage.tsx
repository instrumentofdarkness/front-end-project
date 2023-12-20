import React from "react";

export default function FavProductsPage({ favProducts }) {
  return (
    <div>
      <ul>
        {favProducts.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}
