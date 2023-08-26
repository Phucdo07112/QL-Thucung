const express = require("express");
const accessoryController = require("../controllers/accessoryController");

const router = express.Router();

//get all media
// router.get("/all", accessoryController.getAll);

//post create new media
router.post("/create", accessoryController.create);

// //post create new media
// router.put("/update/:id", categoryController.create);

// router.delete("/delete/:id", categoryController.create);

module.exports = router;
