const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  description: String,
  completed: { type: Boolean, default: false },
  created: { type: Date, default: new Date() }
});

module.exports = mongoose.model('Todo', toDoSchema);
