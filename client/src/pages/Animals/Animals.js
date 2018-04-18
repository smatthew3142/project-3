import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import API from "../../utils/API";
import { List } from "../../components/List";
import SearchResults from "../../components/SearchResults";

class Animals extends Component {
  constructor (props){
    super (props)
       this.state = {
          animalsArr: [],
          charities: []
      };
    this.handleDonate = this.handleDonate.bind(this);
 };

  componentDidMount() {
    this.loadAnimals();
  }

  loadAnimals = () => {
    API.getAnimals()
      .then(res => this.setState({ animalsArr: res.data }))
      .catch(err => console.log(err));
  };
  handleDonate = id => {
    const commonName = this.state.animalsArr.find(animal => animal._id === id);
    console.log(commonName);
    API.getCharity(commonName)
    .then(res => this.setState({charities: res.data}))
    .catch(err => console.log(err));
    console.log(this.charities);
};


render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
            <h2>Animals In the List</h2>
          {this.state.animalsArr.length ? (
            <List>
              {this.state.animalsArr.slice(0, 5).map(animal => (
                <SearchResults
                       key={animal._id} 
                       _id={animal._id}
                       link={animal.link}
                       scientificName={animal.scientificName}
                       commonName={animal.commonName}
                       status={animal.status}
                       handleDonate = {this.handleDonate}
                       buttonText = "Donate" 
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
export default Animals;

