const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Product = require('../models/ProductModel');

dotenv.config({ path: '../config.env' });

// Connecting to DB

const DB = process.env.DB_CON.replace('<password>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('DB Connection Sucessful!');
  });

// Reading Files
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/products.json`, 'utf-8')
);

//Import Data

const importDataProducts = async () => {
  try {
    await Product.create(products);
    console.log('Products sucessfuly loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// Delete Data

const deleteDataProducts = async () => {
  try {
    await Product.deleteMany();
    console.log('Products sucessfuly deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//Scripts for the Data

if (process.argv[2] === '--importProducts') {
  importDataProducts();
} else if (process.argv[2] === '--deleteProducts') {
  deleteDataProducts();
}
