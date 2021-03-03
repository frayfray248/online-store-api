// imports
const mongoose = require('mongoose');

// db
const db = mongoose.connection;

// models
const Product = require('../models/ProductsModel');

// get products
exports.getProducts = (req, res, next) => {
    res.send('get products')
}