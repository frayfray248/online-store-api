// imports
const express = require('express');
const multer = require('multer');
const ProductsController = require('../controllers/ProductsController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, false);
    } else {
        cb(null, true);
    }
};

// multer upload
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// router
const router = express.Router();

// routes
router.get('/', ProductsController.getProducts);
router.post('/', upload.single('image'), ProductsController.addProduct);
router.delete('/:productId', ProductsController.deleteProduct);

// export
module.exports = router;