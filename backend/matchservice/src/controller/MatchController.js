const express = require("express")
const router = express.Router();
const matchService = require("../service/MatchService")
var bodyParser = require('body-parser')
// parse application/json
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());
// Get All 
router.get("/", matchService.getAllMatch);
// Get Match Information
router.get("/matchid/:matchid", matchService.getMatchByMatchId);
// Get Match Information by name
router.get("/matchname/:matchname", matchService.getMatchByMatchName);
// Get size 
router.get("/matchsize/:matchid", matchService.getMatchSizeByMatchID);
// Get Match By status
router.get("/status/:status", matchService.getMatchByMatchStatus);
// Get Match By owner
router.get("/owner/:matchowner", matchService.getMatchByMatchOwner);
// get match by userjoin
router.get("/join/:username", matchService.getMatchByJoin)
// Post New Match
router.post("/newmatch", matchService.postNewMatch);
module.exports = router;