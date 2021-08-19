const { model, Schema } = require('mongoose');

const taskSchema = Schema({
  description: String,
  isDone: Boolean,
  creationDate: { type: Date, default: Date.now },
});

module.exports = model('Task', taskSchema);
