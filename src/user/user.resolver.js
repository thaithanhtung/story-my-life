import { AuthenticationError } from 'apollo-server-express';
import { userController } from './user.controller';
const userResolver = {
  Query: {
    hello: () => 'hi',
    users(root, args, context) {
      // if (!context.authorized) {
      //   console.error('User not authorized');
      //   throw new AuthenticationError('you must be logged in');
      // }

      return userController.users(root, args.user);
    },

    getUsers() {
      return userController.getUsers();
    },

    getUserById(_, { id }) {
      console.log('id', id);
      return userController.getUserById(id);
    },

    validateUser(root, args) {
      return userController.findOrCreateUser(args.idToken);
    },
  },

  Mutation: {
    createUser: async (_, user) => {
      return userController.createUser(user);
    },
    deleteUser: async (root, { id }) => {
      return userController.deleteUser(id);
    },

    updateUser: async (root, user) => {
      return userController.updateUser(user);
    }
  },
};

export { userResolver };
