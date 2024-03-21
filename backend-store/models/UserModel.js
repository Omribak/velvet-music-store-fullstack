const mongoose = require('mongoose');
const { CartSchema } = require('./CartModel');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  cart: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      quantity: { type: Number, default: 1 }
    }
  ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
