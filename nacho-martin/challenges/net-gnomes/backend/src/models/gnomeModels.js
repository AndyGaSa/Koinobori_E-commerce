const mongoose = require('mongoose');

const gnomeSchema = mongoose.Schema({
  picture: { type: String, default: 'http://placehold.it/32x32' },
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  about: String,
  registered: { type: Date, default: new Date() },
  tags: [
    String
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'Gnome'
    }
  ],
  adversaries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gnome'

    }

  ]
});

module.exports = mongoose.model('Gnome', gnomeSchema);
