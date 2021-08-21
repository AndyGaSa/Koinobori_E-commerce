const { model, Schema } = require('mongoose');

const taskSchema = Schema({
  name: String,
  status: { type: String, default: 'pending' },
  priority: { type: Boolean, default: 'false' }
});

module.exports = model('Task', taskSchema);
