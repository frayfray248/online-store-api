// imports
const express = require('express');
const multer = require('multer');
const ProductsController = require('../controllers/ProductsController');

// multer upload
const upload = multer({ dest: 'uploads/' });

// router
const router = express.Router();

// routes
router.get('/', ProductsController.getProducts);
router.post('/', upload.single('image'), ProductsController.addProduct);
router.delete('/:productId', ProductsController.deleteProduct);

// export
module.exports = router;