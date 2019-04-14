const mockMatch = require('../../data/mockMatch')
const _ = require('underscore')

exports.getMatchByMatchId = (req, res) => {
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
}

exports.getMatchByMatchName = (req, res) => {
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
}



//รับ match มาเป็น category
exports.getMatchByMatchStatus = (req, res) => {
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
}


exports.getAllMatch = (req, res) => {
    if (mockMatch == "") {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(mockMatch)
    }
}

exports.postNewMatch = (req, res) => {
    var docs = req.bod
    
    mockMatch.push(docs)
    return res.status(201).send({isCreateNewMatch:true})
}