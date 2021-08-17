const { model, Schema } = require('mongoose');

const FriendSchema = new Schema({
  picture: { type: String, default: 'http://placehold.it/32x32' },
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  about: String
});

module.exports = model('Friend', FriendSchema);
