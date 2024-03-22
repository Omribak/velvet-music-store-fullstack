const express = require('express');
const router = express.Router();
const StripeController = require('../controllers/StripeController');

router.route('/').post(StripeController.createCheckoutSession);

module.exports = router;
