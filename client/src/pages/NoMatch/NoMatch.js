import React from "react";
import { Col, Row, Container } from "react-materialize";
import "./NoMatch.css";

const NoMatch = () =>
  <Container fluid className="mainContent">
    <Row>
      <Col l={12}>

    
          <h1 className="notFound">404: Sorry. Page Not Found!</h1>
          <img src="/assets/images/antelope.jpg"  alt="antelope" className="antelope" style={{zIndex: "-100"}}/>

      </Col>
    </Row>
   
  </Container>;

export default NoMatch;