const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

//get all media
// router.get("/all", accessoryController.getAll);

//post create new media
router.post("/create", productController.createProduct);
router.get('/get-all', productController.getAllProduct);
router.get("/category/:categoryId", productController.getProductByCategory);

// //post create new media
// router.put("/update/:id", categoryController.create);

// router.delete("/delete/:id", categoryController.create);

module.exports = router;
