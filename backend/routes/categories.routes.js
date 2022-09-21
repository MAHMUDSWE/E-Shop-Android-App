const express = require('express');
const Category = require('../models/category.model');

const router = express.Router();

router.get("/", (req, res) => {
    Category.find()
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
    var category = new Category({
        name,
        image,
        countInStock
    })

    category.save()
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