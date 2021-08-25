const Task = require('../models/taskModel');

// const todoList = require('../mock/todoList');
async function getIndex(req, res) {
  try {
    const todoList = await Task.find();
    res.render('index', { todoList });
    res.status(202);
  } catch (error) {
    res.status(404);
    res.render(error);
  }
}

function get404(req, res) {
  res.render('404');
}

module.exports = {
  getIndex,
  get404,
};
