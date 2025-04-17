const express = require('express');
const router = express.Router();
const {productStock, addTransaction, addproductStock} = require('../controllers/productController');



//product
router.get('/stock', productStock);
router.post('/stock', addproductStock);
router.post('/transaction', addTransaction);


module.exports = router;