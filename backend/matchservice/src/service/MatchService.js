const mockMatch = require('../../data/mockMatch')
const _ = require('underscore')
const https = require('https');
const request = require('request');
const axios = require('axios');
var http = require("http");
var mysql = require('mysql');


const HOST_MYSQL = '35.240.225.238'
const PORT_MYSQL = '3309'
// connection configurations
var con = mysql.createConnection({
    host: HOST_MYSQL,
    port: PORT_MYSQL,
    user: 'root',
    password: 'root',
    database: 'match_database'
});
// connect to database
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
exports.getMatchByMatchId = (req, res) => {
    /*
    var filterMatch = _.where(mockMatch, {matchid: parseInt(req.params.matchid)})

    if(filterMatch == "") {
        return res.sendStatus(404)
    } else {
        var docs = []
        
        for(var count in filterMatch) {
            docs.push({matchid: filterMatch[count].matchid,
                matchname: filterMatch[count].matchname,
                owner_username: filterMatch[count].owner_username,
                location: filterMatch[count].location,
                status: filterMatch[count].status
            })
        }

        return res.status(200).json(docs)
    }
    */
    let match_id = req.params.matchid;
    if (!match_id) {
        return res.status(400).send({
            error: true,
            message: 'Please provide match_id'
        });
    }
    con.query('SELECT * FROM matchs where match_id=?', match_id, function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
}
exports.getMatchByMatchName = (req, res) => {
    /*
    var filterMatch = _.where(mockMatch, {matchname: (req.params.matchname)})
    if(filterMatch == "") {
        return res.sendStatus(404)
    } else {
        var docs = []
        
        for(var count in filterMatch) {
            docs.push({matchid: filterMatch[count].matchid,
                matchname: filterMatch[count].matchname,
                owner_username: filterMatch[count].owner_username,
                location: filterMatch[count].location,
                status: filterMatch[count].status
            })
        }
        return res.status(200).json(docs)
    }
    */
    let matchname = req.params.matchname;
    if (!matchname) {
        return res.status(400).send({
            error: true,
            message: 'Please provide matchname'
        });
    }
    con.query('SELECT * FROM matchs where matchname=?', matchname, function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
}
//รับ match มาเป็น category
exports.getMatchByMatchStatus = (req, res) => {
    /*
    var filterMatch = _.where(mockMatch, {status: (req.params.status)})
      if (filterMatch == "") {
        return res.sendStatus(404)
    } else {

var docs = []
        for(var count in filterMatch) {
            docs.push({matchid: filterMatch[count].matchid,
                matchname: filterMatch[count].matchname,
                owner_username: filterMatch[count].owner_username,
                location: filterMatch[count].location,
                status: filterMatch[count].status
            })
        }
        return res.status(200).json(docs);
    }
    */
    let match_status = req.params.status;
    if (!match_status) {
        return res.status(400).send({
            error: true,
            message: 'Please provide match_status'
        });
    }
    con.query('SELECT * FROM matchs where match_status=?', match_status, function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
}
//รับ match มาตามชือ่ผู้จัด
exports.getMatchByMatchOwner = (req, res) => {
    let matchowner = req.params.matchowner;
    if (!matchowner) {
        return res.status(400).send({
            error: true,
            message: 'Please provide matchowner'
        });
    }
    con.query('SELECT * FROM matchs where matchowner=?', matchowner, function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
}
//แสดง match ที่ user ไปเข้าร่วมไว้
exports.getMatchByJoin = (req, res) => {
    let username = req.params.username;
    axios.get('http://localhost:3001/api/processgateway/process/getallteamowner').then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
        var allteamowner = response.data;
        var results = _.find(allteamowner, function(q) {
            return q.team_owner.match(username)
        });
        console.log(results);
        return res.send(results);
    }).catch(error => {
        console.log(error);
        return res.send(error);
    });
}
exports.getAllMatch = (req, res) => {
    /*
    if (mockMatch == "") {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(mockMatch)
    }
    */
    con.query("SELECT * FROM matchs", function(error, results, fields) {
        if (results.length) {
            console.log("GET Matchs IS OK")
            return res.status(200).json(results)
        } else {
            return res.status(404)
        }
    });
}
exports.postNewMatch = (req, res) => {
    /*
    var docs = req.body
    
    mockMatch.push(docs)
    return res.status(201).send({isCreateNewMatch:true})
    */
    let matchname = req.body.matchname;
    let matchowner = req.body.matchowner;
    let match_desc = req.body.match_desc;
    let match_location = req.body.match_location;
    let match_status = req.body.match_status;
    let match_size = req.body.match_size;
    if (!matchname) {
        return res.status(400).send({
            error: true,
            message: 'Please provide matchname'
        });
    }
    if (!matchowner) {
        return res.status(400).send({
            error: true,
            message: 'Please provide matchowner'
        });
    }
    if (!match_desc) {
        return res.status(400).send({
            error: true,
            message: 'Please provide matchdesc'
        });
    }
    if (!match_location) {
        return res.status(400).send({
            error: true,
            message: 'Please provide match_location'
        });
    }
    if (!match_status) {
        return res.status(400).send({
            error: true,
            message: 'Please provide match_status'
        });
    }
    if (!match_size) {
        return res.status(400).send({
            error: true,
            message: 'Please provide match_size'
        });
    }
    con.query("SELECT matchname from matchs where matchname = ?",matchname , function(error, results, fields) {
        console.log(results)
        if (results.length) {
            return res.send("deplicate matchname");   
        } else{
            con.query("INSERT INTO matchs SET ? ", {
                    matchname: matchname,
                    matchowner: matchowner,
                    match_desc: match_desc,
                    match_location: match_location,
                    match_status: match_status,
                    match_size: match_size
                }, function(error, results, fields) {
                    if (error) throw error;
                    return res.send({
                        error: false,
                        data: results,
                        message: 'New match has been created successfully.'
                    });
                }
                );
        }
    });
}
exports.getMatchSizeByMatchID = (req, res) => {
    let matchid = req.params.matchid;
    if (!matchid) {
        return res.status(400).send({
            error: true,
            message: 'Please provide matchid'
        });
    }
    con.query('SELECT match_size FROM matchs where match_id=?', matchid, function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
}

exports.postUpdateStatus = (req, res) => {

    let matchid = req.params.matchid;
    let status = req.params.status;
    con.query('update  matchs SET match_status = ? where match_id=?',[status , matchid], function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });

}