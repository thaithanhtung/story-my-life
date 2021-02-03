import { gql } from 'apollo-server-express';

const stepType = gql`
  type Step {
    id: ID!
    name: String
    image: String
    create_date: String
    update_date: String
    category: String
    start_date: String
    end_date: String
    color: String
    icon: String
    text: String
    project_id: String
  }
`;

export { stepType };
