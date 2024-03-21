const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  brand: String,
  name: String,
  image: String,
  price: Number,
  category: String,
  sales: String,
  description: String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
