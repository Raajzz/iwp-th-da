const express = require("express");
const router = express.Router();
const { topTenVac, monthlyState } = require("../controllers/conrollers");

router.route("/top10").get(topTenVac);
router.route("/monthly").post(monthlyState);

module.exports = router;