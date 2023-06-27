const mongoose = require("mongoose");
//Album model
const productSchema = new mongoose.Schema(
  {
    // user_id:{
    //     type : mongoose.Types.ObjectId,
    //      ref : "Users",
    // },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
