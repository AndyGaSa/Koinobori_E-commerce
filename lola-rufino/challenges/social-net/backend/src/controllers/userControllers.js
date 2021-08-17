const User = require('../models/userModel');

const getAllUsers = async ({ query }, res) => {
  try {
    const allUsers = User.find(query);
    res.send(allUsers);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not get users');
  }
};

const createUser = async ({ body }, res) => {
  try {
    const newUser = User.create(body);
    res.send(newUser);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not create a user');
  }
};

const updateUser = async (req, res) => {
  try {

  } catch (error) {
    res.status(500);
    res.send('There was an error');
  }
};

module.exports = {
  getAllUsers,
  createUser
};
