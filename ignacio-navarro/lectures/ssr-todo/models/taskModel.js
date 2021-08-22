const { model, Schema } = require('mongoose');

const taskSchema = new Schema({

  taskTitle: String,
  taskDetails: String,

});
module.exports = model('Task', taskSchema);
