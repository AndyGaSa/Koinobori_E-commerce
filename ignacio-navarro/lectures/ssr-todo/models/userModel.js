const { model, Schema } = require('mongoose');

const userSchema = new Schema({

  name: String,
  username: String,

});
module.exports = model('User', userSchema);
