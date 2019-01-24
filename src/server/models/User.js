const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, default: 'agent' }
})

module.exports = mongoose.model('User', userSchema)
