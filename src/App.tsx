import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar";
import ProductsPage from "./pages/ProductsPage";
import FavouritesPage from "./pages/FavProductsPage";
import HomePage from "./pages/HomePage";
import { Product } from "./types/type";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [userInput, setUserInput] = useState("");
  const [favProducts, setFavProducts] = useState<Product[]>([]);
  let productsUrl = "https://api.escuelajs.co/api/v1/products";

  function getProducts() {
    axios
      .get(productsUrl)
      .then((response) => response.data)
      .then((products) => {
        setIsLoading(false);
        setProducts(products);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <NavBar favProducts={favProducts} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={
              <ProductsPage
                products={products}
                setUserInput={setUserInput}
                setFavProducts={setFavProducts}
                favProducts={favProducts}
              />
            }
          />
          <Route
            path="favourites"
            element={<FavouritesPage favProducts={favProducts} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
