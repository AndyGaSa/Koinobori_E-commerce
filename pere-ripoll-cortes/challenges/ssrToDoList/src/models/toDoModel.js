const { model, Schema } = require('mongoose');

const toDoModel = Schema({

  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  tasks: [
    {
      task: String,
      status: Boolean,
      date: { type: Date, default: Date.now() },
    },
  ],

});

module.exports = model('Todos', toDoModel);
