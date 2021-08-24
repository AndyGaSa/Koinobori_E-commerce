const User = require('../models/userModel');

async function createUser({ body }, res) {
  try {
    const newUser = await User.create(body);
    return res.json(newUser);
  } catch (error) {
    res.status(500);
    return res.send(new Error('Error'));
  }
}
async function deleteUser({ params: { _id } }, res) {
  try {
    await User.findByIdAndDelete(_id);
    return res.send('The user has been deleted');
  } catch (error) {
    res.status(404);
    return res.send('User not found');
  }
}

module.exports = {
  createUser, deleteUser
};
