const User = require('../models/userModel');

async function createOne({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAll({ query }, res) {
  try {
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function findOneUser(req, res, next) {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(404);
      res.send(new Error(`There is no user with id ${userId}`));
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function updateOneUser(req, res) {
  const dataToUpdate = req.body;
  const { userId } = req.params;

  try {
    const updatedBeer = await User.findByIdAndUpdate(
      userId,
      dataToUpdate,
      { new: true }
    );

    res.json(updatedBeer);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneUser(req, res) {
  const { userId } = req.params;

  try {
    await User.findByIdAndDelete(userId);

    res.status(204);
    res.json('The user was deleted');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne, getAll, findOneUser, updateOneUser, deleteOneUser
};
