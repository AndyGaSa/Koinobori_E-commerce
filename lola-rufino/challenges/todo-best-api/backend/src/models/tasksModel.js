const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  _id: String,
  description: String,
  isDone: Boolean,
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tasks', taskSchema);
