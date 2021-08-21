const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
  title: String,
  done: Boolean,
  created: String,

});

module.exports = model('Task', taskSchema);
