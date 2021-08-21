const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  email: String,
  name: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = model('User', userSchema);
