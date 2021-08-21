const { model, Schema } = require('mongoose');

const userSchema = Schema({
  name: String,
  email: String,
  taskList: [{ type: Schema.Types.ObjectId, ref: 'taskList' }]
});

module.exports = model('User', userSchema);
