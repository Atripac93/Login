import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import AxiosClient from "../Client/client";
const Log = () => {
  const client = new AxiosClient();
  const [formData, setFormData] = useState({});
  console.log(formData);

  const onChanngeInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    return await client.post("/login", formData);
  };
  return (
    <>
      <Card className="m-5 p-4" style={{ width: "18rem" }}>
        <form onSubmit={onSubmit}>
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
            {/* </Container> */}
            <Card.Body>
              <Card.Title>Benvenuto!</Card.Title>
              <Card.Text className="d-flex flex-column gap-2">
                <input
                  onChange={onChanngeInput}
                  type="text"
                  name="email"
                  placeholder="inserisci la tua email..."
                />
                <input
                  onChange={onChanngeInput}
                  type="text"
                  name="password"
                  placeholder="inserisci la tua password..."
                />
              </Card.Text>
              <Button variant="primary">Login</Button>
            </Card.Body>
          </Container>
        </form>
      </Card>
    </>
  );
};

export default Log;
