const Cart = require("../models/cart");
const Product = require("../models/product");

const addToCart = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    let cart = await Cart.findOne({ productId });
    if (cart) {
      // If the product is already in the cart, increment the quantity
      cart.quantity += 1;
    } else {
      // If the product is not in the cart, create a new cart entry
      cart = new Cart({
        productId,
        quantity: 1,
      });
    }

    await cart.save();

    // Increment the product quantity in the cart by 1
    product.quantity += 1;
    await product.save();

    res.status(200).json({ message: "Product added to cart", product });
  } catch (e) {
    next(e);
  }
};

const removeFromCart = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    let cart = await Cart.findOne({ productId });
    if (!cart || cart.quantity === 0) {
      return res.status(404).json({ error: "Product not found in cart" });
    }

    // Decrease the quantity in the cart by 1
    cart.quantity -= 1;
    await cart.save();

    // Decrease the product quantity in the cart by 1
    product.quantity -= 1;
    await product.save();

    res.status(200).json({ message: "Product removed from cart", product });
  } catch (e) {
    next(e);
  }
};

const getAllCartProducts = async (req, res, next) => {
  try {
    const cartProducts = await Cart.find().populate("productId");

    res.status(200).json({ cartProducts });
  } catch (e) {
    next(e);
  }
};

module.exports = { addToCart, removeFromCart, getAllCartProducts };
