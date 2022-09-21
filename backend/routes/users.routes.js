const express = require('express');
const User = require('../models/user.model');

const router = express.Router();

router.get("/", (req, res) => {
    User.find()
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
    var { name, nickName, image, countInStock } = req.body;
    var user = new User({
        name,
        nickName,
        image,
        countInStock
    })

    user.save()
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