// imports
const express = require('express');
const upload = require('../middleware/upload');
const ProductsController = require('../controllers/ProductsController');

// router
const router = express.Router();

// routes
router.get('/', ProductsController.getProducts);
router.post('/', upload.single('image'), ProductsController.addProduct);
router.delete('/:productId', ProductsController.deleteProduct);

// export
module.exports = router;