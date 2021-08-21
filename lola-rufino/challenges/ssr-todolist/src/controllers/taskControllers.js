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
    res.json(taskData);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not create a task');
  }
};

const deleteTaskById = async ({ params: { taskId } }, res) => {
  try {
    const taskData = await Task.findByIdAndDelete(taskId);
    res.json(taskData);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not delete task');
  }
};

const updateTaskById = async (req, res) => {
  const { taskId } = req.params;
  const { body } = req;
  try {
    const taskData = await Task.findByIdAndUpdate(taskId, body,
      {
        new: true,
        useFindAndModify: false
      });
    res.json(taskData);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not update user');
  }
};

module.exports = {
  createTask,
  deleteTaskById,
  getAllTasks,
  updateTaskById
};
