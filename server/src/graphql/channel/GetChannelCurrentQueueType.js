const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql')
const { ObjectId } = require('mongoose').Types

ObjectId.prototype.valueOf = function () {
  return this.toString();
}

const channelSubscriptionSchema = {
  channelId: { type: GraphQLString },
  currentTurn: { type: GraphQLInt },
}

const GetChannelCurrentQueueType = new GraphQLObjectType({
  name: 'ChannelCurrentQueue',
  fields: channelSubscriptionSchema,
})

module.exports = GetChannelCurrentQueueType
