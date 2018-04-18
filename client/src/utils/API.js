import axios from "axios";

export default {
  // Gets all animals from db
  getAnimals: function() {
    return axios.get("/api/animals");
  },
  searchAnimals: function(query) {
    return axios.get("/api/animals", { params: { q: query } });
  },
  // Gets the animals with the given id
  getAnimal: function(id) {
    return axios.get("/api/animals/" + id);
  },
  getCharity: function() {
    return axios.get("api/charity");
  }
};


