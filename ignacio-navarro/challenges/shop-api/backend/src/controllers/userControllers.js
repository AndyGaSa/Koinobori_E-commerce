const User = require('../models/userModel');

async function postUser(req, res) {
  const newUser = await User.create(req.body);
  return res.send(newUser);
}

module.exports = {
  postUser,
};
