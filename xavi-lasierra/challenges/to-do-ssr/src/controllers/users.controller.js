const User = require('../models/user.model');

async function userCheck({ name, picture, email }) {
  try {
    let foundUser = await User.findOneAndUpdate(
      { email },
      { name, picture },
      {
        new: true,
        useFindAndModify: false
      }
    );

    if (!foundUser) {
      foundUser = await User.create({ name, picture, email });
    }

    return foundUser;
  } catch (error) {
    return new Error('Can not retrieve user data');
  }
}

module.exports = {
  userCheck
};
