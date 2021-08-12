const User = require('../models/userModel');

async function createUser(req, res) {
  const newUser = await User.create(req.body);
  return res.send(newUser);
}

async function getAll({ query }, res) {
  try {
    const newUser = await User.find(query.body);
    res.json(newUser);
  } catch (error) {
    res.status(404);
    res.send(new Error('There is no users'));
  }
}

async function getOneById({ query }, res) {
  const { _id } = query;
  const foundUser = await User.findById(_id);
  return res.json(foundUser);
}
async function deleteOneById({ params }, res) {
  const { _id } = params;
  await User.findByIdAndDelete(_id);
  return res.send('The user has been deleted');
}

module.exports = {
  getAll,
  createUser,
  getOneById,
  deleteOneById

};
