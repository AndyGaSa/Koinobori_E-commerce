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
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not create a user');
  }
};

const getOneUserById = async ({ params: { userId } }, res) => {
  try {
    const userFound = await User.findById(userId)
      .populate(
        {
          path: 'friends',
          select: ['name', 'age']
        }
      );
    res.json(userFound);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not get a user');
  }
};

const updateUserById = async (req, res) => {
  const { body } = req;
  const { userId } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId,
      { $addToSet: body },
      {
        new: true,
        useFindAndModify: false
      })
      .populate({ path: 'friends', select: ['name'] })
      .populate({ path: 'adversaries', select: ['name'] });
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not update user');
  }
};

const deleteUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.status(204);
    res.json();
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not delete user');
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getOneUserById,
  updateUserById,
  deleteUserById
};
