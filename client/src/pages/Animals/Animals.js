// import React, { Component } from "react";
// import { Col, Row, Container } from "react-materialize";
// import API from "../../utils/API";
// import { Article } from "../../components/Article";
// import { Jumbotron } from "../../components/Jumbotron";
// import { Form, Input, FormBtn, FormGroup, Label } from "../../components/Form";
// import { CardPanel } from "react-materialize";


import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Article";
import API from "../../utils/API";

class Animals extends Component {
  state = {
    animals: []
  };

  componentDidMount() {
    this.loadAnimals();
  }

  loadAnimals = () => {
    API.getAnimals()
      .then(res => this.setState({ animals: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
              <h1>Animals In the List</h1>
            {this.state.animals.length ? (

                this.state.animals.map(book => (
                  <li key={animals._id}>
                    <a href={"/animals/" + animals._id}>
                      <strong>
                        {animals.scientificName} by {animals.commonName}
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

