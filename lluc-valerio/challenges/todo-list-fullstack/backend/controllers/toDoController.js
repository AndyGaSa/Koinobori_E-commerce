const debug = require('debug')('todoApi:controller');
const ToDo = require('../models/toDoModel');

async function setToDo(req, res) {
  try {
    debug('setToDo');
    const newToDo = await ToDo.create(req.body);
    res.status(201);
    return res.send(newToDo);
  } catch (error) {
    res.status(404);
    return res.send(new Error(`ToDo has not been created: ${error}`));
  }
}
async function getToDos(req, res) {
  try {
    debug('getToDos');
    const newToDos = await ToDo.find();
    res.status(201);
    return res.send(newToDos);
  } catch (error) {
    res.status(404);
    return res.send(new Error(`Error during operation: ${error}`));
  }
}

async function getOneToDo(req, res) {
  try {
    debug('getOneToDo');
    debug(req.params);
    debug(req.params.toDoId);
    const newToDo = await ToDo.findById(req.params.toDoId);
    res.status(201);
    return res.send(newToDo);
  } catch (error) {
    res.status(500);
    return res.send(new Error(`Error during operation: ${error}`));
  }
}

module.exports = {
  setToDo,
  getToDos,
  getOneToDo
};
