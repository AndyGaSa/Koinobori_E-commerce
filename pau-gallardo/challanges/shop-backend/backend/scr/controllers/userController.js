const User = require('../models/userModel');

async function getUsers({ query }, res) {
  try {
    const foundUsers = await User.find(query);

    res.send(foundUsers);
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

async function postUser(req, res) {
  try {
    const newUser = await User.create(req.body);

    res.status(201);
    res.send(newUser);
  } catch (error) {
    res.send(500);
  }
}

module.exports = {
  getUsers,
  postUser,
};
