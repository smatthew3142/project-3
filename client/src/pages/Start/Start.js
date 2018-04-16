import React from "react";
import { Col, Row, Container } from "react-materialize";
import "./Start.css";
import Search from "../../components/Search";


const Start = () =>


<Container fluid>
  <Row>
   <Row className = 'slider fullscreen' style={{zIndex: "-100"}}>
       <Col>
        <div className="mainContent">
              <ul className = 'slides'>
                <li>
                  <img src="/assets/images/tiger.jpg"  alt="tiger"/> 
                </li>
                <li>
                  <img src="/assets/images/turtle.jpg"  alt="turtle"/> 
                </li>
                <li>
                  <img src="/assets/images/wolf.jpg"  alt="wolf"/> 
                </li>
                <li>
                  <img src="/assets/images/polarbear.jpg"  alt="polarbear" /> 
                </li>
                <li>
                  <img src="/assets/images/elephant.jpg"  alt="elephant" /> 
                </li>
                <li>
                  <img src="/assets/images/macaw.jpg"  alt="macaw" /> 
                </li>
                <li>
                  <img src="/assets/images/dolphin.jpg"  alt="dolphin" /> 
                </li>
                <li>
                  <img src="/assets/images/rhino.jpg"  alt="rhino" /> 
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      <Row>
          <Search/>
      </Row>

  </Row>
	</Container>;


export default Start;