const express = require("express");
const router = express.Router();
const ProductController = require("../Controller/ProductControllers");
const authenticateToken = require("../Middleware/authentication");
//Product route
router.get("/", authenticateToken, ProductController.viewProducts);
router.get("/filter", authenticateToken, ProductController.filterProducts);
module.exports = router;
