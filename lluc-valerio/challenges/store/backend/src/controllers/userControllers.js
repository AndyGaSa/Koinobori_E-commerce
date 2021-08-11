const debug = require('debug')('storeApi:userController');
const User = require('../models/userModel');

async function getUsers(req, res) {
  try {
    let allUsers = 0;
    if (!req.query) {
      debug('getUsers');
      allUsers = await User.find();
    } else {
      debug('getUserByName');
      allUsers = await User.find(req.query);
    }
    res.status(200);
    return res.json(allUsers);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while getting data: ${error}`);
  }
}

async function setUser(req, res) {
  try {
    debug('setUser');
    const newUser = await User.create(req.body);
    res.status(201);
    return res.json(newUser);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while creating an element: ${error}`);
  }
}

async function updateUser(req, res) {
  try {
    debug('updateUser');
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    res.status(200);
    return res.json(updatedUser);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while updating an element: ${error}`);
  }
}

async function deleteUser(req, res) {
  try {
    debug('deleteUser');
    const deletedUser = await User.findByIdAndRemove(req.params.userId);
    res.status(200);
    return res.json(deletedUser);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while deleting an element: ${error}`);
  }
}

async function getUserById(req, res) {
  try {
    debug('getUserById');
    const userById = await User.findById(req.params.userId);
    res.status(200);
    return res.json(userById);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while getting an element: ${error}`);
  }
}

module.exports = {
  getUsers,
  setUser,
  updateUser,
  deleteUser,
  getUserById
};
