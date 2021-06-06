import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function BasketArea() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Basket</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Elements
              </Card.Subtitle>
              <Card.Text>There will be elements right here</Card.Text>
              <Card.Link href="#">
                <Button className="btn-secondary"> Go to Basket</Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BasketArea;
