import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar";
import ProductsPage from "./pages/ProductsPage";
import FavouritesPage from "./pages/FavProductsPage";
import HomePage from "./pages/HomePage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [favProducts, setFavProducts] = useState([]);
  let productsUrl = `https://api.escuelajs.co/api/v1/products`;

  function getProducts(url) {
    axios
      .get(url)
      .then((response) => response.data)
      .then((products) => {
        setIsLoading(false);
        setProducts(products.name);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getProducts(productsUrl);
  }, [productsUrl]);

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
