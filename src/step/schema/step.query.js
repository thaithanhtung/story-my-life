import { gql } from 'apollo-server-express';

const StepQuery = gql`
  type Query {

    getStepById:(id: ID!) Step

    # getProjects: [Project!]
    # getProjectById(id: ID!): Project
  }

#   type Mutation {
#     createProject(name: String!): Project

#     updateProject(
#       id: ID!
#       name: String
#       image: String
#       level_count: Int
#     ): Project
#     deleteProject(id: ID!): Project
#   }
`;
export { StepQuery };
