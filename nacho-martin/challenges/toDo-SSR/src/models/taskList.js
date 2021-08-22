const { Schema, model } = require('mongoose');

const taskListSchema = Schema({
  name: { type: String, default: 'Unnamed tasklist' },
  category: { type: String, default: 'general' },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = model('TaskList', taskListSchema);
