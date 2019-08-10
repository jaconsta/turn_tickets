const mongoose = require('mongoose')
const { Schema: { Types } } = mongoose

const channelDetailsSchema = new mongoose.Schema({
  channelId: Types.ObjectId,
  queueTurn: { type: Number, default: 0 },
  name: String,
  email: String,
  details: String,
})

module.exports = mongoose.model('ChannelSubscriptions', channelDetailsSchema)
