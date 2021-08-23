const Task = require('../models/taskModel');

const handle = (error) => {
  this.status(500);
  this.send(error);
};

const postOne = async ({ body }, res) => {
  try {
    const createdTask = await Task.create(body)
      .populate({ path: 'userId', select: ['_id'] });
    res.status(201);
    res.json(createdTask);
  } catch (error) { handle.call(res, error); }
};

const getOne = async ({ params: { taskId } }, res) => {
  try {
    const task = await Task.findById(taskId);
    res.json(task);
  } catch (error) { handle.call(res, error); }
};

const putOne = async ({ params: { taskId } }, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(taskId);
    res.json(updatedTask);
  } catch (error) { handle.call(res, error); }
};

const deleteOne = async ({ params: { taskId } }, res) => {
  try {
    await Task.findByIdAndDelete(taskId);
    res.status(204);
    res.send();
  } catch (error) { handle.call(res, error); }
};

module.exports = {
  postOne,
  getOne,
  putOne,
  deleteOne,
};
