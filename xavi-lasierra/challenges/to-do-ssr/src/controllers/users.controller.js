const User = require('../models/user.model');

async function userCheck({ name, picture, email }) {
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
}

module.exports = {
  userCheck
};
