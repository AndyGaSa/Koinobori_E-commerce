const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
  description: String,
  isDone: Boolean,
  creationDate: Date
});

module.exports = mongoose.model('ToDo', toDoSchema);
