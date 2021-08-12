const User = require('../models/userModel');

async function getUser({ query }, res) {
  const newUser = await User.find(query);
  return res.send(newUser);
}
async function postUser(req, res) {
  const newUser = await User.create(req.body);
  return res.send(newUser);
}
async function deleteUser({ params: { userId } }, res) {
  const newUser = await User.findByIdAndDelete(userId);
  return res.send(newUser);
}
async function getUserById({ params: { userId } }, res) {
  const foundUser = await User.findById(userId);
  return res.send(foundUser);
}
async function updateUser(req, res) {
  const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
  return res.json(updatedUser);
}

module.exports = {
  getUser,
  postUser,
  getUserById,
  updateUser,
  deleteUser,
};
