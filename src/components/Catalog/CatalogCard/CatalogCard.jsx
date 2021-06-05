import React from "react";
import { Wrapper, ImageWrapper, Title, Paragraph } from "./cardstyled";
import { Container, Row, Col } from "react-bootstrap";

function CatalogCard(props) {
  // title, price, image, description, category
  return (
    <Container>
      <Row>
        <Col sm={12}>
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
        </Col>
      </Row>
    </Container>
  );
}

export default CatalogCard;
