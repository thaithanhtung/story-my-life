import {
  addMockFunctionsToSchema,
  gql,
  makeExecutableSchema,
} from 'apollo-server-express';
import { stepType, stepQuery } from './schema';

const StepSchema = makeExecutableSchema({
  typeDefs: [stepType, stepQuery],
});
addMockFunctionsToSchema({ schema: StepSchema });

export { StepSchema };
