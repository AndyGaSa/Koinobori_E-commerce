const { model, Schema } = require('mongoose');

const task = Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  done: Boolean,
  date: { type: Date, default: Date.now() },
});

module.exports = model('Task', task);
