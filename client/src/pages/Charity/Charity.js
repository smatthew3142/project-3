import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import API from "../../utils/API";
import {List, ListItem } from "../../components/List";


  class Charity extends Component {
    constructor (props){
      super (props)
         this.state = {
            Charities: []
        };
   };


  componentDidMount() {
    this.loadCharity();
  }

  loadCharity = () => {
    API.getCharity()
      .then(res => this.setState({ Charities: res.data }))
      .catch(err => console.log(err));
  };

    

    render() {
      return (
        <Container fluid>
        <Row>
            <Col l={12}>
            {this.state.Charities.length ? (
            <List>
              {this.state.Charities.map(Charity =>(
                <ListItem>
                      <p>{Charity.title} <br />
                         {Charity.link} <br/> 
                         |{Charity.commonName}
                      </p>
                </ListItem>
              ))}
            </List>   
            ) : (
              <h2>Oops A Problem Has Been Encounter, Try Again Later</h2>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

  export default Charity;
