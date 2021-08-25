/* eslint-disable no-underscore-dangle */
const ToDo = require('../models/toDo.model');
const { userCheck } = require('./users.controller');

async function getToDos(userId) {
  return ToDo.find({ user: userId });
}

async function addToDo({ oidc, body: { description } }, res) {
  try {
    if (description) {
      const user = await userCheck(oidc.user, res);
      await ToDo.create({ user: user._id, description });
    }
    res.redirect('/');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateToDo({ params: { toDoId }, body }, res) {
  try {
    await ToDo.findByIdAndUpdate(
      toDoId,
      body
    );

    res.redirect('/');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteToDo({ params: { toDoId } }, res) {
  try {
    await ToDo.findByIdAndDelete(toDoId);

    res.redirect('/');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function completeToDo({ params: { toDoId } }, res) {
  try {
    await ToDo.findByIdAndUpdate(
      toDoId,
      { completed: 'Completed' }
    );

    res.redirect('/');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function uncompleteToDo({ params: { toDoId } }, res) {
  try {
    await ToDo.findByIdAndUpdate(
      toDoId,
      { completed: 'ToDo' }
    );

    res.redirect('/');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getToDos,
  addToDo,
  updateToDo,
  deleteToDo,
  completeToDo,
  uncompleteToDo
};
