const User = require('../models/user.model');

async function getUsers({ query }, res) {
  try {
    const foundUsers = await User.find(query);

    return res.json(foundUsers);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function createUser({ body }, res) {
  try {
    const newUser = await User.create(body);

    res.status(201);
    return res.json(newUser);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function findOneUserById(req, res, next) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (user) {
      req.user = user;
      return next();
    }
    res.status(404);
    return res.send(new Error(`There is no beer with id ${userId}`));
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

function getOneUserById({ user }, res) {
  res.json(user);
}

async function updateUserById(req, res) {
  try {
    const dataToUpdate = req.body;
    const { userId } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      dataToUpdate,
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteUserById({ params: { userId } }, res) {
  try {
    await User.findByIdAndDelete(userId);
    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getUsers,
  createUser,
  findOneUserById,
  getOneUserById,
  updateUserById,
  deleteUserById
};
