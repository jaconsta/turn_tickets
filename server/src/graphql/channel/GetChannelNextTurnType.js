const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql')
const { ObjectId } = require('mongoose').Types

const ChannelSubscriptionType = require('./ChannelSubscriptionType')

ObjectId.prototype.valueOf = function () {
  return this.toString();
}

const channelNextTurnSchema = {
  channelCode: { type: GraphQLString },
  currentTurn: { type: GraphQLInt },
  personDetails: { type: ChannelSubscriptionType }
}

const GetChannelNextTurnType = new GraphQLObjectType({
  name: 'ChannelNextTurn',
  fields: channelNextTurnSchema,
})

module.exports = GetChannelNextTurnType
