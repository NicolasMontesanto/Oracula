const express = require('express');
const routes = express.Router();
const productController = require('../controllers/productsController');

//rutas de páginas de productos
routes.get("/product", productController.product);
routes.get("/cart", productController.cart);
routes.get("/create", productController.create);
routes.post("/create", productController.store);
routes.get("/:id/edit", productController.edit);
routes.put("/:id/edit", productController.update);
module.exports = routes;