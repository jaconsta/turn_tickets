const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql')
const { ObjectId } = require('mongoose').Types

ObjectId.prototype.valueOf = function () {
  return this.toString();
}

const channelSubscriptionSchema = {
  _id: { type: new GraphQLNonNull(GraphQLID) },
  channelId: { type: GraphQLString },
  name: { type: GraphQLString },
  email: { type: GraphQLString },
  details: { type: GraphQLString },
  queueTurn: { type: GraphQLInt },
}

const ChannelSubscriptionType = new GraphQLObjectType({
  name: 'ChannelSubscription',
  fields: channelSubscriptionSchema,
})

module.exports = ChannelSubscriptionType
