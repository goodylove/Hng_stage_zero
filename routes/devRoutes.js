const express = require("express");
const Router = express.Router();
const getBasicInfo = require("../controller/devContoller");

Router.route("/").get(getBasicInfo);

module.exports = Router;
