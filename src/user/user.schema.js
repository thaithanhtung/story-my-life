import {
  addMockFunctionsToSchema,
  gql,
  makeExecutableSchema,
} from 'apollo-server-express';
import { userType, userQuery } from './schema';

const userSchema = makeExecutableSchema({
  typeDefs: [userType, userQuery],
});
addMockFunctionsToSchema({ schema: userSchema });

export { userSchema };
