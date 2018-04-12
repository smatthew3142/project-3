import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import API from "../../utils/API";

class Animals extends Component {
  state = {
    animalsArr: []
  };

  componentDidMount() {
    this.loadAnimals();
  }

  loadAnimals = () => {
    API.getAnimals()
      .then(res => this.setState({ animalsArr: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
              <h1>Animals In the List</h1>
            {this.state.animalsArr.length ? (

                this.state.animalsArr.map(animal => (
                  <li key={animal._id}>
                    <a href={"/animals/" + animal._id}>
                      <strong>
                        {animal.scientificName} by {animal.commonName}
                      </strong>
                    </a>

                  </li>
                ))

            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Animals;
