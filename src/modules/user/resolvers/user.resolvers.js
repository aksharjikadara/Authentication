const createUser = require('./mutations/create-user');
const users = require('./queries/user');
const login = require('./mutations/login');

const resolvers = {
  Query: {
    users,
  },
  Mutation: {
    createUser,
    login,
  },
};

module.exports = resolvers;
