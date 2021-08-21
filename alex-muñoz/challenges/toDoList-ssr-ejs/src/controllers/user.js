const User = require('../models/user');

async function createOne({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOne({ params: { userId } }, res) {
  try {
    const currentUser = await User.findById(userId)
      .populate({
        path: 'taskList',
        select: 'name'
      });
    res.render('profile', { user: currentUser });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getOne
};
