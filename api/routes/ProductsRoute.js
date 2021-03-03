// imports
const express = require('express');

// router
const router = express.Router();

// routes
router.get('/', (req, res, next) => {res.send('Products')})

// export
module.exports = router;