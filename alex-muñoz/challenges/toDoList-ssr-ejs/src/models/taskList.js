const { model, Schema } = require('mongoose');

const taskListSchema = Schema({
  name: String,
  category: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = model('TaskList', taskListSchema);
