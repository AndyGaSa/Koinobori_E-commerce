const User = require('../models/userModel');

async function postUser({ body }, res) {
  const newUser = await User.create(body);

  res.status(201);
  return res.send(newUser);
}

async function getUser({ query }, res) {
  const foundUser = await User.filter(query);
  return res.send(foundUser);
}

module.exports = {
  postUser,
  getUser,
};
