const { model, Schema } = require('mongoose');

const taskListSchema = Schema({
  name: { type: String, default: 'Unnamed' },
  category: { type: String, default: 'General' },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = model('TaskList', taskListSchema);
