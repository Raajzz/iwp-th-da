const express = require("express");
const router = express.Router();
const { getHandler, postHandler } = require("../controllers/dataHandler");

router.route("/").get(getHandler).post(postHandler);

module.exports = router;