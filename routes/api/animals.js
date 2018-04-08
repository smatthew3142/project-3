const router = require("express").Router();
const ecosController = require("../../controllers/ecos");
const animalController = require("../../controllers/animalsController");

// Calling the scrape route
router
  .route("/scrape")
  .get(ecosController.scrape);

router
  .route("/all")
  .get(animalController.findAll)


module.exports = router;


