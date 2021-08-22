const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
  category: String,
  task: { type: String, required: true },
  itsDone: { type: Boolean, default: false },
  created: { type: Date, default: new Date() }
});

module.exports = model('Task', taskSchema);
