const express = require('express');
const Order = require('../models/order.model');

const router = express.Router();

router.get("/", (req, res) => {
    Order.find()
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
    var order = new Order({
        name,
        image,
        countInStock
    })

    order.save()
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