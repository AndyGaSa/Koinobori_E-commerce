// 2.

const ToDo = require('../models/toDoModel');

async function getToDos({ query }, res) {
  const foundToDo = await ToDo.find(query);

  return res.send(foundToDo);
}

async function postToDo({ body }, res) {
  const newToDo = await ToDo.create(body);

  res.status(201);
  return res.send(newToDo);
}

module.exports = {
  getToDos,
  postToDo,
};
