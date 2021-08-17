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

async function getOne({ params: { userId } }, res) {
  try {
    debug('getOne');
    const userFound = await User.findById(userId);
    res.status(200);
    res.json(userFound);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOne({ params: { userId } }, res) {
  try {
    debug('deleteOne');
    const userDeleted = await User.findByIdAndDelete(userId);
    res.status(202);
    res.json(userDeleted);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOne({ params: { userId }, body }, res) {
  try {
    debug('updateOne');
    const userUpdated = await User.findByIdAndUpdate(userId, body, { new: true });
    res.status(202);
    res.json(userUpdated);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOne,
  deleteOne,
  updateOne
};
