const debug = require('debug')('tasks:controller');
const Task = require('../models/tasksModel');

const getTasks = async ({ query }, res) => {
  const allTasks = await Task.find(query);
  res.send(allTasks);
};

const postTask = async (req, res) => {
  debug(req.body);
  const newTask = await Task.create(req.body);
  res.send(newTask);
};

const deleteById = async ({ params: { taskId } }, res) => {
  const deletedTask = await Task.findByIdAndDelete(+taskId);
  res.send(deletedTask);
};

const putById = async (req, res) => {
  const { taskId } = req.params;
  const { body } = req;
  debug(typeof taskId);
  debug(body);
  const updatedTask = await Task.findByIdAndUpdate(taskId, body, { new: true });
  debug(updatedTask);
  res.send(updatedTask);
};

module.exports = {
  getTasks,
  postTask,
  deleteById,
  putById
};
