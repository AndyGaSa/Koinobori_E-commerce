const { model, Schema } = require('mongoose');

const taskSchema = Schema({
  name: { type: String, default: 'Unnamed task' },
  status: { type: String, default: 'pending' },
  priority: { type: Boolean, default: 'false' }
});

module.exports = model('Task', taskSchema);
