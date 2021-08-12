/* const Cart = require('../models/cartModel');
const User = require('../models/userModel');
const Product = require('../models/productModel');

const addToCart = async (req, res, next) => {
  const { productId } = req.params;

  try {
    const addedProduct = await Product.findById(
      productId,
    );
    const updatedCart = await Cart.findByIdAndUpdate(
        User,
        $push: { products: {
            addedProduct
        }},
        { new: true },
      );

next()

    res.json(updatedCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
*/
