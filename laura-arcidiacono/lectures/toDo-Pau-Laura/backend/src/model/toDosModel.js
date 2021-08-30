const mongoose = require('mongoose');

const toDosSchema = mongoose.Schema({
    description: String,
    isDone: Boolean,
    creationDate: Date
})

module.exports = mongoose.model('toDo', toDosSchema);