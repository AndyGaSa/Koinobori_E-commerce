/* eslint-disable no-console */
const ToDos = require('../models/toDoModel');

const createTask = async ({ body }, res) => {
  try {
    const newTask = await ToDos.create(body);
    res.json(newTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
const getAll = async ({ params }, res) => {
  try {
    const allTask = await ToDos.find(params)
      .populate({ path: 'user', select: ['name', 'email'] });
    res.json(allTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
const getOneById = async ({ params }, res) => {
  try {
    const { userId } = params;
    const getOne = await ToDos.findOne({ user: { _id: userId } });
    res.json(getOne);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const deleteOneTask = async ({ params: { userId } }, res) => {
  try {
    await ToDos.findOneAndUpdate({ 'tasks._id': userId }, { $pop: { tasks: 1 } }, { new: true, useFindAndModify: false });

    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getNewTask = async ({ params, body }, res) => {
  try {
    const { userId } = params;
    const getNew = await ToDos.findOneAndUpdate(
      { user: { _id: userId } },
      { $addToSet: { tasks: body } },
      { new: true, useFindAndModify: false },
    );
    res.json(getNew);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  deleteOneTask,
  createTask,
  getAll,
  getNewTask,
  getOneById,
};
