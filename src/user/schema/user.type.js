import { gql } from 'apollo-server-express';

const userType = gql`
  type User {
    id: String
    email: String 
    name: String
    avatar: String
    old: String
    location: String
    sex: String
    create_date: String
  }
`;

export { userType };
