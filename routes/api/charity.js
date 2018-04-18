const router = require("express").Router();
const charityController = require("../../controllers/charityController");


router
  .route("/")
  .get(charityController.findCharity);


module.exports = router;