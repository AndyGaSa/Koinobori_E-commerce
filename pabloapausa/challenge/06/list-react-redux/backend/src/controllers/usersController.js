const User = require('../models/userModel');

const handle = (error) => {
  this.status(500);
  this.send(error);
};

const postOne = async ({ body }, res) => { // DONE.
  try {
    const createdUser = await User.create(body);
    res.status(201);
    res.json(createdUser);
  } catch (error) { handle.call(res, error); }
};

const getOne = async ({ params: { userId } }, res) => {
  try {
    const user = await User.findById(userId)
      .populate('tasks');
    res.json(user);
  } catch (error) { handle.call(res.error); }
};

const putOne = async ({ params: { userId }, body }, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { user: userId }, { tasks: body }, { new: true },
    ).populate('tasks');
    res.json(updatedUser);
  } catch (error) { handle.call(res, error); }
};

module.exports = { postOne, getOne, putOne };
