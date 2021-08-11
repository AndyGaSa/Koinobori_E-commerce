const Task = require('../models/taskModel');

async function getTasks({ query }, res) {
  const foundTask = await Task.find(query);

  return res.send(foundTask);
}
async function postTask(req, res) {
  const newTask = await Task.create(req.body);

  res.status(201);
  return res.send(newTask);
}
async function putOneTask(req, res) {
  const dataToUpdate = req.body;
  const { TaskId } = req.params;

  const updatedTask = await Task.findByIdAndUpdate(
    TaskId,
    dataToUpdate,
    { new: true },
  );

  return res.send(updatedTask);
}
async function deleteTask(req, res) {
  const { TaskId } = req.params;
  const borrar = await Task.findByIdAndDelete(TaskId);

  res.status(204);
  return res.send(borrar);
}

module.exports = {
  getTasks,
  deleteTask,
  postTask,
  putOneTask,
};
