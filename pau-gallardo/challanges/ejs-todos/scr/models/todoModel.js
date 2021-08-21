const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = mongoose.Schema({
  todo: String,
  date: Date,
  completed: Boolean,
});

module.exports = mongoose.model('Todo', todoSchema);
