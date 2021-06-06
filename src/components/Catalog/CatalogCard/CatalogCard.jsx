import React from "react";
import { Wrapper, ImageWrapper, Title, Paragraph } from "./cardstyled";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

function CatalogCard(props) {
  // title, price, image, description, category
  return (
    <Col md="4" className="card p-2 m-2">
      <Image rounded src={props.image} alt={props.title} />
      <Title>{props.title}</Title>
      <Paragraph weight={"bold"}>{props.price}</Paragraph>
      <Paragraph color={"gray"}>{props.category}</Paragraph>
      <Paragraph>{props.description}</Paragraph>
      <Button className="btn-primary">Add to Basket</Button>
      <Button className="btn-warning">Add to Favorites</Button>
    </Col>
  );
}

export default CatalogCard;
