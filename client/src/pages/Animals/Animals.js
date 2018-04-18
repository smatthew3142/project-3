import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import API from "../../utils/API";
import { Button } from "react-materialize";


class Animals extends Component {
  state = {
    searchTerm: 'bear',
    page: '0',
    results: [],
    previousSearch: {},
    noneFound: false,
    savedAnimals: []
  };

  saveAnimal = (animal) => {

    let newAnimal = {
      commonName: "",
      sciName: "",
      state: ""
    }

    API.saveAnimal(newAnimal)
      .then(res => this.loadAnimals())
      .catch(err => console.log(err));
  };

  deleteAnimal = (id) => {
    API.deleteAnimal(id)
      .then(results => {
        let savedAnimals = this.state.savedAnimals.filter(animal => animal._id !== id);
        this.setState({ savedArticles: savedAnimals });
        this.loadArticles();
      })
      .catch(err => console.log(err));
  };

  loadAnimals = () => {
    API.getAnimals()
      .then(res => this.setState({ animalsArr: res.data }))
      .catch(err => console.log(err));
  };

  getAnimals = (query) => {
    if (query.searchTerm !== this.state.previousSearch.searchTerm) {
      this.setState({ results: [] });
    }
    let { searchTerm } = query;
    

    let queryURL = `eol.org/api/search/1.0.json?q=`;

    if (searchTerm.indexOf(' ') >= 0) {
      searchTerm = searchTerm.replace(/\s/g, '+');
    }

    if (searchTerm) {
      queryURL += searchTerm + '&page=1';
    }

    fetch(queryURL)
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        console.log(data.results);
      })
      .catch(function (err) {
        console.log(err);
      });

    API.queryAnimals(queryURL)
      .then(results => {
        this.setState();
      });

  };

  handleFormSubmit = event => {
        event.preventDefault();
        let { commonName, sciName, state } = this.state;
        let query = { commonName };
        this.getAnimals(query);
    };

  moreAnimals = () => {
    let { searchTerm } = this.state.previousSearch;
    let query = { searchTerm };
    let page = this.state.page;
    page++;
    this.setState({ page: page }, function () {
      this.getAnimals(query);
    });
  };

    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md-6 sm-12">
            <Button
                    className="submitButton"
                    onClick={this.getAnimals}
                    type='info'
                    >Submit
            </Button>
              
            </Col>
          </Row>
        </Container>
      );
    }
  };
  export default Animals;
