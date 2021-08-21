const { model, Schema } = require('mongoose');

const toDoModel = Schema({

  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  tasks: [
    {},
  ],

});

module.exports = model('Todos', toDoModel);
