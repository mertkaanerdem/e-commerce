import axios from "axios";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button, Container, Row, Col } from "react-bootstrap";

import { HeaderWrapper, Title, CardWrapper, CardCol } from "./styled";

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
      <HeaderWrapper>
        <Title>E-Commerce Site</Title>

        <Link to="/favorites">
          <Button className="btn btn-warning m-2">
            <span className="text-white">Favorites</span>
          </Button>
        </Link>
        <Link to="/basket">
          <Button className="btn btn-warning">
            <span className="text-white">Basket</span>
          </Button>
        </Link>
      </HeaderWrapper>
      <Container fluid="md">
        <Row>
          <Col sm="12" md="8">
            <Row>
              <Col xs="8" lg="5">
                <CardWrapper>
                  {products.map((product) => {
                    return (
                      <div CardWey={product.id}>
                        <CardCol className="card">
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
              </Col>
            </Row>
          </Col>
          <Col sm="12" md="4">
            <h1>Annen</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Catalog;
