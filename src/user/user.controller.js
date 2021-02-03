import { User } from './user.model';

const userController = {
  users: (root, args) => User.find({}),

  findOrCreateUser: async (token) => {
    if (!token) {
      return { authorized: false };
    }
    const googleUser = await userController.verifyGoogleToken(token);
    const user = await userController.checkIfUserExists(googleUser.email);
    if (user) {
      return user;
    } else {
      return userController.saveUser(googleUser);
    }
  },

  checkIfUserExists: (email) => {
    return User.findOne({ email }).exec();
  },

  saveUser: (gUser) => {
    const { email, name, picture, given_name, family_name, locale } = gUser;
    const user = { email, name, picture, given_name, family_name, locale };
    const newUser = new User(user);
    return newUser.save();
  },

  getUsers: async () => User.find(),

  getUserById: async (userId) => {
    const user = await User.findById(userId).exec();
    const { name, email, id, old, sex, location, avatar } = user;
    return { name, email, id, old, sex, location, avatar , create_date};
  },

  createUser: async ({ name, email, avatar, old, sex, location }) => {
    const newUser = await new User({ name, email, create_date: Date.now() });
    const user = await newUser.save();
    return user;
  },

  updateUser: async (user) => {
    const { name, email, id, old, sex, location, avatar } = user;
    console.log('user', user);
    const userUpdate = await User.findByIdAndUpdate(id, {
      name,
      email,
      old,
      sex,
      location,
      avatar,
    });
    
    console.log('user===>', userUpdate);
    return { name, email, id, old, sex, location, avatar };
  },

  deleteUser: async (id) => {
    const user = User.findById({ id }).remove().exec();
    return { id: user };
  },

  // verifyGoogleToken: async (token) => {
  // 	const  ticket  =  await  client . verifyIdToken , ( {
  // 		idToken: token,
  // 		audience: CLIENT_ID
  // 	} ) ;
  // 	return ticket.getPayload();
  // }
};

export { userController };
