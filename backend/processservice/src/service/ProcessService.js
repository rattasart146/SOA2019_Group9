const mockThismatch = require('../../data/mockThisgame')
const mockTeam = require('../../data/mockTeam')
const _ = require('underscore')
var teamcount = 1

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
     if (mockTeam == "") {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(mockTeam);
    }
}


// เพิ่มทีมเข้าไปในการแข่งขัน
exports.postNewTeamJoin = (req, res) => {
    var docs = req.body
         if (teamcount < 8) {
            mockTeam.push(docs)
            teamcount+=1
            return res.status(201).send({isNewTeamJoin:true})
        } else{
            return res.status(201).send({isNewTeamJoin:false})
        }
    var docs = ""
}