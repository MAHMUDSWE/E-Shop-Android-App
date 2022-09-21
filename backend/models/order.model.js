const mongoose = require('mongoose'); //database

const orderSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;