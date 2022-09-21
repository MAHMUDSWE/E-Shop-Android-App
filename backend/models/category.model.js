const mongoose = require('mongoose'); //database

const categorySchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;