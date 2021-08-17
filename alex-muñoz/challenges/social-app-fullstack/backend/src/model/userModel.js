const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  picture: { type: Schema.Types.ObjectId, default: 'http://placehold.it/32x32' },
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
  favouriteFruit: String
});

module.exports = model('User', userSchema);
