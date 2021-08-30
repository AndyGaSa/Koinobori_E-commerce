const { model, Schema } = require('mongoose');

const userSchema = new Schema({

  picture: { type: String, default: 'http://placehold.it/32x32' },
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  about: String,
  registered: { type: Date, default: new Date() },
  tags: [String],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  adversaries: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  greeting: String,
  favoriteFruit: String,
  email: String,
  password: String
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);