import React from "react";
import { Col, Row, Container } from "react-materialize";
import Search from "../../components/Search";


const Start = () =>
<Container fluid>
  <Row>
   <Row className = 'slider' >
       <Col l={12}>
            <ul className = 'slides'>
              <li>
                <img src = 'http://lorempixel.com/580/250/nature/1' /> 
                        {/* <!-- random image --> */}
                <div className = 'caption center-align'>
                  <h3>Post 1</h3>
                  <h5 className = 'light grey-text text-lighten-3'>Here’s our small slogan.</h5>
                </div>
              </li>
              <li>
                <img src='http://lorempixel.com/580/250/nature/2' /> 
                        {/* <!-- random image --> */}
                <div className= "caption center-align">
                  <h3>Post 2</h3>
                  <h5 className = "light grey-text text-lighten-3">Here’s our small slogan.</h5>
                </div>
              </li>
              <li>
                <img src= "http://lorempixel.com/580/250/nature/3" /> 
                        {/* <!-- random image --> */}
                <div className= "caption center-align">
                  <h3>Post 3</h3>
                  <h5 className = "light grey-text text-lighten-3">Here’s our small slogan.</h5>
                </div>
              </li>
              <li>
                <img src="http://lorempixel.com/580/250/nature/4" /> 
                        {/* <!-- random image --> */}
                <div className= "caption center-align">
                  <h3>Post 4</h3>
                  <h5 className="light grey-text text-lighten-3">Here’s our small slogan.</h5>
								</div>
            </li>
					</ul>
				</Col>
      </Row>
      <Row>
          <Search/>
      </Row>

  </Row>
	</Container>;


export default Start;