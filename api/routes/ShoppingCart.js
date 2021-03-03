// imports
const express = require('express')
const ShoppingCartController = require('../controllers/ShoppingCartContoller')
const checkAuth = require('../middleware/checkAuth');

// router
const router = express.Router()

// routes
router.post('/', checkAuth, ShoppingCartController.createShoppingCart);

// export
module.exports = router;