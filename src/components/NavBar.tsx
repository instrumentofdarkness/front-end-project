import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/type";

type ProductProp = { favProducts: Product[] };

export default function NavBar({ favProducts }: ProductProp) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/fav-products">Fav Products ({favProducts.length})</Link>
    </div>
  );
}
