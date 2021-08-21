const ToDo = require('../models/toDo.model');

async function getToDos(userId) {
  const foundToDos = await ToDo.find({ user: userId });

  return foundToDos;
}

async function createToDo(newToDo) {
  const newerToDo = await ToDo.create(newToDo);
  console.log(newerToDo);
}

module.exports = {
  getToDos,
  createToDo
};
