const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true,
  },
  brandName: {
    type: String,
    required: true,
    trim: true,
  },
  modelName: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
