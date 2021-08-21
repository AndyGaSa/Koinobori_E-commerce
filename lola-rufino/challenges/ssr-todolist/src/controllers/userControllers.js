const User = require('../models/userModel');

const getAllUsers = async ({ query }, res) => {
  try {
    const allUsers = await User.find(query);
    res.json(allUsers);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not get users');
  }
};

const createUser = async ({ body }, res) => {
  try {
    const userData = await User.create(body);
    res.json(userData);
    res.render('index', { user: userData });
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not create a user');
  }
};

const deleteUserById = async ({ params: { userId } }, res) => {
  try {
    const userData = await User.findByIdAndDelete(userId);
    res.json(userData);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not delete user');
  }
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const userData = await User.findById(userId)
      .populate(
        {
          path: 'tasks',
          select: ['task']
        }
      );
    res.json(userData);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not get a user');
  }
};

const updateUserById = async (req, res) => {
  const { userId } = req.params;
  const { body } = req;
  try {
    const userData = await User.findByIdAndUpdate(userId,
      { $addToSet: body },
      {
        new: true,
        useFindAndModify: false
      });
    res.json(userData);
    res.render('index', { user: userData });
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not update user');
  }
};

module.exports = {
  getUserById,
  createUser,
  deleteUserById,
  getAllUsers,
  updateUserById
};
