const {
  GraphQLInputObjectType,
  GraphQLString,
} = require('graphql')
const { ObjectId } = require('mongoose').Types

ObjectId.prototype.valueOf = function () {
  return this.toString();
}

const channelNextTurnInputSchema = {
  channelCode: { type: GraphQLString },
}

const channelNextTurnInputType = new GraphQLInputObjectType({
  name: 'ChannelNextTurn',
  fields: channelNextTurnInputSchema,
})

module.exports = channelNextTurnInputType
