const ToDo = require('../models/toDo.model');

async function getToDos(userId) {
  try {
    const foundToDos = await ToDo.find({ user: userId });

    return foundToDos;
  } catch (error) {
    return new Error('Can not retrieve user toDos');
  }
}

module.exports = {
  getToDos
};
