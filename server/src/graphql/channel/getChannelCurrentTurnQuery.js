const { GraphQLString } = require('graphql')

const GetChannelCurrentQueueType = require('./GetChannelCurrentQueueType')
const ChannelDetailsModel = require('../../models/ChannelDetails')

const resolve = (root, params, options) => {
  const { channelCode } = params
  return ChannelDetailsModel.findOne({channelCode}).exec()
}

const ChannelSubscriptionQuery = {
  type: GetChannelCurrentQueueType,
  args: {
    channelCode: { type: GraphQLString },
  },
  resolve,
}

module.exports = ChannelSubscriptionQuery
