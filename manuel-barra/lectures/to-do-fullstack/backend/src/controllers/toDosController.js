const ToDo = require('../models/toDoModel');

async function getToDos(req, res) {
  try {
    const foundTodos = await ToDo.find(req.query);
    res.json(foundTodos);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function postToDo(req, res) {
  try {
    const newTodo = await ToDo.create(req.body);

    res.status(201);
    res.json(newTodo);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function findOneToDo(req, res, next) {
  try {
    const { toDoId } = req.params;
    const toDo = await ToDo.findById(toDoId);

    if (toDo) {
      req.toDo = toDo;
      next();
    } else {
      res.status(404);
      res.send(new Error(`There is no toDo with id ${toDoId}`));
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function getOneToDo({ toDo }, res) {
  res.json(toDo);
}

async function deleteOneToDo(req, res) {
  try {
    const { toDoId } = req.params;

    await ToDo.findOneAndDelete(toDoId);

    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function putOneToDo(req, res) {
  try {
    const { toDoId } = req.params;

    const updatedToDo = await ToDo.findByIdAndUpdate(
      toDoId,
      req.body,
      { new: true }
    );

    res.send(updatedToDo);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  findOneToDo,
  getToDos,
  postToDo,
  getOneToDo,
  deleteOneToDo,
  putOneToDo
};
