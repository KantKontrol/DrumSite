const mongoose = require("mongoose");

const Products = require("../models/products");

module.exports = (app) => {

    app.get("/products", (req, res) => {
        Products.find({}).then(data => {
            res.json(data);
        });
    });


}