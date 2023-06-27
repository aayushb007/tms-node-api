// routes/cartRoutes.js
const express = require("express");
const router = express.Router();
const cartController = require("../Controller/cartController");

router.get("/all-cart-products", cartController.getAllCartProducts);
router.post("/add-to-cart/:productId", cartController.addToCart);
router.post("/remove-from-cart/:productId", cartController.removeFromCart);

module.exports = router;
