const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  todo: String,
  date: { type: Date, default: Date.now },
  completed: Boolean,
});

module.exports = mongoose.model('Todo', todoSchema);
