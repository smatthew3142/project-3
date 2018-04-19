import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import API from "../../utils/API";
import { List } from "../../components/List";
import EndangeredResults from "../../components/EndangeredResults";

class EndangeredAnimals extends Component {
  constructor (props){
    super (props)
       this.state = {
          animalsArr: []
      };
 };

  componentDidMount() {
    this.loadEndangered();
  }

  loadEndangered = () => {
    API.getAnimals()
      .then(res => this.setState({ animalsArr: res.data }))
      .catch(err => console.log(err));
  };


render() {
  return (
    <Container fluid>
      <Row>
         <Col l={12}>
            <h2>Endangered Animals List</h2>
          {this.state.animalsArr.length ? (
            <List>
              {this.state.animalsArr.map(animal => (
                <EndangeredResults
                       key={animal._id} 
                       _id={animal._id}
                       link={animal.link}
                       scientificName={animal.scientificName}
                       commonName={animal.commonName}
                       status={animal.status}
                    />
                ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )};

        </Col>
      </Row>
    </Container>
  );
}
};

export default EndangeredAnimals;