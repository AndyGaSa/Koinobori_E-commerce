const User = require('../models/userModel');
const Task = require('../models/taskModel');

async function getLogin(req, res) {
  try {
    res.render('login');
    res.status(202);
  } catch (error) {
    res.status(404);
    res.send('Page not found');
  }
}
async function checkUser({ body: { username } }, res) {
  try {
    const foundUser = await User.find({ username });
    if (foundUser.length > 0) {
      const todoList = await Task.find();
      res.render('index', { foundUser, todoList });
      res.status(202);
    }
  } catch (error) {
    res.status(404);
    res.send('Page not found');
  }
}

module.exports = {
  getLogin,
  checkUser,
};
