import { userResolver } from './user';
import { projectResolver } from './project'
// import { stepResolver } from './step'


const resolvers = [userResolver, projectResolver];
export default resolvers;
