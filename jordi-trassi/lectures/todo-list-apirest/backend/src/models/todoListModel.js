const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  description: String,
  isDone: Boolean,
  creationDate: Date,
});

module.exports = mongoose.model('Todo', todoSchema);
