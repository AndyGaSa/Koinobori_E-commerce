const Task = require('../models/taskModel');

async function getAll({ query }, res) {
  try {
    const tasks = await Task.find(query);
    res.json(tasks);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newTask = await Task.create(body);
    res.json(newTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getById({ params }, res) {
  const { taskId } = params;
  try {
    const foundTask = await Task.findById(taskId)
      .populate({
        path: 'friends',
        select: ['name']
      });
    res.json(foundTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById(req, res) {
  const { taskId } = req.params;
  const dataToUpdate = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      dataToUpdate,
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById(req, res) {
  const { taskId } = req.params;
  try {
    await Task.findByIdAndDelete(taskId);
    res.send('The Task was deleted');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll,
  getById,
  updateOneById,
  deleteOneById
};
