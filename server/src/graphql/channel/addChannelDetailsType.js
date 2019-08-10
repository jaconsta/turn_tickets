const {
  GraphQLInputObjectType,
  GraphQLString,
} = require('graphql')
const { ObjectId } = require('mongoose').Types

ObjectId.prototype.valueOf = function () {
  return this.toString();
}

const addChannelDetailsSchema = {
  channelCode: { type: GraphQLString },
  signInSecret: { type: GraphQLString },
}

const addChannelDetailsType = new GraphQLInputObjectType({
  name: 'AddChannelDetails',
  fields: addChannelDetailsSchema,
})

module.exports = addChannelDetailsType
