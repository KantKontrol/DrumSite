const Product = require("../models/product");

module.exports = {
    getAll: function(cb){
        Product.find({}).then(data => {
            cb(data);
        });
    },
    getLatest: function(cb){
        Product.find({}).sort({ _id: -1 }).limit(3).exec((err, latestProducts) => {
            if (err) throw err;

            cb(latestProducts);
        });
    }
};