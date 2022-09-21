const mongoose = require('mongoose'); //database

const userSchema = mongoose.Schema({
    name: String,
    nickName: String,
    image: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;