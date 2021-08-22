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

async function updateTodo(req, res) {
  const { todoId } = req.params;
  try {
    const foundTodo = await Todo.findById(todoId);
    foundTodo.completed = !foundTodo.completed;
    foundTodo.save();
    res.redirect('/api/todos');
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

async function filterByDoneTodos(req, res) {
  try {
    const foundTodos = await Todo.find({ completed: true });
    res.render('doneTodos', { todosDone: foundTodos });
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

module.exports = {
  postTodo,
  getTodos,
  deleteTodo,
  updateTodo,
  filterByDoneTodos,
};
