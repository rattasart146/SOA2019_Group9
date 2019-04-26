const express = require("express")
const router = express.Router();
const processService = require("../service/ProcessService")
var bodyParser = require('body-parser')

// parse application/json
router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json());


// Get All detail
router.get("/detail", processService.getThisMatchDetail);

// Get status
router.get("/status", processService.getThisMatchStatus);


// get owner username
router.get("/owner", processService.getOwnerUsername);


// get all team list
router.get("/allteam", processService.getTeamList);

// get all team list
router.post("/teamjoin", processService.postNewTeamJoin);

module.exports = router;