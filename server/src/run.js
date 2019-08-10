let app = require('express')()
const server = require('http').Server(app)
const compression = require('compression')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const configuration = require('./configuration')
const graphqlApi = require('./graphql')
// const socket = require('./socket/connection')
// const socketConnection = require('./socket')
// const apiRoutes = require('./apiRoutes')
//
// // Connect to DB
mongoose.set('useFindAndModify', false);  // Use native function
mongoose.connect(configuration.MONGO_URL, {useNewUrlParser: true});

// CORS
app.use(cors())
// compress responses
app.use(compression())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// Routing
app.use('/graphql', graphqlApi)
// app.use('/api', apiRoutes)
//
// socket.connect(server)
// socket.getIo().on('connection', socketConnection)

server.listen(configuration.PORT)
console.log(`Server connected on port ${configuration.PORT}`)
