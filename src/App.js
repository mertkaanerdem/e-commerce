import React, { useState, useEffect, createContext } from "react";
import api from "./api";
import CatalogCard from "./components/CatalogCard/CatalogCard";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router";
import Favorites from "./components/Favorites/Favorites";
import Basket from "./components/BasketArea/BasketArea";

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);

  const [contextState, setContextState] = useState({
    favorites: [],
    basket: [],
  });

  useEffect(() => {
    api.get("/products").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ state: contextState, setContextState }}>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <div className="card-container">
            {products.length
              ? products.map((product) => {
                  return <CatalogCard key={product.id} product={product} />;
                })
              : null}
          </div>
        </Route>
        <Route path="/favorites" component={Favorites} />
        <Route path="/basket" component={Basket} />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
