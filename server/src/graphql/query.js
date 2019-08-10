const { GraphQLObjectType } = require('graphql')

const channelSubscription = require('./channel/channelSubscriptionQuery')
const channelCurrentTurn = require('./channel/getChannelCurrentTurnQuery')

const queries = new GraphQLObjectType({
  name: 'Query',
  fields: {
    channelSubscription,
    channelCurrentTurn
  }
})

module.exports = queries
