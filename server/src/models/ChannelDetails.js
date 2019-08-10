const crypto = require('crypto')

const mongoose = require('mongoose')

const getRandomString = (length=8) => Math.random().toString(36).substring(2, length)

const channelDetailsSchema = new mongoose.Schema({
  channelCode: { type: String, default: getRandomString },
  signInSecret: { type: String, default: getRandomString },
  currentTurn: { type: Number, default: 0 },
})

channelDetailsSchema.pre('save', function () {
  this.signInSecret = crypto.createHash('md5').update(this.signInSecret).digest('base64')
});

module.exports = mongoose.model('ChannelDetails', channelDetailsSchema)
