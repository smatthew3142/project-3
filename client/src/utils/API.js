import axios from "axios";

export default {
  
  getAnimals: function() {
    return axios.get("/api/animals");
  },
  
  getAnimal: function(id) {
    return axios.get("/api/animals/" + id);
  },
 
  deleteAnimal: function(id) {
    return axios.delete("/api/animals/" + id);
  },
  
  saveAnimal: function(articleData) {
    return axios.post("/api/animals", animalData);
  },
  queryAnimals: function(queryUrl) {
    return axios.get(queryUrl);
  }
};


