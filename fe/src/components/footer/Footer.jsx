import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-3 py-3 bg-light ">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Informazioni</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Chi siamo
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Contatti
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Termini e condizioni
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Servizi</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Prodotti
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Servizi
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Assistenza
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Seguici</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-muted">&copy; 2024 Il tuo nome</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
