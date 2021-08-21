const debug = require('debug')('mainController');
// const todoList = require('../mock/todoList');
const { getTasks } = require('./taskController');

const todoList = getTasks;
function getIndex(req, res) {
  debug(todoList);
  try {
    res.render('index', { todoList });
    res.status(202);
  } catch (error) {
    res.status(404);
    res.render(error);
  }
}
function get404(req, res) {
  res.render('404');
}

module.exports = {
  getIndex,
  get404,
};
