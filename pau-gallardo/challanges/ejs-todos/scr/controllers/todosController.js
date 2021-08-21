const Todo = require('../models/todoModel');

async function postTodo(req, res) {
  try {
    await Todo.create({ todo: req.body.content });
    res.status(200);
    res.redirect('/api/todos');
  } catch (error) {
    res.status(500);
  }
}

async function getTodos(req, res) {
  try {
    const newTodos = await Todo.find();
    res.status(200);
    res.render('dashboard', { todos: newTodos });
  } catch (error) {
    res.status(500);
  }
}

async function deleteTodo(req, res) {
  const { todoId } = req.params;
  try {
    await Todo.findByIdAndDelete(todoId);
    res.redirect('/api/todos');
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

async function getOneTodo(req, res) {
  const { todoId } = req.params;
  try {
    const foundTodo = await Todo.findById(todoId);
    res.send(foundTodo);
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

module.exports = {
  postTodo,
  getTodos,
  deleteTodo,
  getOneTodo,
};
