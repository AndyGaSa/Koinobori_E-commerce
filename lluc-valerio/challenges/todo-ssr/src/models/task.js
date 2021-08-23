const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  start: { type: Date, default: Date.now() },
  end: { type: Date },
  priority: { type: String },
  isDone: { type: Boolean },
  description: { type: String }
});

module.exports = mongoose.model('Task', userSchema);
