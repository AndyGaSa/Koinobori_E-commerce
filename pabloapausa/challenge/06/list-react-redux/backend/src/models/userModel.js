const { model, Schema } = require('mongoose');

const user = Schema({
  name: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
});

module.exports = model('User', user);
