import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <>
      <Container fluid className=" footer text-center">
        <Row>
          <Col xs={12} md={12}>
            <h6 className="footText">Copyrights Reserved | MODDLE KEEP</h6>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <a className="btn" href="https://twitter.com/hafizj1125/">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn " href="https://facebook.com/hafizj1125/">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="btn" href="https://github.com/mukarramjavid/">
              <i className="fab fa-github"></i>
            </a>
            <a className="btn" href="https://www.linkedin.com/in/hafizj1125/">
              <i className="fab fa-linkedin"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
