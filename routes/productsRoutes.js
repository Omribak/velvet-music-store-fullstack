const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/ProductsController');

router.route('/').get(ProductsController.getProducts);
router.route('/:productID').get(ProductsController.getSingleProduct);
router.route('/search/:searchText').get(ProductsController.getSearchProducts);

module.exports = router;
