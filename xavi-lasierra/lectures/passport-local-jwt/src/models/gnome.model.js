const { model, Schema } = require('mongoose');

const gnomeSchema = Schema({
  picture: { type: String, default: 'https://i.ibb.co/vd1cXLP/gnome-Logo-Black.png' },
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  about: String,
  registered: { type: Date, default: new Date() },
  tags: [String],
  friends: { type: [Schema.Types.ObjectId], ref: 'Gnome' },
  adversaries: { type: [Schema.Types.ObjectId], ref: 'Gnome' },
  greeting: String,
  favoriteFruit: String,
  password: String
});

gnomeSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('Gnome', gnomeSchema);
