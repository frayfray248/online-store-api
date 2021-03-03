// imports
const express = require('express')

// router
const router = express.Router();

// routes
router.get('/', (req, res, next) => {res.send('shopping cart')})

// export
module.exports = router;