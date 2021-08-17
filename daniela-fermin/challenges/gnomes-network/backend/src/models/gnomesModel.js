const { Schema, model } = require('mongoose');

const gnomeSchema = new Schema({
  picture: { type: String, default: 'http://placehold.it/32x32' },
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  about: String,
  registered: Date,
  tags: [String],
  friends: [{ type: Schema.Types.ObjectId, ref: 'Gnome' }],
  adversaries: [{ type: Schema.Types.ObjectId, ref: 'Gnome' }],
  greeting: String,
  favoriteFruit: String
});

module.exports = model('Gnome', gnomeSchema);
