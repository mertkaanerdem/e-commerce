import React from "react";
import { Wrapper, ImageWrapper, Title, Paragraph } from "./cardstyled";

function CatalogCard(props) {
  // title, price, image, description, category
  return (
    <Wrapper>
      <ImageWrapper>
        <img
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          src={props.image}
          alt={props.title}
        />
      </ImageWrapper>
      <Title>{props.title}</Title>
      <Paragraph weight={"bold"}>{props.price}</Paragraph>
      <Paragraph color={"gray"}>{props.category}</Paragraph>
      <Paragraph>{props.description}</Paragraph>
    </Wrapper>
  );
}

export default CatalogCard;
