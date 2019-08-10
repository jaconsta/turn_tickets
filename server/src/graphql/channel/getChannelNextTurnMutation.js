const GetChannelNextTurnType = require('./GetChannelNextTurnType')
const AddChannelDetailsType = require('./addChannelDetailsType')
const ChannelDetailsModel = require('../../models/ChannelDetails')
const ChannelSubscriptionsModel = require('../../models/ChannelSubscriptions')

const resolveAddChannelSubscriptions = async (root, params, options) => {
  const { channel } = params

  const { channelCode } = channel
  // Validate there is another one in queue
  const currentQueue = await ChannelDetailsModel.findOne({channelCode})
  const [ maxQueueNumber ] = await ChannelSubscriptionsModel.find( { channelId: currentQueue._id })
    .sort({queueTurn: -1})
    .limit(1)

  if (currentQueue.currentTurn >= maxQueueNumber.queueTurn) return Error('No more people in queue')


  const queueRoom = await ChannelDetailsModel.findOneAndUpdate(
    {channelCode},
    {$inc: { 'currentTurn': 1 }},
    {new: true}  // Returns the updated document
  )

  const personDetails = await ChannelSubscriptionsModel.findOne({
    channelId: queueRoom._id,
    queueTurn: queueRoom.currentTurn
  })

  return { ...queueRoom._doc, personDetails}
}

const getChannelNextTurnMutation = {
  type: GetChannelNextTurnType,
  args: {
    channel: { type: AddChannelDetailsType }
  },
  resolve: resolveAddChannelSubscriptions,
}

module.exports = getChannelNextTurnMutation
