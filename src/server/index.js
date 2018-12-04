const http = require('http')
const socket = require('./socket/connection')
const socketConnection = require('./socket')
// Constants
const SERVER_PORT = 8080

const httpHandler = (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end({'status': 'App running.'})
}

const app = http.createServer(httpHandler)

socket.connect(app)
socket.getIo().on('connection', socketConnection)

app.listen(SERVER_PORT)
console.log(`Server connected on port ${SERVER_PORT}`)
