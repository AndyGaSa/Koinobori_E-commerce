const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
  task: String,
  isDone: Boolean,
  date: Date,
});

module.exports = mongoose.model('ToDo', toDoSchema);
