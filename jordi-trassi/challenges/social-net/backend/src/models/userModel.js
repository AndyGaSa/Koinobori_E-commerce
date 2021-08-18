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
    friends: [{ type: Schema.Types.ObjectID, ref: 'User' }],
    adversaries: [{ type: Schema.Types.ObjectID, ref: 'User' }],
    greeting: String,

})

module.exports = model ('User', userSchema);
