import {
  addMockFunctionsToSchema,
  gql,
  makeExecutableSchema,
} from 'apollo-server-express';
import { projectType, projectQuery } from './schema';
// import { stepType } from '../step/schema'


const projectSchema = makeExecutableSchema({
  typeDefs: [projectType, projectQuery],
});
addMockFunctionsToSchema({ schema: projectSchema });

export { projectSchema };