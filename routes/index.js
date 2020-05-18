var express = require('express');
var router = express.Router();
var products = require('../controllers/products');
/* GET home page. */
router.get('/v1/orders',);
router.post('/v1/orders',);
router.get('/v1/products',products.getProducts);

module.exports = router;
