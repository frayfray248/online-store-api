// imports
const mongoose = require('mongoose');

// db
const db = mongoose.connection;

// models
const ShoppingCart = require('../models/ShoppingCartModel');

// error handler function
const handleError = async (code, message, res) => {
    res.status(code).json({ message })
}

exports.createShoppingCart = (req, res, next) => {
    (async () => {
        try {

            // user ID
            const userId = req.userData.userId;
            
            // existing shopping cart check
            const existingShoppingCart = await ShoppingCart.find({ userId })

            if (existingShoppingCart.length >= 1) {
                throw new Error({ code : 409, message : "User already has a shopping cart"})
            }

            // create new shopping cart
            const newShoppingCart = new ShoppingCart({ userId })
            const savedShoppingCart = await newShoppingCart.save();

            // success
            await res.status(201).json(savedShoppingCart);

            
        } catch(error) { // error handling


            // error message and log
            const message = error.message;
            console.log(message);

            // user already has a shopping cart
            if (message === "User already has a shopping cart") {

                await handleError(error.code, message, res)
                
                // validation error
            } else if (error instanceof mongoose.Error.ValidationError) {

                await handleError(400, message, res);

            } else {

                next(error);

            }
        }
    })();
}