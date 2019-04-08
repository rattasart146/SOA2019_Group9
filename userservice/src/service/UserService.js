const mockUser = require('../../data/mockUser')
const _ = require('underscore')

exports.getUserByUserId = (req, res) => {
    var filterUser = _.where(mockUser, {userid: parseInt(req.params.userid)})

    if(filterUser == "") {
        return res.sendStatus(404)
    } else {
        var docs = []
        
        for(var count in filterUser) {
            docs.push({userid: filterUser[count].userid,
                username: filterUser[count].username,
                firstname: filterUser[count].firstname,
                lastname: filterUser[count].lastname,
            })
        }
        return res.status(200).json(docs)
    }
}

exports.getAllUser = (req, res) => {
    if (mockUser == "") {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(mockUser);
    }
}

exports.postNewUser = (req, res) => {
    var docs = req.body
    mockUser.push(docs)
    return res.status(201).send({isCreateNewUser:true})
}