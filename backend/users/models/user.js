const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    accountId: String,
    name: String,
    email: String,
    picture: {
        data: Buffer,
        contentType: String
    },
    cash: Number,
    stocks: Object,
    password: String
});
module.exports = mongoose.model('user', userSchema);