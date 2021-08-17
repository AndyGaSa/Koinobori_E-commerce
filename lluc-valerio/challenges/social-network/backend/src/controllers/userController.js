const debug = require('debug')('social-net:userController');
const User = require('../models/userModel');

async function getAll({ query }, res) {
  debug('getAll');
  try {
    const users = await User.find(query);
    res.status(200);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  debug('createOne');
  try {
    const newUser = await User.create(body);
    res.status(201);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
module.exports = {
  getAll,
  createOne
};
