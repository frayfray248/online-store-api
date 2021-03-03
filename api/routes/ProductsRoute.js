// imports
const express = require('express');
const ProductsController = require('../controllers/ProductsController');

// router
const router = express.Router();

// routes
router.get('/', ProductsController.getProducts);

// export
module.exports = router;