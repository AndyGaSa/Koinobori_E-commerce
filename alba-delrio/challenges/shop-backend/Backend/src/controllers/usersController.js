const User = require('../models/userModel');

async function getUser({ query }, res) {
  try {
    const foundUser = await User.find(query);
    return res.send(foundUser);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There are no beers'));
  }
}

async function updateUser(req, res) {
  try {
    const newUser = await User.create(req.body);

    return res.send(newUser);
  } catch (error) {
    res.status(404);
    return res.send(new Error('The user has not been created'));
  }
}
async function findOneUser(req, res, next) {
  const { beerId } = req.params;

  try {
    const user = await User.findById({ id: +beerId });
    req.user = user;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no user with id ${beerId}`));
  }
}

async function deleteUser({ User }, res) {
  const { _id } = User;

  await User.findByIdAndDelete({ _id });
  return res.send(`The User ${User.name} has been deleted`);
}

module.exports = {
  getUser,
  updateUser,
  findOneUser,
  deleteUser

};
