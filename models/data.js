const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const schema = new mongoose.Schema({
    username: { type: String, unique: true, required: true }, // Adding unique constraint and required
    password: { type: String, required: true } // Password is required
}, { timestamps: true });


schema.methods.generateAuthToken = function () {
    console.log(process.env.SECRETKEY)

    const token = jwt.sign({ _id: this._id }, process.env.SECRETKEY, { expiresIn: '1h' }); // You can add an expiration time if needed
       console.log(token) 
    return token;
};

const TableData = mongoose.model('TableData', schema);
module.exports = TableData;
