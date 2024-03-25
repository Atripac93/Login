import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
const Log = () => {
  return (
    <>
      <Card className="m-5 p-4" style={{ width: "18rem" }}>
        <Container className="d-flex justify-content-around">
          <Row>
            <Col xs={6} md={4}>
              <Image
                className="p-2"
                variant="top"
                src="https://picsum.photos/100/100"
                roundedCircle
              />
            </Col>
          </Row>
        </Container>
        <Card.Body>
          <Card.Title>Benvenuto!</Card.Title>
          <Card.Text className="d-flex flex-column gap-2">
            <input type="text" placeholder="inserisci la tua email..." />
            <input type="text" placeholder="inserisci la tua password..." />
          </Card.Text>
          <Button variant="primary">Login</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Log;
