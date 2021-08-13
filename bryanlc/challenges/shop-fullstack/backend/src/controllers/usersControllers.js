const User = require('../models/user');

async function getUsers({ query }, res) {
  const foundUsers = await User.find(query);

  return res.send(foundUsers);
}

async function postUser(req, res) {
  const newUser = await User.create(req.body);

  res.status(201);
  res.send(newUser);
}

async function getOneUser(req, res) {
  res.send('esto funciona');
}

async function putUser(req, res) {
  res.send('esto funciona');
}

async function deleteUser(req, res) {
  res.send('esto funciona');
}

module.exports = {
  getUsers,
  postUser,
  getOneUser,
  putUser,
  deleteUser
};
