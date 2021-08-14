const User = require('../models/userModel');

async function getUserById({ params: { userid } }, res) {
  try {
    const users = await User.findById(userid);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

const setNewUser = async ({ body }, res) => {
  const newUser = await User.create(body);
  return res.send(newUser);
};

const removeUserById = async ({ params: { userid } }, res) => {
  const delUser = await User.findByIdAndDelete(userid);
  res.send(delUser);
};
module.exports = {
  setNewUser,
  getUserById,
  removeUserById,
};
