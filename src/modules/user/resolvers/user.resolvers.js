const createUser = require('./mutations/create-user');
const users = require('./queries/user');

const resolvers = {
  Query: {
    users,
  },
  Mutation: {
    createUser,
  },
};

module.exports = resolvers;
