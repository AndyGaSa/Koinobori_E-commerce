const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
  decription: String,
  isDone: { type: Boolean, default: false },
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('todos', toDoSchema);
