const User = require('../models/userModel');

async function createUser(req, res) {
  const newUser = await User.create(req.body);
  return res.send(newUser);
}

module.exports = {
  createUser,
};
