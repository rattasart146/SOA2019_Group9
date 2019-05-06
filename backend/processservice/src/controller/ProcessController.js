const express = require("express")
const router = express.Router();
const processService = require("../service/ProcessService")
var bodyParser = require('body-parser')
// parse application/json
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());
/*
// Get  detail
router.get("/detail", processService.getThisMatchDetail);
// Get status
router.get("/status", processService.getThisMatchStatus);
// get owner username
router.get("/owner", processService.getOwnerUsername);
*/
// get all team list
router.get("/:matchid/allteam", processService.getTeamList);
// postnew team 
router.post("/:matchid/teamjoin", processService.postNewTeamJoin);
// get all schedule list
router.get("/:matchid/allschedule", processService.getAllSchedule);
// post new schedule
router.post("/:matchid/newschedule", processService.postNewSchedule);
//get all team owner
router.get("/getallteamowner", processService.getAllTeamOwner);
//get getMatchIdFromTeamOwner
router.get("/getmatchidfromteamowner/:username", processService.getMatchIdFromTeamOwner);

// post update score
router.post("/:matchid/updatescore", processService.postUpdateScore);
module.exports = router;