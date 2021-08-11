const debug = require('debug')('toDosApi:ddbbConfig');
const ToDo = require('../models/toDoModel');

async function gettoDos({ query }, res) {
  try {
    const foundtoDos = await ToDo.find(query);
    return res.send(foundtoDos);
  } catch (error) {
    return res.send(error);
  }
}

async function posttoDo(req, res) {
  try {
    const newtoDo = await ToDo.create(req.body);
    res.status(201);
    return res.send(newtoDo);
  } catch (error) {
    return res.send(error);
  }
}

async function findOnetoDo(req, res, next) {
  const { toDoId } = req.params;
  const toDo = await ToDo.findById(toDoId);
  try {
    req.toDo = toDo;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no toDo with id ${toDoId}`));
  }
}

function getOnetoDo({ toDo }, res) {
  return res.send(toDo);
}

async function putOnetoDo(req, res) {
  const dataToUpdate = req.body;
  const { toDoId } = req.params;
  try {
    const updatedtoDo = await ToDo.findByIdAndUpdate(
      toDoId,
      dataToUpdate,
      { new: true }
    );
    return res.send(updatedtoDo);
  } catch (error) {
    return res.send(error);
  }
}

async function deleteOnetoDo(req, res) {
  const { toDoId } = req.params;
  try {
    await ToDo.findByIdAndDelete(toDoId);

    res.status(204);
    res.send();
  } catch (error) {
    res.send(error);
  }
}

async function getRandomtoDo({ query }, res) {
  const queryArr = Object.entries(query);
  debug(queryArr);
  const results = await ToDo.find({ [queryArr[0][0]]: { $lte: +queryArr[0][1] } });
  debug(results);
  const random = Math.floor(Math.random() * results.length);
  return res.send(results[random]);
}

module.exports = {
  gettoDos,
  posttoDo,
  getOnetoDo,
  putOnetoDo,
  deleteOnetoDo,
  findOnetoDo,
  getRandomtoDo
};
