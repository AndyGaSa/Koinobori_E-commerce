const Todo = require('../models/todoModel');

async function postTodo(req, res) {
  try {
    const newTodo = await Todo.create(req.body);
    res.send(newTodo);
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

async function getTodos(req, res) {
  try {
    const newTodo = await Todo.find();
    res.send(newTodo);
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

module.exports = {
  postTodo,
  getTodos,
};
