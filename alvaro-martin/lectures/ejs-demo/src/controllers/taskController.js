const Task = require('../models/taskModel');

async function createOneTask({ body }, res) {
  try {
    const newTask = await Task.create(body);
    res.json(newTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getAllTasks({ query }, res) {
  try {
    const tasks = await Task.find(query);
    res.json(tasks);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function findOneTaskById({ params: { taskId } }, res) {
  try {
    const Id = await Task.findById(taskId);
    res.json(Id);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteOneTaskById({ params: { taskId } }, res) {
  try {
    await Task.findByIdAndDelete(taskId);
    res.json('task has been deleted');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOneTask,
  getAllTasks,
  findOneTaskById,
  deleteOneTaskById,
};
