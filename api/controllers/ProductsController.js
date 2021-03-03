// imports
const mongoose = require('mongoose');

// db
const db = mongoose.connection;

// models
const Product = require('../models/ProductsModel');

// error handler function
const handleError = async (code, message, res) => {
    res.status(code).json({ message })
}

// get products
exports.getProducts = (req, res, next) => {
    (async () => {
        try {

            // get products
            const products = await Product.find();

            // no products check
            if (products.length <= 0) throw { message: 'Not Found', code: 404 }

            // success
            await res.status(200).json(products);

            // error handling
        } catch (error) {

            // error message and log
            const message = error.message;
            console.log(message);

            if (message === 'Not Found') {
                await handleError(error.code, message, res)
            } else {
                next(error);
            }
        }
    })()
}

// get products
exports.addProduct = (req, res, next) => {
    (async () => {
        try {

            // product model
            const newProduct = new Product({
                _id: new mongoose.Types.ObjectId(),
                ...req.body
            })

            // create product
            const savedProduct = await newProduct.save();

            // log product
            console.log(`New product created: ${savedProduct.name}`);

            // success
            await res.status(201).send(savedProduct);

            // error handling
        } catch (error) {

            // error message and log
            const message = error.message;
            console.log(message);

            // validation error
            if (error instanceof mongoose.Error.ValidationError) {

                await handleError(400, message, res);

                // all other errors
            } else { next(error); }
        }
    })()
}

exports.deleteProduct = (req, res, next) => {
    (async () => {
        try {

            const productId = req.params.productId;

            // find product
            const product = await Product.findById(productId).exec();

            // no product check
            if (product.length <= 0) throw { message: 'Not Found', code: 404 }

            // delete product
            await product.remove();

            // success
            res.status(204).send();

            // error handling
        } catch (error) {

            // error message and log
            const message = error.message
            console.log(message)

            // Not found error
            if (message === 'Not Found') {
                handleError(error.code, message, res)
                
            } else { // all other errors
                next(error)
            }
        }
    })()
}