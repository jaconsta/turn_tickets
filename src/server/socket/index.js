const io = require('./connection')
let TURN = []
let COUNTER = 0

const socketConnection = socket => {
  socket.emit('current_count', COUNTER)
  socket.on('increment_conter', incrementCounter(socket))
  socket.on('room_turn', roomTurn(socket))
}

const incrementCounter = (socket) => () => {
  if(COUNTER >= TURN.length) return

  io.getIo().to(TURN[COUNTER].id).emit('your_turn')
  COUNTER ++
  io.getIo().emit('current_count', COUNTER)
}

const roomTurn = (socket) => () => {
  TURN.push({id: socket.id})
  socket.emit('turn_booked', TURN.length)
}

module.exports = socketConnection
