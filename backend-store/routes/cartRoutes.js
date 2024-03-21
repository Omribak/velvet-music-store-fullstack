const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');

router.route('/get-cart/:userId').get(CartController.getUserCartItems);
router.route('/add-cart-item').post(CartController.addUserCartProduct);
router.route('/clear-cart').post(CartController.ClearCart);
router.route('/remove-item').post(CartController.DeleteCartItem);
router.route('/change-amount').post(CartController.ChangeAmount);

module.exports = router;
