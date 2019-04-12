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


exports.getMatchByMatchStatus = () => {
    var filterMatch = _.where(mockMatch, {status: (req.params.status)})
      if (filterMatch[0] == null) {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(filterMatch.mockMatch);
    }

}




exports.getAllMatch = (req, res) => {
    if (mockMatch == "") {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(mockMatch);
    }
}

exports.postNewMatch = (req, res) => {
    var docs = req.body
    
    mockMatch.push(docs)
    return res.status(201).send({isCreateNewMatch:true})
}