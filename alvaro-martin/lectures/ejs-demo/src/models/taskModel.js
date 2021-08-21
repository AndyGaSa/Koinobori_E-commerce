const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
  title: String,
  done: Boolean,
  created: Date,

});

module.exports = model('Task', taskSchema);
