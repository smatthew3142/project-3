import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import API from "../../utils/API";
import {List, ListItem } from "../../components/List";
import "./charity.css";


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
                      <div className="imgStyle"><img className="charityLogo" alt="logo" src={Charity.imageLink}/></div>
                      <p>{Charity.title} <br />
                      <a href = {Charity.link} target="_blank">Click Here to Donate</a> <br/> </p>
                      <p>This Organization supports the following Endangered Species:<br/>  
                         {Charity.commonName.reduce((prev, curr) => [prev, ", ", curr])}</p>
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
