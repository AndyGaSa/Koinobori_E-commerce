const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
  category: String,
  task: String,
  status: Boolean,
  created: { type: Date, default: new Date() }
});

module.exports = model('Task', taskSchema);
