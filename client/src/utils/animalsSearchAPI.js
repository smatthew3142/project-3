import axios from "axios";

export default {
  // Gets all animals from db
  getAnimalsSearch: function() {
    return axios.get("/api/animalsSearch");
  },
  // Gets the animals with the given id
  getAnimalSearch: function(id) {
    return axios.get("/api/animalsSearch/" + id);
  },

  saveAnimalsSearch: function(animalsSearchData) {
    return axios.post("/api/animalsSearch", animalsSearchData);
  },

  queryAnimalsSearch: function(queryUrl) {
    return axios.get(queryUrl);
  }
};
