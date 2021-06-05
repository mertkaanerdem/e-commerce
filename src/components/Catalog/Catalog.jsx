import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Title, CardWrapper, CardCol } from "./styled";

import CatalogCard from "./CatalogCard/CatalogCard";

const API_URL = "https://60b8a5d4b54b0a0017c041b4.mockapi.io/api/v1/product/";

function Catalog() {
  const [products, setProducts] = useState([]);
  //const [basket, setBasket] = useState([]);
  //const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <Title>E-Commerce Site</Title>

      <div>
        <Link to="/details">Details</Link>
      </div>
      <CardWrapper>
        {products.map((product) => {
          return (
            <div CardWey={product.id}>
              <CardCol size={3}>
                <CatalogCard
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  description={product.description}
                />
              </CardCol>
            </div>
          );
        })}
      </CardWrapper>
    </div>
  );
}

export default Catalog;
