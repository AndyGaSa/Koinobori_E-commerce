const ToDo = require('../models/toDoModel');

async function getToDos({ query }, res) {
  const foundTodos = await ToDo.find(query);
  res.json(foundTodos);
}

async function postToDo(req, res) {
  const newTodo = await ToDo.create(req.body);

  res.json(newTodo);
}

async function getOneToDo(req, res) {
  const { toDoId } = req.params;
  const toDo = await ToDo.findById(toDoId);

  res.json(toDo);
}

module.exports = {
  getToDos,
  postToDo,
  getOneToDo
};
