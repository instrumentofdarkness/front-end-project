import React from "react";
import { Product } from "../types/type";
import { Link } from "react-router-dom";

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
      {/* <img src={product.images[0]} alt={product.title} height="50px" width="50px" /> */}

      {product.images.slice(0,2).map ((image) => {
        return (
          <img src={image} alt={product.title} height="50px" width="50px"/>
        )
      })}
      <h4>{product.price}</h4>
      <button onClick={handleFavClick}>Add to favourites</button>
      <button><Link to={`/products/${product.title}`}>more detail</Link></button>
      
    </div>
  );
}
