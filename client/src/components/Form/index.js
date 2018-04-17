import React from "react";
import "./Form.css";
import { Col, Row, Container } from "react-materialize";
import { Button } from "react-materialize";
import { Icon } from "react-materialize";

const Input = props =>
<Container>
  <Row>
    <Col s={12} className="center-align">
      <Row className="searchBar">
        <form>

          <div className="form-group">
          <Col s={9} className="inputSearch">
            <input
              type="text"
              className="form-control z-depth-4"
              name="searchInput"
              placeholder="Search by Animal's Common Name"
              value={props.searchTerm}
              onChange={props.handleInputChange}
             />
             </Col>
             <Col s={3}>
                <Button waves='light' type ="submit" className="searchBtn z-depth-5 brown darken-1" 
                      onClick={props.handleFormSubmit}><Icon tiny>pets</Icon>Search</Button>
              </Col>
          </div>
            
              

            </form>
            </Row>
        </Col>
  </Row>
  </Container>



export default Input;