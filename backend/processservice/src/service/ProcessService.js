const mockThismatch = require('../../data/mockThisgame')
const mockTeam = require('../../data/mockTeam')
const _ = require('underscore')
const axios = require('axios');
var mysql = require('mysql');




const HOST_MYSQL = '35.240.225.238'
const PORT_MYSQL = '3310'
// connection configurations
var con = mysql.createConnection({
    host: HOST_MYSQL,
    port: PORT_MYSQL,
    user: 'root',
    password: 'root',
    database: 'process_database'
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
exports.getOwnerUsername = (req, res) => {}
//แสดงรายชื่อทีมทั้งหมด
exports.getTeamList = (req, res) => {
    let matchid = req.params.matchid;
    con.query("SELECT * FROM match_team where match_id =?", matchid, function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
}
//แสดงรายการตารางแข่ง
exports.getAllSchedule = (req, res) => {
    let matchid = req.params.matchid;
    con.query("SELECT * FROM match_schedule where match_id =?", matchid, function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
}
//แสดงรายชื่อเจ้าของทีมกับmatchid
exports.getAllTeamOwner = (req, res) => {
    let matchid = req.params.matchid;
    con.query("SELECT match_id , team_owner FROM match_team ", function(error, results, fields) {
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
    let team_owner = req.body.team_owner;
    axios.get('http://localhost:3001/api/matchgateway/match/matchsize/' + matchid).then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
        let data = (response.data);
        console.log(data);
        var s = data[0].match_size + ""; // simply convert a number to string
        var d = parseInt(s); // parse the string back to a number.
        var matchsize = d;
        console.log(matchsize);
        if (!matchid) {
            return res.status(400).send({
                error: true,
                message: 'Please provide matchid'
            });
        }
        if (!team_name) {
            return res.status(400).send({
                error: true,
                message: 'Please provide team_name'
            });
        }
        if (!team_contact) {
            return res.status(400).send({
                error: true,
                message: 'Please provide team_contact'
            });
        }
        if (!team_owner) {
            return res.status(400).send({
                error: true,
                message: 'Please provide team_owner'
            });
        }

            con.query("SELECT team_name from match_team where team_name = ? AND match_id =? ",[team_name, matchid ], function(error, results, fields) {
                console.log(results)
                if (results.length) {
                    return res.send("deplicate teamname");   
                } else{
                        con.query("SELECT COUNT (teamid) as countz  FROM match_team where match_id = ?", matchid, function(error, results, fields) {
                            if (error) throw error;
                            console.log(results);
                            var a = results[0].countz + ""; // simply convert a number to string
                            var b = parseInt(a); // parse the string back to a number.
                            var thissize = (b)
                            console.log(thissize);
                            console.log(matchsize, thissize);
                            if (matchsize > thissize) {
                                con.query("INSERT INTO match_team SET ? ", {
                                    match_id: matchid,
                                    team_name: team_name,
                                    team_contact: team_contact,
                                    team_owner: team_owner
                                }, function(error, results, fields) {
                                    if (error) throw error;
                                    return res.send({
                                        error: false,
                                        data: results,
                                        message: 'New team has been created successfully.'
                                    });
                                });
                            } else {
                                res.send('match full!')
                            }
                        });

                }
            });



        }).catch(error => {
                    console.log(error);
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
    let month = req.body.month;
    let year = req.body.year;
    let hr = req.body.hr;
    let min = req.body.min;



    if (!matchid) {
        return res.status(400).send({
            error: true,
            message: 'Please provide matchid'
        });
    }
    if (!team_1_name) {
        return res.status(400).send({
            error: true,
            message: 'Please provide team_1_name'
        });
    }
    if (!team_2_name) {
        return res.status(400).send({
            error: true,
            message: 'Please provide team_2_name'
        });
    }
    if (!date) {
        return res.status(400).send({
            error: true,
            message: 'Please provide date'
        });
    }
    if (!month) {
        return res.status(400).send({
            error: true,
            message: 'Please provide month'
        });
    }
    if (!year) {
        return res.status(400).send({
            error: true,
            message: 'Please provide year'
        });
    }
    if (!hr) {
        return res.status(400).send({
            error: true,
            message: 'Please provide hr'
        });
    }
    if (!min) {
        return res.status(400).send({
            error: true,
            message: 'Please provide min'
        });
    }
    con.query("INSERT INTO match_schedule SET ? ", {
        match_id: matchid,
        team_1_name: team_1_name,
        team_2_name: team_2_name,
        date: date,
        month: month,
        year: year,
        hr: hr,
        min: min
    }, function(error, results, fields) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: 'New schedule has been created successfully.'
        });
    });
}
exports.getMatchIdFromTeamOwner = (req, res) => {
    let username = req.params.username;
    if (!username) {
        return res.status(400).send({
            error: true,
            message: 'Please provide username'
        });
    }
    con.query("SELECT  match_id FROM match_team where team_owner = ?", username, function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
}

exports.postUpdateScore = (req, res) => {
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
    let schedule_id = req.body.schedule_id;
    let team_1_score = req.body.team_1_score;
    let team_2_score = req.body.team_2_score;

    if (!matchid) {
        return res.status(400).send({
            error: true,
            message: 'Please provide matchid'
        });
    }

    if (!schedule_id) {
        return res.status(400).send({
            error: true,
            message: 'Please provide schedule_id'
        });
    }
    if (!team_1_score) {
        return res.status(400).send({
            error: true,
            message: 'Please provide team_1_score'
        });
    }
    if (!team_2_score) {
        return res.status(400).send({
            error: true,
            message: 'Please provide team_2_score'
        });
    }
    con.query("UPDATE match_schedule SET team_1_score = ?, team_2_score = ? WHERE schedule_id = ? ", [
         team_1_score , team_2_score, schedule_id ]
    , function(error, results, fields) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: 'UPDATE schedule has been successfully.'
        });
    });
}