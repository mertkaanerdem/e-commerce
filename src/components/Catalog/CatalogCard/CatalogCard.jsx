import React from "react";
import { Title, Paragraph } from "./cardstyled";
import { Button, Image } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function CatalogCard(props) {
  // title, price, image, description, category
  return (
    <Grid className="card p-2 m-2">
      <Image rounded src={props.image} alt={props.title} />
      <Title>{props.title}</Title>
      <Paragraph weight={"bold"}>{props.price}. $</Paragraph>
      <Paragraph color={"gray"}>{props.category}</Paragraph>
      <Paragraph>{props.description}</Paragraph>
      {/* <Button className="btn-primary">Details</Button> */}
      <NavLink to="/:id">
        <Button className="btn-warning">Details</Button>
      </NavLink>
    </Grid>
  );
}

export default CatalogCard;
