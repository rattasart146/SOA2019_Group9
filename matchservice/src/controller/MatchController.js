const express = require("express")
const router = express.Router();
const matchService = require("../service/MatchService")
var bodyParser = require('body-parser')

// parse application/json
router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json());


// Get All 
router.get("/", matchService.getAllMatch);

// Get Match Information
router.get("/:matchid", matchService.getMatchByMatchId);


// Post New Match
router.post("/newmatch", matchService.postNewMatch);

module.exports = router;