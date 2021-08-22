const User = require('../models/user.model');

async function userCheck({ name, picture, email }, res) {
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
    res.status(500);
    return res.send(error);
  }
}

module.exports = {
  userCheck
};
