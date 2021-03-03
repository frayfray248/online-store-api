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
    res.send('get products')
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

            // success response
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

