import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import { Form, Input, FormBtn, FormGroup, Label } from "../../components/Form";
import { CardPanel } from "react-materialize";
import { Animal } from "../../components/Animal";


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


    let queryURL = `http://eol.org/api/search/1.0.json?q=`;

    if (searchTerm.indexOf(' ') >= 0) {
      searchTerm = searchTerm.replace(/\s/g, '+');
    }

    if (searchTerm) {
      queryURL += searchTerm + '&page=1';
    }

    fetch(queryURL)
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        console.log(json);
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
                  <CardPanel className="grey darken-1">
                    <h4 className="white-text">Results</h4>

                    {
                      this.state.results.map((animal, i) => (
                          <Animal
         
                          />
                        )
                      )
                    }
                    </CardPanel>

                    <div className="moreButton" style={{margin: "0 auto", width: "180px"}}>
                      <FormBtn additional='btn-block' onClick={this.moreArticles}>See More</FormBtn>
                    </div>
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
