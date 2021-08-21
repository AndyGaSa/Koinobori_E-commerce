const { model, Schema } = require('mongoose');

const taskSchema = new Schema({

  taskTitle: String,
  taskDetails: String,
  creationDate: { type: Date, default: Date.now() },

});
module.exports = model('Task', taskSchema);
