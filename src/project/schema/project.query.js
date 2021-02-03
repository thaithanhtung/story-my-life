import { gql } from 'apollo-server-express';

const projectQuery = gql`
  type Query {
    hello: String!

    getProjects: [Project!]
    getProjectById(id: ID!): ProjectData
  }

  input StepInput {
    name: String
    image: String
    category: String
    start_date: String
    end_date: String
    color: String
    icon: String
    text: String
  }

  type StepOutput {
    id: String
    name: String
    image: String
    category: String
    start_date: String
    end_date: String
    color: String
    icon: String
    text: String
  }

  type ProjectData {
    id: String
    name: String
    image: String
    create_date: String
    update_date: String
    start_date: String
    end_date: String
    level_count: Int
    steps: [StepOutput]
  }

  type Mutation {
    createProject(name: String!, steps: [StepInput]): ProjectData

    updateProject(
      id: ID!
      name: String
      image: String
      level_count: Int
    ): Project
    deleteProject(id: ID!): Project
  }
`;

export { projectQuery };
