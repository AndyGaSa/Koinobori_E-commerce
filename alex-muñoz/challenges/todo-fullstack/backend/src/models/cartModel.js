const { model, Schema } = require('mongoose');

const cartSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product' },
      amount: Number,
      types: String
    }
  ]
});

module.exports = model('Cart', cartSchema);

const socialAppRouter = require('./src/routes/socialAppRouter');

server.use('/api/social-app', socialAppRouter);