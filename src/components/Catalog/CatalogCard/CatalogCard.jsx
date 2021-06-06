import React from "react";
import { Title, Paragraph } from "./cardstyled";
import { Button, Image } from "react-bootstrap";
import { Grid } from "@material-ui/core";

function CatalogCard(props) {
  // title, price, image, description, category
  return (
    <Grid className="card p-2 m-2">
      <Image rounded src={props.image} alt={props.title} />
      <Title>{props.title}</Title>
      <Paragraph weight={"bold"}>{props.price}. $</Paragraph>
      <Paragraph color={"gray"}>{props.category}</Paragraph>
      <Paragraph>{props.description}</Paragraph>
      <Button className="btn-primary">Add to Basket</Button>
      <Button className="btn-warning">Add to Favorites</Button>
    </Grid>
  );
}

export default CatalogCard;
