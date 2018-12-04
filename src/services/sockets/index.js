import socketIo from 'socket.io-client'

const SOCKET_SERVER = 'http://localhost:8080'

const socket = socketIo(SOCKET_SERVER)

export const subscribeToCounter = (cb) => {
    socket.on('current_count', message => cb(message))
}

export const subscribeToMyTurn = (cb) => {
  socket.on('your_turn', () => cb())
}

export const myAssignedTurn = (cb) => {
  socket.on('turn_booked', (turnNumber) => cb(turnNumber))
}

export const separateTurn = (cb) => {
  socket.emit('room_turn')
}

export const incrementCounter = (cb) => {
  socket.emit('increment_conter')
}
