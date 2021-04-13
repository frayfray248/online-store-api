// db
const mongoose = require('mongoose');

// model
const ProductSchema = mongoose.Schema({
    name : {
        type : String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    description : {
        type: String,
        minLength: 3,
        maxLength: 255
    },
    price : {
        type: Number
    },
    image : {
        type : String
    }
});

// export
module.exports = mongoose.model('Product', ProductSchema);