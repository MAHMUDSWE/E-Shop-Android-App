const express = require('express');
const Product = require('../models/product.model');

const router = express.Router();

router.get("/", (req, res) => {
    Product.find()
        .then((productList) => {
            res.status(200).json(productList);
        })
        .catch((err)=>{
            res.status(500).json({
                Error: err,
                Success: false
            })
        })
})

router.post('/', (req, res) => {
    var { name, image, countInStock } = req.body;
    var product = new Product({
        name,
        image,
        countInStock
    })

    product.save()
        .then((createdProduct) => {
            res.status(201).json(createdProduct);
        })
        .catch((err) => {
            res.status(500).json({
                Error: err,
                Success: false
            });
        })
})

module.exports = router;