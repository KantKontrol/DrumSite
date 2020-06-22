const mongoose = require("mongoose");

const Product = require("../models/product");

module.exports = (app) => {

    app.get("/products", (req, res) => {
        Product.find({}).then(data => {
            res.json(data);
        });
    });


}