const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  task: String,
  name: String,
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
  isDone: Boolean,
});

module.exports = mongoose.model('todo', todoSchema);
