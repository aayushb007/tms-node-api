const Product = require("../models/product");

const viewProducts = async(req, res, next) => {
    try {
        console.log(Product);
        const product = await Product.find();
        res.status(200).send(product);
    } catch (e) {
        next(e);
    }
}
const filterProducts = async (req, res, next) => {
    try {
      const { category, minPrice, maxPrice } = req.query;
      const query = {};
  
      if (category) {
        query.category = category;
      }
  
      if (minPrice && maxPrice) {
        query.price = { $gte: minPrice, $lte: maxPrice };
      } else if (minPrice) {
        query.price = { $gte: minPrice };
      } else if (maxPrice) {
        query.price = { $lte: maxPrice };
      }
  
      const filteredProducts = await Product.find(query);
      res.status(200).send(filteredProducts);
    } catch (e) {
      next(e);
    }
  };
  
  module.exports = { viewProducts, filterProducts };