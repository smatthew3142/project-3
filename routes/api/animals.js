const router = require("express").Router();
const animalsController = require("../../controllers/animalsController");


router
  .route("/")
  .get(animalsController.findAll)

// Matches with "/api/animals/:id"
router
  .route("/:id")
  .get(animalsController.findById)
  .put(animalsController.update)
  .delete(animalsController.remove);

module.exports = router;