const { Schema, model } = require('mongoose');

const nomoSchema = Schema({
  image: String,
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  about: String,
  registered: {
    type: Date,
    default: Date.now
  },
  tags: [String],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'Gnomo'
  }],
  adversaries: [{
    type: Schema.Types.ObjectId,
    ref: 'Gnomo'
  }],
  greeting: String,
  favoriteFruit: String
});

module.exports = model('Gnomo', nomoSchema);
