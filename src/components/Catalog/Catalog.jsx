import axios from "axios";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button, Container, Row, Col } from "react-bootstrap";
import { Grid } from "@material-ui/core";

import { HeaderWrapper, Title } from "./styled";

import CatalogCard from "./CatalogCard/CatalogCard";
import BasketArea from "./BasketArea/BasketArea";

const API_URL = "https://60b8a5d4b54b0a0017c041b4.mockapi.io/api/v1/product/";

function Catalog() {
  const [products, setProducts] = useState([]);
  //const [basket, setBasket] = useState([]);
  //const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Container>
      <Row>
        <Col sm="12">
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
        </Col>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={8}
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <Grid container direction="row" spacing={2}>
                    <CatalogCard
                      image={product.image}
                      title={product.title}
                      price={product.price}
                      category={product.category}
                      description={product.description}
                    />
                  </Grid>
                </div>
              );
            })}
          </Grid>
          <Grid item xs={12} md={4}>
            <BasketArea />
          </Grid>
        </Grid>
      </Row>
    </Container>
  );
}

export default Catalog;
