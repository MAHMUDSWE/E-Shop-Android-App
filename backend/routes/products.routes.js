const express = require('express');
const { getProducts, postProducts, getProduct, updateProduct, deleteProduct, getProductsCount, getFeaturedProducts } = require('../controllers/products.controller');

const router = express.Router();

router.get("/", getProducts);

router.get('/:id', getProduct);

router.get('/get/count', getProductsCount);

router.get('/get/featured/:id', getFeaturedProducts);

router.post('/', postProducts);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;