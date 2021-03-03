// db
const mongoose = require('mongoose');
const Product = require('./ProductsModel');

// model
const ShoppingCartSchema = mongoose.Schema({
    userId : {
        type : Number,
        required: true
    },
    products : {
        type : [Product],
        default : undefined
    }
})

// export
module.exports = mongoose.model('ShoppingCart', ShoppingCartSchema);