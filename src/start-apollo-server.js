const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { resolvers, typeDefs } = require('./modules');
const logger = require('./logger');
const CONFIG = require('./config/config');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const INTROSPECTION_ALLOWED_ENVIRONMENTS = ['boilerplate', 'localhost', 'dev', 'development', 'staging'];

async function startApolloServer(app) {
  try {
    const server = new ApolloServer({
      schema,
      playground: INTROSPECTION_ALLOWED_ENVIRONMENTS.includes(CONFIG.ENV),
    });

    await server.start();

    app.use('/graphql', expressMiddleware(server, {
      context: async (ctx) => ({
        ...ctx,
        req: ctx.req,
        res: ctx.res,
      }),
    }));
  } catch (error) {
    logger.error(`ERROR STARTING APOLLO SERVER >> ${error}`);
    throw error;
  }
}

module.exports = startApolloServer;
