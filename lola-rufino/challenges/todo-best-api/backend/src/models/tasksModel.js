const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  description: String,
  isDone: Boolean,
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
