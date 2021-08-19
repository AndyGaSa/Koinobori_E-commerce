const { model, Schema } = require('mongoose');

const userSchema = Schema(
  {
    picture: { type: String, default: 'http://placehold.it/32x32' },
    age: Number,
    eyeColor: String,
    name: String,
    gender: String,
    about: String,
    tag: [String],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    adversaries: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    greeting: String,
    favouriteFruit: String
  }
);

module.exports = model('User', userSchema);
