/* eslint-disable no-console */
const ToDo = require('../models/toDoModel');

const createTask = async ({ body }, res) => {
  try {
    const newTask = await ToDo.create(body);
    res.json(newTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
const getAll = async ({ params }, res) => {
  try {
    const allTask = await ToDo.find(params)
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
    const getOne = await ToDo.findOne({ user: { _id: userId } });
    res.json(getOne);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
module.exports = {
  createTask,
  getAll,
  getOneById,
};
