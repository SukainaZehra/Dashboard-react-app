import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class Bootstrap extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>1 of 1</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Bootstrap;
