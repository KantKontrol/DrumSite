const ProductController = require("../controllers/productController");

module.exports = (app) => {

    app.get("/api/products", (req, res) => {
        ProductController.getAll((data) => {
            res.json(data);
        });
    });

    app.get("/api/latest", (req, res) => {
        ProductController.getLatest((data) => {
            res.json(data);
        });
    });
}