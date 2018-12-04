const socketIo = require('socket.io')

let io

const getIo = () => io

const connect = (app) => { io = socketIo(app) }

module.exports = {getIo, connect}
