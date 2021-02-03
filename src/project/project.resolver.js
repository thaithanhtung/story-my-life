import { AuthenticationError } from 'apollo-server-express';
import { projectController } from './project.controller';

const projectResolver = {
  Query: {
    getProjects() {
      console.log('getProjects');
      return projectController.getProjects();
    },

    getProjectById(_, { id }) {
      console.log('getProjectById', id);
      return projectController.getProjectById(id);
    },
  },

  Mutation: {
    createProject: async (_, user) => {

      console.log(`"user`, user);
      return projectController.createProject(user);
    },

    updateProject: async (root, user) => {
      console.log('updateProject', user);
      return projectController.updateProject(user);
    },

    deleteProject: async (root, { id }) => {
      console.log('deleteProject', id);
      return projectController.deleteProject(id);
    },
  },
};

export { projectResolver };
