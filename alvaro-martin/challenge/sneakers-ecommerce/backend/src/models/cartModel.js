const { model, Schema } = require('mongoose');

const cartSchema = Schema({
  sneakers: [
    {
      sneaker: { type: Schema.Types.ObjectId, ref: 'Sneakers' },

    },
  ],
});

module.exports = model('Cart', cartSchema);
