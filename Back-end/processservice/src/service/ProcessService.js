const mockThismatch = require('../../data/mockThismatch')
const _ = require('underscore')

exports.getThisMatchDetail = (req, res) => {
     if (mockThismatch == "") {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(mockThismatch);
    }

}

exports.getThisMatchStatus = (req, res) => {
    var docs = []
        for(var count in mockThismatch) {
            docs.push({
                status: mockThismatch[count].status
            })
        }

}

exports.getOwnerUsername = (req, res) => {



}

exports.getTeamList = (req, res) => {

}