import { gql } from 'apollo-server-express';

const userQuery = gql`
  type Query {
    hello: String!
    users: [User]
    getUsers: [User!]
    getUserById(id: ID!): User

    # validateUser(idToken: String): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    deleteUser(id: ID!): User
    updateUser(id: ID! , name: String, old: String, sex: String, location: String, email: String): User
  }
`;
export { userQuery };
