const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

// parse application/json
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json())

const userController = require('./src/controller/UserController')

app.use("/user", userController)

app.listen(port, () => console.log(`Service running on port ${port}`))

module.exports = app