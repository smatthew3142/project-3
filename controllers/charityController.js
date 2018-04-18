const db = require("../models");

// Defining methods 
module.exports = {
findCharity: function(req, res) {
  db.Charity
    .find(req.query)
    .sort({ date: -1 })
    .then(dbCharity => res.json(dbCharity))
    .catch(err => res.status(422).json(err));
}
};

