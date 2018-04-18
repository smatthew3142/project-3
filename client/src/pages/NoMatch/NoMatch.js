import React from "react";
import { Col, Row, Container } from "react-materialize";
import "./NoMatch.css";

const NoMatch = () =>
  <Container fluid className="mainContent">
    <Row>
      <Col l={12}>
    
          <h1>404: Sorry. Page Not Found!</h1>

      </Col>
    </Row>
   
  </Container>;

export default NoMatch;