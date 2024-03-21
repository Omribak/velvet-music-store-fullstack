const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        default: { products: [] }
      },
      quantity: { type: Number, default: 1 }
    }
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = { CartSchema, Cart };
