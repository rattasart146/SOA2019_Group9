const mockThismatch = require('../../data/mockThisgame')
const mockTeam = require('../../data/mockTeam')
const _ = require('underscore')


var mysql = require('mysql');


// connection configurations
var con = mysql.createConnection({
  host     : '127.0.0.3',
  user: 'root',
  password: 'root',
  database  : 'process_database'
});


// connect to database
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});





exports.getThisMatchDetail = (req, res) => {
     if (mockThismatch == "") {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(mockThismatch);
    }

}

exports.getThisMatchStatus = (req, res) => {
    var docs
    docs.push(mockThisgame.status)
    return res.status(200).json(docs)
}
exports.getOwnerUsername = (req, res) => {
}


//แสดงรายชื่อทีมทั้งหมด
exports.getTeamList = (req, res) => {
    let matchid = req.params.matchid;
    con.query("SELECT * FROM match_team where match_id =?", matchid, function (error, results, fields) {
         if (error) throw error;
         return res.send(results);
        });
}

//แสดงรายการตารางแข่ง
exports.getAllSchedule = (req, res) => {
    let matchid = req.params.matchid;
    con.query("SELECT * FROM match_schedule where match_id =?", matchid, function (error, results, fields) {
         if (error) throw error;
         return res.send(results);
        });
}


// เพิ่มทีมเข้าไปในการแข่งขัน
exports.postNewTeamJoin = (req, res) => {
    /*
    var docs = req.body
         if (teamcount < 8) {
            mockTeam.push(docs)
            teamcount+=1
            return res.status(201).send({isNewTeamJoin:true})
        } else{
            return res.status(201).send({isNewTeamJoin:false})
        }
    var docs = ""
    */

    let matchid = req.params.matchid;
    let team_name = req.body.team_name;
    let team_contact = req.body.team_contact;
    if (!matchid) {
       return res.status(400).send({ error:true, message: 'Please provide matchid' });
     }
     if (!team_name) {
       return res.status(400).send({ error:true, message: 'Please provide team_name' });
     }
     if (!team_contact) {
       return res.status(400).send({ error:true, message: 'Please provide team_contact' });
     }
    con.query("INSERT INTO match_team SET ? ", { match_id: matchid , team_name: team_name, team_contact: team_contact}, function (error, results, fields) {
        if (error) throw error;
     return res.send({ error: false, data: results, message: 'New team has been created successfully.' });
     });
}

exports.postNewSchedule = (req, res) => {
    /*
    var docs = req.body
         if (teamcount < 8) {
            mockTeam.push(docs)
            teamcount+=1
            return res.status(201).send({isNewTeamJoin:true})
        } else{
            return res.status(201).send({isNewTeamJoin:false})
        }
    var docs = ""
    */

    let matchid = req.params.matchid;
    let team_1_name = req.body.team_1_name;
    let team_2_name = req.body.team_2_name;
    let date = req.body.date;
    let hr = req.body.hr;
    let min = req.body.min;
    if (!matchid) {
       return res.status(400).send({ error:true, message: 'Please provide matchid' });
     }
     if (!team_1_name) {
       return res.status(400).send({ error:true, message: 'Please provide team_1_name' });
     }
     if (!team_2_name) {
       return res.status(400).send({ error:true, message: 'Please provide team_2_name' });
     }
     if (!date) {
       return res.status(400).send({ error:true, message: 'Please provide date' });
     }
     if (!hr) {
       return res.status(400).send({ error:true, message: 'Please provide hr' });
     }
    if (!min) {
               return res.status(400).send({ error:true, message: 'Please provide min' });
    }

    con.query("INSERT INTO match_schedule SET ? ", { match_id: matchid , team_1_name: team_1_name, team_2_name: team_2_name, date: date, hr: hr, min: min}, function (error, results, fields) {
        if (error) throw error;
     return res.send({ error: false, data: results, message: 'New schedule has been created successfully.' });
     });
}


