const router = require("express").Router();
const ecosController = require("../../controllers/ecos");
const animalsController = require("../../controllers/animalsController");

// Calling the scrape route

router
  .route("/")
  .get(animalsController.findAll)

  router
  .route("/all")
  .get(animalsController.findAll)

// Matches with "/api/animals/:id"
router
  .route("/:id")
  .get(animalsController.findById)
  .put(animalsController.update)
  .delete(animalsController.remove);

  router
  .route("/scrape")
  .get(ecosController.scrape);


module.exports = router;
