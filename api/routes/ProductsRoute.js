// imports
const express = require('express');
const ProductsController = require('../controllers/ProductsController');

// router
const router = express.Router();

// routes
router.get('/', ProductsController.getProducts);
router.post('/', ProductsController.addProduct);

// export
module.exports = router;