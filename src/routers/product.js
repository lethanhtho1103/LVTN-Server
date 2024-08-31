const express = require("express");
const router = express.Router();

const productController = require("../app/controllers/ProductController");

router.post("/", productController.createProduct);
router.get("/", productController.getAllProductsByCategoryName);
// router.get("/criteria", productController.getProductsByCriteria);
router.get("/get-by-name", productController.getProductByName);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
