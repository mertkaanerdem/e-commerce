import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CatalogCard from "./CatalogCard";

const API_URL = "https://60b8a5d4b54b0a0017c041b4.mockapi.io/api/v1/product/";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <h3>Katalog</h3>

      <div>
        <Link to="/details">Details</Link>
      </div>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <CatalogCard
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
              description={product.description}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Catalog;
