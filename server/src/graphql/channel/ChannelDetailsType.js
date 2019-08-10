const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} = require('graphql')
const { ObjectId } = require('mongoose').Types

ObjectId.prototype.valueOf = function () {
  return this.toString();
}

const channelDetailsSchema = {
  _id: { type: new GraphQLNonNull(GraphQLID) },
  channelCode: { type: GraphQLString },
  signInSecret: { type: GraphQLString },
}

const ChannelDetailsType = new GraphQLObjectType({
  name: 'ChannelDetails',
  fields: channelDetailsSchema,
})

module.exports = ChannelDetailsType
