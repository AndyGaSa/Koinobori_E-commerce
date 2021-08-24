const { model, Schema } = require('mongoose');

const toDoSchema = new Schema({
  name: String,
  email: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],

});

module.exports = model('ToDo', toDoSchema);
