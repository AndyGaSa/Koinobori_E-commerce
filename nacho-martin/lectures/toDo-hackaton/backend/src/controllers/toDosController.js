const ToDo = require('../models/toDoModel');

async function getToDos(req, res) {
  const toDos = await ToDo.find();
  return res.send(toDos);
}

async function putToDo(req, res) {
  const newToDo = await ToDo.create(req.body);
  res.send(newToDo);
}
module.exports = {
  getToDos,
  putToDo

};
