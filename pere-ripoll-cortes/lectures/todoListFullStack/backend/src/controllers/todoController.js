const toDo = require('../models/todoModel');

const postTask = async (req, res) => {
  try {
    const newTask = await toDo.create(req.body);
    res.status(201);
    res.json(newTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getTasks = async ({ query }, res) => {
  try {
    const foundTasks = await toDo.find(query);
    res.status(201);
    res.json(foundTasks);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const putOneTask = async (req, res) => {
  const taskToUpdate = req.body;
  const { toDoId } = req.params;

  try {
    const updateTask = await toDo.findByIdAndUpdate(
      toDoId,
      taskToUpdate,
      { new: true },
    );

    res.json(updateTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const deleteOneTask = async (req, res) => {
  const { toDoId } = req.params;
  try {
    await toDo.findByIdAndDelete(toDoId);
    res.status(200);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const findOneTask = async (req, res, next) => {
  const { toDoId } = req.params;
  const todo = await toDo.findById(toDoId);
  try {
    req.todo = todo;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no todo task with id ${toDoId}`));
  }
};

const getOneTask = ({ todo }, res) => res.send(todo);

module.exports = {
  postTask,
  getTasks,
  putOneTask,
  deleteOneTask,
  findOneTask,
  getOneTask,
};
