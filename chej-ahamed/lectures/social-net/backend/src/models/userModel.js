const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  picture: { type: String, default: 'ffff' },
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  about: String,
  register: Date,
  tags: [String],
  friends: [

    { type: Schema.Types.ObjectId, ref: 'User' }

  ],
  adversaries: [
    { type: Schema.Types.ObjectId, ref: 'User' }

  ],
  greetings: String,
  favouriteFruit: String

});

module.exports = model('User', userSchema);
