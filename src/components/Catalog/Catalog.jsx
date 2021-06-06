import axios from "axios";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { Button, Container, Row, Nav, Navbar } from "react-bootstrap";
import { Grid } from "@material-ui/core";

import "./Catalog.css";

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
      <Navbar clasName="header" bg="light" expand="lg">
        <Navbar.Brand to="/">
          <h2>E-Commerce</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/basket">
              <Button>Basket</Button>
            </NavLink>
            <NavLink to="/favorites">
              <Button>Favorites</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row>
        <Grid container space={1}>
          <Grid item xs={12} md={8}>
            <Grid container space={1}>
              {products.map((product) => {
                return (
                  <Grid item xs={12} md={5}>
                    <CatalogCard
                      image={product.image}
                      title={product.title}
                      price={product.price}
                      category={product.category}
                      description={product.description}
                    />
                  </Grid>
                );
              })}
              {/* <Grid item xs={12} md={6}>
            <Paper>2</Paper>
          </Grid> */}
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <BasketArea />
          </Grid>
        </Grid>
      </Row>
    </Container>
  );
}

export default Catalog;
