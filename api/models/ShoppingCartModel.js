// db
const mongoose = require('mongoose');
const Product = require('./ProductsModel').schema;

// model
const ShoppingCartSchema = mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        required: true
    },
    products : {
        type : [Product],
        default : undefined
    }
})

// export
module.exports = mongoose.model('ShoppingCart', ShoppingCartSchema);