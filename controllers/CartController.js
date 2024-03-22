const User = require('../models/UserModel');
const AppError = require('../utils/AppError');

exports.getUserCartItems = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate('cart.product');

    if (!user) {
      const error = new AppError("Can't find the user", 404);
      return next(error);
    }

    // Exclude _id property from each item in the cart
    const UserCart = user.cart.map((cartItem) => {
      const { _id, ...cartItemWithoutId } = cartItem.toObject();
      return cartItemWithoutId;
    });

    let subtotal = UserCart.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.product.price;
    }, 0);

    let num_products = UserCart.reduce((num, cartItem) => {
      return num + cartItem.quantity;
    }, 0);

    res.status(200).json({
      message: 'success',
      UserCart,
      subtotal,
      num_products
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error
    });
  }
};

exports.addUserCartProduct = async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const userId = req.body.userId;
    const quantityProducts = parseInt(req.body.quantityProducts, 10);

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: `User with ID ${userId} not found.`
      });
    }

    const userCart = user.cart;

    const existingCartItem = userCart.find(
      (cartItem) => cartItem.product.toString() === productId
    );

    if (existingCartItem) {
      existingCartItem.quantity += quantityProducts;
      user.markModified('cart');
      await user.save();

      return res.status(201).json({
        message: 'Cart item quantity updated.'
      });
    } else {
      user.cart.push({
        product: productId,
        quantity: quantityProducts
      });
    }

    await user.save();
    await user.populate('cart.product');

    res.status(201).json({
      message: 'Successfully added the product to the cart!',
      cartItems: user.cart
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
      err
    });
  }
};

exports.ClearCart = async (req, res, next) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);
    user.cart = [];
    await user.save();
    res.status(200).json({
      message: 'success'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server Error',
      error
    });
  }
};

exports.DeleteCartItem = async (req, res, next) => {
  const { userId, productId } = req.body;

  try {
    const user = await User.findById(userId).populate('cart.product');

    user.cart = user.cart.filter((prod) => {
      return prod.product._id != productId;
    });

    let subtotal = user.cart.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.product.price;
    }, 0);

    let num_products = user.cart.reduce((num, cartItem) => {
      return num + cartItem.quantity;
    }, 0);

    await user.save();

    res.status(200).json({
      message: 'success',
      NewCart: user.cart,
      subtotal,
      num_products
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};

exports.ChangeAmount = async (req, res, next) => {
  const { userId, productId, quantity } = req.body;

  try {
    const user = await User.findById(userId).populate('cart.product');

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    const cartIndex = user.cart.findIndex(
      (cartItem) => cartItem.product._id.toString() === productId
    );

    if (cartIndex === -1) {
      return res.status(404).json({
        message: "Product not found in the user's cart"
      });
    }

    user.cart[cartIndex].quantity = quantity;

    await user.save();

    res.status(200).json({
      message: 'success',
      updatedCart: user.cart
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};
