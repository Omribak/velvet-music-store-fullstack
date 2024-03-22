const mongoose = require('mongoose');
const ProductModel = require('../models/ProductModel');
const Product = require('../models/ProductModel');
const AppError = require('../utils/AppError');

exports.getProducts = async (req, res) => {
  try {
    const priceFilter = req.query.maxPrice
      ? { price: { $lte: parseFloat(req.query.maxPrice) } }
      : {};
    const brandFilter = req.query.brand
      ? { brand: { $in: req.query.brand.split(',') } }
      : {};

    const salesFilter = req.query.sales
      ? { sales: { $in: req.query.sales.split(',') } }
      : {};

    const queryObj = { ...priceFilter, ...brandFilter, ...salesFilter };

    let sortObj = {};

    if (req.query.sortBy === 'priceHighLow') {
      sortObj = { price: -1 };
    }
    if (req.query.sortBy === 'priceLowHigh') {
      sortObj = { price: 1 };
    }
    if (req.query.sortBy === 'BrandAtoZ') {
      sortObj = { brand: 1 };
    }

    if (req.query.sortBy === 'Choose') {
      sortObj = {};
    }

    const products = await ProductModel.find(queryObj).sort(sortObj);

    res.status(200).json({
      status: 'success',
      results: products.length,
      products
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: 'error',
      message: "Couldn't find any products"
    });
  }
};

exports.getSingleProduct = async (req, res, next) => {
  const productID = req.params.productID;
  console.log(productID);

  try {
    const product = await Product.findById(productID);

    if (product === null) {
      const error = new AppError(
        "The product you tried to find couldn't be found",
        404
      );
      return next(error);
    }

    res.status(200).json({
      message: 'success',
      product
    });
  } catch (error) {
    res.status(500).json({
      message: 'fail',
      error
    });
  }
};

exports.getSearchProducts = async (req, res, next) => {
  const { searchText } = req.params;

  try {
    const regex = new RegExp(searchText, 'i');

    const products = await Product.find({
      $or: [
        { name: { $regex: regex } },
        { brand: { $regex: regex } },
        { category: { $regex: regex } }
      ]
    });

    res.status(200).json({
      message: 'Products found successfully',
      results: products.length,
      products
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error
    });
  }
};
