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
async function getOneById({ params: { ObjectId } }, res) {
  try {
    const user = await User.findById(ObjectId)
      .populate({
        path: 'friends',
        select: ['name'],
      })
      .populate({
        path: 'adversaries',
        select: ['name'],
      });

    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteOneById({ params: { ObjectId } }, res) {
  try {
    const deletedUser = await User.findByIdAndDelete(ObjectId);
    res.json(deletedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function updateOneById({ params: { ObjectId }, body: { value } }, res) {
  try {
    console.log(value);
    const updatedUser = await User.findByIdAndUpdate(ObjectId, value, { new: true });
    res.status(200);
    console.log(updatedUser.age);
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  deleteOneById,
  updateOneById,
};
