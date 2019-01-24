let app = require('express')()
const server = require('http').Server(app)
const compression = require('compression')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const socket = require('./socket/connection')
const socketConnection = require('./socket')
const apiRoutes = require('./apiRoutes')
// Constants
const SERVER_PORT = 8080
const MONGO_URL = 'mongodb://localhost:27017/turn_tickets'

// Connect to DB
mongoose.connect(MONGO_URL, {useNewUrlParser: true});

// CORS
app.use(cors())
// compress responses
app.use(compression())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// Routing
app.use('/api', apiRoutes)

socket.connect(server)
socket.getIo().on('connection', socketConnection)

server.listen(SERVER_PORT)
console.log(`Server connected on port ${SERVER_PORT}`)
