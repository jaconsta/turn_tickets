const ChannelSubscriptionType = require('./ChannelSubscriptionType')
const AddChannelSubscriptionType = require('./addChannelSubscriptionType')
const ChannelSubscriptionsModel = require('../../models/ChannelSubscriptions')
const ChannelDetailsModel = require('../../models/ChannelDetails')

const resolveAddChannelSubscriptions = async (root, params, options) => {
  const { channel } = params

  const { channelId } = channel
  const channelDetails = await ChannelDetailsModel.findOne( { channelCode: channelId })
  if (!channelDetails) throw Error('Channel doesn`t exist.') // _.isNil

  // Find the latest turn and assign next
  const [{ queueTurn = 0 } = {}] = await ChannelSubscriptionsModel
    .find({channelId: channelDetails._id})
    .sort({queueTurn: -1})
    .limit(1)

  const newChannel = new ChannelSubscriptionsModel({
    ...channel,
    channelId: channelDetails._id,
    queueTurn: queueTurn + 1
  })
  await newChannel.save()
  return newChannel
}

const addChannelSubscriptionMutation = {
  type: ChannelSubscriptionType,
  args: {
    channel: { type: AddChannelSubscriptionType }
  },
  resolve: resolveAddChannelSubscriptions,
}

module.exports = addChannelSubscriptionMutation
