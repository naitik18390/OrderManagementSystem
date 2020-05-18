var express = require('express');
var router = express.Router();
var products = require('../controllers/products');
var orders = require('../controllers/orders');
var auth = require('../controllers/authUser');

router.get('/v1/products',products.getProducts); //Get all the Products
router.get('/v1/orders',orders.getOrders); //Get all the orders
router.post('/v1/orders',orders.placeOrders); //Place an order
router.get('/auth',auth.getAuthUser); //User Authentication
module.exports = router;
