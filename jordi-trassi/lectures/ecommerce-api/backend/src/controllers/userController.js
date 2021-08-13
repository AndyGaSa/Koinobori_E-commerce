const User = require('../models/userModel');

async function getAll({ query }, res) {
  try {
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const createdUser = await User.create(body);
    res.json(createdUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById({ query }, res) {
  try {
    const { userId } = query;
    const findUser = await User.findById(userId);
    res.json(findUser);
    res.send(204);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById(req, res) {
  const { body } = req;
  const { params: { user } } = req;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      user,
      body,
      { new: true },
    );
    return res.json(updatedUser);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function deleteOneById({ params: { userId } }, res) {
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
  getAll,
  createOne,
  getOneById,
  updateOneById,
  deleteOneById,
};
