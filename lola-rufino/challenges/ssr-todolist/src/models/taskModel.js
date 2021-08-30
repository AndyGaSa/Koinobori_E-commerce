const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
  task: String,
  status: Boolean,
  created: { type: Date, default: Date.now }
});

module.exports = model('Task', taskSchema);
