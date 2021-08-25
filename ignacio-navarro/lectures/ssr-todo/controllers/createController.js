const Task = require('../models/taskModel');

// const todoList = require('../mock/todoList');
async function getCreate(req, res) {
  try {
    res.render('create');
    res.status(202);
  } catch (error) {
    res.status(404);
    res.render(error);
  }
}

async function createTask({ body }, res) {
  try {
    await Task.create(body);
    res.redirect('/');
  } catch (error) {
    res.status(404);
    res.render(error);
  }
}

module.exports = {
  getCreate,
  createTask,
};
