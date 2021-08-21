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
    const allTasks = await ToDo.find(params)
      .populate({ path: 'user', select: ['name', 'email'] });
    res.json(allTasks);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getOneById = async ({ params }, res) => {
  try {
    const { userId } = params;
    const user = await ToDo.findOne({ user: { _id: userId } });
    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const addNewTask = async ({ params, body }, res) => {
  try {
    const { userId } = params;
    const newTask = await ToDo.findOneAndUpdate(
      { user: { _id: userId } },
      { $addToSet: { tasks: body } },
      { new: true, useFindAndModify: false },
    );
    res.json(newTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  createTask,
  getAll,
  getOneById,
  addNewTask,
};
