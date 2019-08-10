const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql')
const { ObjectId } = require('mongoose').Types

ObjectId.prototype.valueOf = function () {
  return this.toString();
}

const addChannelSubscriptionSchema = {
  channelId: { type: new GraphQLNonNull(GraphQLString) },
  name: { type: GraphQLString },
  email: { type: GraphQLString },
  details: { type: GraphQLString },
}

const addChannelSubscriptionType = new GraphQLInputObjectType({
  name: 'AddChannelSubscription',
  fields: addChannelSubscriptionSchema,
})

module.exports = addChannelSubscriptionType
