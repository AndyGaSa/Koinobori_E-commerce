const Task = require('../models/taskModel');

const getAllTasks = async ({ query }, res) => {
  try {
    const allTasks = await Task.find(query);
    res.json(allTasks);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not get tasks');
  }
};

const createTask = async ({ body }, res) => {
  try {
    const taskData = await Task.create(body);
    taskData.save();
    res.json(taskData);
    res.redirect('/user/6120f39b024cfa5d4c36004f');
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not create a task');
  }
};

const deleteTaskById = async ({ params: { taskId } }, res) => {
  try {
    const taskData = await Task.findByIdAndDelete(taskId);
    taskData.save();
    res.json(taskData);
    res.redirect('/user/6120f39b024cfa5d4c36004f');
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not delete task');
  }
};

module.exports = {
  createTask,
  deleteTaskById,
  getAllTasks
};
