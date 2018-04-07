const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charitySchema = new Schema({
  title: { 
    type: String,
     required: true 
    },

  animalType: { 
    type: "array",
    "items": {
           "type": "string"
          } 
    },

  region: {
    type: "array",
    "items": {
           "type": "string"
          } 
  }

});

const Charity = mongoose.model("Charity", charitySchema);
