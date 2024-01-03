import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Product } from "../types/type";

export default function ProductDetail() {
  useParams();

  const [productDetail, setProductDetail] = useState({} as Product);

  const url: string = "https://api.escuelajs.co/api/v1/products/title";

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(url);
      const result = await response.json();
      setProductDetail(result);
    }
    getProduct();
  }, []);
  return <div>{productDetail.title}</div>;
}
