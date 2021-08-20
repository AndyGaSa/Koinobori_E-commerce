const { model, Schema } = require('mongoose');
const Task = require('./taskModel');

const userSchema = new Schema({
  picture: { type: String, default: 'http://placehold.it/32x32' },
  name: String,
  email: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: Task }]
});

module.exports = model('User', userSchema);
