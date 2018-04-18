const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charitySchema = new Schema({
  title: {
    type: String,
    Required: true
  },
  commonName: { 
    type: Array
   },
   imageLink:{
     type: String,
   },
   link: {
      type: String,
      Required: true
    }

});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;