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
                  <div className = 'caption center-align'>
                    <h3>Post 1</h3>
                    <h5 className = 'light grey-text text-lighten-3'>Here’s our small slogan.</h5>
                  </div>
                </li>
                <li>
                  <img src="/assets/images/turtle.jpg"  alt="turtle"/> 
                  <div className= "caption center-align">
                    <h3>Post 2</h3>
                    <h5 className = "light grey-text text-lighten-3">Here’s our small slogan.</h5>
                  </div>
                </li>
                <li>
                  <img src="/assets/images/wolf.jpg"  alt="wolf"/> 
                          
                  <div className= "caption center-align">
                    <h3>Post 3</h3>
                    <h5 className = "light grey-text text-lighten-3">Here’s our small slogan.</h5>
                  </div>
                </li>
                <li>
                  <img src="/assets/images/polarbear.jpg"  alt="polarbear" /> 
                  <div className= "caption center-align">
                    <h3>Post 4</h3>
                    <h5 className="light grey-text text-lighten-3">Here’s our small slogan.</h5>
                  </div>
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