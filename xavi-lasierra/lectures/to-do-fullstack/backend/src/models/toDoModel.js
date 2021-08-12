const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
  description: String,
  isDone: Boolean,
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ToDo', toDoSchema);
