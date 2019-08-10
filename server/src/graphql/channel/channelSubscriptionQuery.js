const { GraphQLString } = require('graphql')

const ChannelSubscriptionType = require('./ChannelSubscriptionType')
const ChannelSubscriptionsModel = require('../../models/ChannelSubscriptions')

const resolve = (root, params, options) => {
  const { channelCode } = params
  return ChannelSubscriptionsModel.findOne({channelCode}).exec()
}

const ChannelSubscriptionQuery = {
  type: ChannelSubscriptionType,
  args: {
    channelCode: { type: GraphQLString },
  },
  resolve,
}

module.exports = ChannelSubscriptionQuery
