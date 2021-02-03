import { gql } from 'apollo-server-express';
// import { Step } from "../../step/schema/step.type"


const projectType = gql`
  type Project {
    id: ID
    name: String
    image: String
    create_date: String
    update_date: String
    start_date: String
    end_date: String
    level_count: Int
    # steps: [Step!]
  }
`;


export { projectType };
