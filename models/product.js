const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    desc: {
        type: String,
        trim: true
    },
    price: {
        type: Number
    }
});


const Product = mongoose.model("Product", productSchema);


module.exports = Product;