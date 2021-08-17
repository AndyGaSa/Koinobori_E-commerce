const { model, Schema } = require('mongoose');

const userSchema = Schema({

  picture: String,
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  about: String,
  registered: Date,
  tags: [String],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  adversaries: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  greeting: String,
  favoriteFruit: String,

});

module.exports = model('User', userSchema);
