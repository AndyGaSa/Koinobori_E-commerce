const Task = require('../models/taskModel');

async function createTask({ body }, res) {
  try {
    const task = await Task.create(body);
    res.status(201);
    res.json(task);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAllTask(req, res) {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getTaskById({ params: { taskId } }, res) {
  try {
    const task = await Task.findById(taskId);
    res.json(task);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateTask({ params: { taskId }, body }, res) {
  try {
    const taskUpdated = await Task.findByIdAndUpdate(
      taskId,
      body,
      {
        new: true,
      },
    );
    res.json(taskUpdated);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteTask({ params: { taskId } }, res) {
  try {
    await Task.findByIdAndDelete(taskId);
    res.status(204);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
};
