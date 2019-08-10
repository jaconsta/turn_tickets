const ChannelDetailsType = require('./ChannelDetailsType')
const AddChannelDetailsType = require('./addChannelDetailsType')
const ChannelDetailsModel = require('../../models/ChannelDetails')

const resolveAddChannelSubscriptions = async (root, params, options) => {
  const { channel } = params

  const recoverySecret = channel.signInSecret || Math.random().toString(36).substring(2, 8)

  const newChannel = new ChannelDetailsModel(channel)
  await newChannel.save(channel)
  newChannel.signInSecret = recoverySecret  // Needs to be unhashed to show the recovery option on users screen
  return newChannel
}

const addChannelDetailsMutation = {
  type: ChannelDetailsType,
  args: {
    channel: { type: AddChannelDetailsType }
  },
  resolve: resolveAddChannelSubscriptions,
}

module.exports = addChannelDetailsMutation
