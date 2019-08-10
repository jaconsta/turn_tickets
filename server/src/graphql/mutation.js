const { GraphQLObjectType } = require('graphql')

const addChannelSubscription = require('./channel/addChannelSubscriptionMutation')
const addChannelDetails = require('./channel/addChannelDetailsMutation')
const channelNextTurn = require('./channel/getChannelNextTurnMutation')

const mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addChannelSubscription,
    addChannelDetails,
    channelNextTurn,
  }
})

module.exports = mutations
