const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/UserModel');

exports.createCheckoutSession = async (req, res, next) => {
  const { userId } = req.body;
  const user = await User.findById(userId).populate('cart.product');
  const CartItems = user.cart;
  try {
    const lineItems = CartItems.map((cartItem) => ({
      price_data: {
        currency: 'usd',
        unit_amount: cartItem.product.price * 100,
        product_data: {
          name: cartItem.product.name
        }
      },
      quantity: cartItem.quantity
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: 'http://localhost:3000/checkout-success',
      cancel_url: 'http://localhost:3000'
    });
    res.status(200).json({
      message: 'success',
      url: session.url
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};
