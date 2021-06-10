import React, { createContext, useState, useEffect } from "react";
import api from "../api";
export const ProductContext = createContext();

function Product({ children }) {
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
    <ProductContext.Provider
      value={{ products, setProducts, contextState, setContextState }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default Product;
