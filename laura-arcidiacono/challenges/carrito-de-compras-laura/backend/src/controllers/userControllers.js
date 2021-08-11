const User = require('../models/userModel');

async function postUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    return res.send(newUser);
  } catch (error) {
    res.status(404);
    return res.send(new Error('The user has not been created'));
  }
}

async function getUser({ query }, res) {
  try {
    const foundUser = await User.find(query);
    return res.send(foundUser);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There are no users'));
  }
}

async function findOneUser(req, res, next) {
  const { userId } = req.params;

  try {
    const user = await User.findById({ id: +userId });
    req.user = user;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no user with id ${userId}`));
  }
}

function getOneUser({ user }, res) {
  return res.send(user);
}

module.exports = {
  postUser,
  getUser,
  findOneUser,
  getOneUser
};
