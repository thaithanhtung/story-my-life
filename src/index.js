import { ApolloServer, gql } from 'apollo-server-express';
import { mergeSchemas } from 'graphql-tools';
import express from 'express';
import mongoose from 'mongoose';
import { userController } from './user/user.controller';
import schemas from './schema';
import resolvers from './resolvers';

const startServer = async () => {
  const app = express();

  const schema = mergeSchemas({
    schemas,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    // context: async ({ req }) => {
    //   if (!req || !req.headers) {
    //     return;
    //   }

    //   const token = req.headers.authorization || '';
    //   const checkToken = await userController.findOrCreateUser(token);
    //   if (!checkToken.hasOwnProperty('authorized')) {
    //     return { user: checkToken, authorized: true };
    //   }
    //   return checkToken;
    // },
    // tracing: true,
  });

  server.applyMiddleware({ app });

  await mongoose.connect('mongodb://localhost:27017/backend_api1', {
    useNewUrlParser: true,
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};;

startServer();
