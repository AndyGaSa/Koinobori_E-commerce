const { model, Schema } = require('mongoose');

const userSchema = new Schema({

  name: String,

});
module.exports = model('User', userSchema);
