const router = require("express").Router();
const animalRoutes = require("./animals");
const scrapeRoutes = require("./scrape");
const charityRoutes = require("./charity");



router.use("/animals", animalRoutes);
router.use("/charity", charityRoutes);
router.use("/scrape", scrapeRoutes);



module.exports = router;