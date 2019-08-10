const { GraphQLSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')

const { NODE_ENV } = require('../configuration')

const query = require('./query')
const mutation = require('./mutation')

const schema = new GraphQLSchema({
  query,
  mutation,
})


const shouldEnableGraphiQl = () => {
  return NODE_ENV !== 'production'
}

const graphqlApi = graphqlHTTP({
  schema,
  // rootValue,
  graphiql: shouldEnableGraphiQl()
})

module.exports = graphqlApi
