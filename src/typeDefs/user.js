import { gql } from 'apollo-server-express';

export default typeDefs = gql`
  type Query {
    hello: String!
    users: [User!]!
    getUserById(id: ID): User
  }

  type User {
    id: ID!
    name: String!
  }

  type Mutation {
    createUser(name: String!): User
    deleteUser(id: ID!): User
  }
`;
