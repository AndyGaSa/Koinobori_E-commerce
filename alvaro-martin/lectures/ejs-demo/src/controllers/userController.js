const User = require('../models/UserModels');

async function createOneUser({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getAllUsers({ query }, res) {
  try {
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function findOneUserById({ params: { userId } }, res) {
  try {
    const Id = await User.findById(userId)
      .populate('tasks');

    res.json(Id);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOneUser,
  getAllUsers,
  findOneUserById,
};
