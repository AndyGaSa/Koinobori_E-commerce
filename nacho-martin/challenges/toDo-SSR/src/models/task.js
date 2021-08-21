const { model, Schema } = require('mongoose');

const taskSchema = Schema({
  name: String,
  status: String,
  priority: Boolean
});

module.exports = model('Task', taskSchema);
