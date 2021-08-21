const { model, Schema } = require('mongoose');

const toDoModel = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  tasks: [
    {
      task: String,
      status: Boolean,
      date: { type: Date, default: Date.now() },
    },
  ],
});
module.exports = model('ToDos', toDoModel);
