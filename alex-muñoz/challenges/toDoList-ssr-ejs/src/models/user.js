const { model, Schema } = require('mongoose');

const userSchema = Schema({
  name: String,
  email: String,
  taskList: [{ type: Schema.Types.ObjectId, ref: 'TaskList' }]
});

module.exports = model('User', userSchema);
