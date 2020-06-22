const ProductController = require("../controllers/productController");

module.exports = (app) => {

    app.get("/products", (req, res) => {
        ProductController.getAll((data) => {
            res.json(data);
        });
    });

    app.get("/latest", (req, res) => {
        ProductController.getLatest((data) => {
            res.json(data);
        });
    });
}