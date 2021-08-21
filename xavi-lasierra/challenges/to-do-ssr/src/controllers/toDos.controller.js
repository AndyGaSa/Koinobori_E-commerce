const ToDo = require('../models/toDo.model');

async function getToDosDDBB(userId) {
  const foundToDos = await ToDo.find({ user: userId });

  return foundToDos;
}

async function createToDoDDBB(newToDo) {
  return ToDo.create(newToDo);
}

async function updateToDoDDBB(toDoId, dataToUpdate) {
  return ToDo.findByIdAndUpdate(
    toDoId,
    dataToUpdate,
    {
      new: true,
      useFindAndModify: false
    }
  );
}

async function deleteToDoDDBB(toDoId) {
  return ToDo.findByIdAndDelete(toDoId);
}

module.exports = {
  getToDosDDBB,
  createToDoDDBB,
  updateToDoDDBB,
  deleteToDoDDBB
};
