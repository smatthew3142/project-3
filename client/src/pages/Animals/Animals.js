import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import { Form, Input, FormBtn, FormGroup, Label } from "../../components/Form";
import { CardPanel } from "react-materialize";



class Animals extends Component {
  state = {
    searchTerm: '',
    results: [],
    info: [],
    previousSearch: {},
    noneFound: false,
    savedAnimals: []
  };


  getAnimals = (query) => {
    if (query.searchTerm !== this.state.previousSearch.searchTerm) {
      this.setState({ results: [] });
    }
    let { searchTerm } = query;


    let queryURL = `//eol.org/api/search/1.0.json?q=`;

    if (searchTerm.indexOf(' ') >= 0) {
      searchTerm = searchTerm.replace(/\s/g, '+');
    }

    if (searchTerm) {
      queryURL += searchTerm + '&page=1';
    }

    fetch(queryURL)
      .then(results => results.json())
      
      .then(function (json) {
        console.log(json);
      })

      .then(results => {

        this.setState({
        animalData: results
        })
      })

      .catch(function (err) {
        console.log(err);
      }); 

  };

    handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
        event.preventDefault();
        let { searchTerm } = this.state;
        let query = { searchTerm };
        this.getAnimals(query);
    };

    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md-6 sm-12">
            <Form>
              <FormGroup>
                <Label htmlFor="searchTerm">Enter a Keyword:</Label>
                <Input
                onChange={this.handleInputChange}
                name='searchTerm'
                value={this.state.searchTerm}
                placeholder='Search'
                />
              </FormGroup>
  
              <FormBtn
                className="submitButton"
                disabled={!(this.state.searchTerm)}
                onClick={this.handleFormSubmit}
                type='info'
                >Submit
              </FormBtn>
            </Form>
          </Col>
        </Row>
        <Row>
            <Col l={12}>

            { this.state.noAnimals ?
              (<h1>Sorry. No animals here!</h1>) :
              this.state.results.length>0 ? (
                <Row>
                  <CardPanel className="brown darken-1">
                    <h4>Results</h4>

                    {
                      this.state.results.map((animalData, i) => (

                          <h2>this.state.animalData.results</h2>
                        )
                      )
                    }
                    </CardPanel>
                </Row>
              ) : ''
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

  export default Animals;
