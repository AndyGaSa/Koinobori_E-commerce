const debug = require('debug')('taskController');
const Task = require('../models/taskModel');

async function getTasks(req, res) {
  console.log('taskController', req);
  try {
    const tasks = await Task.find();
    res.render(tasks);
  } catch (error) {
    res.status(404);
    res.render(error);
  }
}

async function postTasks({ body }, res) {
  debug(body);
  try {
    const newTask = await Task.post(body);
    res.render(newTask);
  } catch (error) {
    res.status(404);
    res.render(error);
  }
}

module.exports = {
  getTasks,
  postTasks,
};
